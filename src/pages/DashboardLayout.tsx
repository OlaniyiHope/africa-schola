

// import { useState, useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   LayoutDashboard, BookOpen, Send, Library, Radar, Users,
//   Building2, BookMarked, GraduationCap, Briefcase, CreditCard,
//   Settings, ChevronDown, Menu, X, Bell, Search, LogOut,
//   FileText, FolderOpen, Lightbulb, ClipboardList, Globe, Bookmark,
//   Download, User, Handshake, BarChart3, Database, Compass, MapPin,
//   FileUp, Wallet, Activity, Receipt, PlusCircle, Wand2, Monitor, Wrench,
//   PenLine, GitBranch, UserCheck, BarChart2, MessageSquare,
// } from "lucide-react";

// type Role = "researcher" | "academic" | "professional";

// interface NavChild {
//   icon: any;
//   label: string;
//   to: string;
//   children?: NavChild[]; // supports 3rd level
// }
// interface NavItem {
//   icon: any;
//   label: string;
//   to: string;
//   children?: NavChild[];
// }

// // ─── Nav configs ──────────────────────────────────────────────────────────────
// const NAV_CONFIG: Record<Role, NavItem[]> = {
//   researcher: [
//     { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/researcher" },
//     {
//       icon: BookMarked, label: "My Research", to: "/dashboard/researcher/research",
//       children: [
//         { icon: FileText,   label: "My Papers",         to: "/dashboard/researcher/research/papers" },
//         { icon: FolderOpen, label: "Research Projects", to: "/dashboard/researcher/research/projects" },
//         { icon: BookOpen,   label: "Reading List",      to: "/dashboard/researcher/research/reading-list" },
//         { icon: Lightbulb,  label: "Pro Tips",          to: "/dashboard/researcher/research/pro-tips" },
//           {
//       icon: Library, label: "Library", to: "/dashboard/researcher/library",
//       children: [
//         { icon: BookOpen,   label: "Overview",              to: "/dashboard/researcher/library" },
//         { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/researcher/library?tab=purchased" },
//         { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/researcher/library?tab=saved" },
//         { icon: Download,   label: "Download History",      to: "/dashboard/researcher/library?tab=downloads" },
//         { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/researcher/library?tab=lists" },
//         { icon: Globe,      label: "Journal Subscriptions", to: "/dashboard/researcher/library?tab=subscriptions" },
//       ],
//     },
//       ],
//     },
  
//     {
//       icon: Send, label: "Publishing", to: "/dashboard/researcher/publishing",
//       children: [
//         { icon: Globe,         label: "Publishing Overview", to: "/dashboard/researcher/publishing" },
//         { icon: Send,          label: "Submit Manuscript",   to: "/dashboard/researcher/publishing/submit" },
//         { icon: ClipboardList, label: "My Submissions",      to: "/dashboard/researcher/publishing/submissions" },
//         { icon: FileText,      label: "Peer Reviews",        to: "/dashboard/researcher/publishing/reviews" },
//         // ── nested Editor Workspace ──
//         // {
//         //   icon: PenLine, label: "Editor Workspace", to: "/dashboard/researcher/publishing/journals",
//         //   children: [
//         //     { icon: BookOpen,  label: "Journal Management",  to: "/dashboard/researcher/publishing/journals" },
//         //     { icon: GitBranch, label: "Editorial Workflow",  to: "/dashboard/researcher/publishing/workflow" },
//         //     { icon: UserCheck, label: "Reviewer Assignment", to: "/dashboard/researcher/publishing/reviewer-assignment" },
//         //     { icon: BarChart2, label: "Editorial Analytics", to: "/dashboard/researcher/publishing/editorial-analytics" },
//         //   ],
//         // },
//       ],
//     },
//     {
//       icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/researcher/intelligence",
//       children: [
//         { icon: FileText,  label: "Generate Paper",   to: "/dashboard/researcher/intelligence/generate-paper" },
//         { icon: Database,  label: "Dataset Explorer", to: "/dashboard/researcher/intelligence/explorer" },
//         { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/researcher/intelligence/analyzer" },
//         { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/researcher/intelligence/hub" },
//          {
//       icon: Wrench, label: "Instrument Studio", to: "/dashboard/researcher/instrument-studio",
//       children: [
//         { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/researcher/instrument-studio/create" },
//         { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/researcher/instrument-studio/paper-generator" },
//         { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/researcher/instrument-studio/slide-builder" },
//       ],
//     },
//       ],
//     },
   
//     {
//       icon: Users, label: "Network", to: "/dashboard/researcher/network",
//       children: [
//         { icon: Globe,         label: "Overview",      to: "/dashboard/researcher/network" },
//         { icon: Briefcase,     label: "Opportunities", to: "/dashboard/researcher/network/opportunities" },
//         { icon: ClipboardList, label: "Applications",  to: "/dashboard/researcher/network/applications" },
//         { icon: Users,         label: "Directory",     to: "/dashboard/researcher/network/directory" },
//         { icon: Handshake,     label: "Engagements",   to: "/dashboard/researcher/network/engagements" },
//       ],
//     },
//     {
//       icon: Users, label: "Community", to: "/dashboard/researcher/community",
//       children: [
//         { icon: Users,     label: "Feed",                   to: "/dashboard/researcher/community" },
//         { icon: Users,     label: "Discussions",            to: "/dashboard/researcher/community/discussions" },
//         { icon: Users,     label: "Researchers",            to: "/dashboard/researcher/community/researchers" },
//         { icon: Handshake, label: "Collaboration Requests", to: "/dashboard/researcher/community/collaborations" },
//         { icon: User,      label: "My Activity",            to: "/dashboard/researcher/community/activity" },
//       ],
//     },
//     {
//       icon: CreditCard, label: "Billing & Credits", to: "/dashboard/researcher/billing",
//       children: [
//         { icon: CreditCard, label: "Subscription",    to: "/dashboard/researcher/billing" },
//         { icon: Wallet,     label: "Credits",         to: "/dashboard/researcher/billing/credits" },
//         { icon: Activity,   label: "Usage",           to: "/dashboard/researcher/billing/usage" },
//         { icon: CreditCard, label: "Payment Methods", to: "/dashboard/researcher/billing/payment-methods" },
//         { icon: Receipt,    label: "Invoices",        to: "/dashboard/researcher/billing/invoices" },
//       ],
//     },
//     {
//       icon: Settings, label: "Account", to: "/dashboard/researcher/account",
//       children: [
//         { icon: User,     label: "Profile",       to: "/dashboard/researcher/account/profile" },
//         { icon: Settings, label: "Settings",      to: "/dashboard/researcher/account/settings" },
//         { icon: Bell,     label: "Notifications", to: "/dashboard/researcher/account/notifications" },
//       ],
//     },
//   ],

//   academic: [
//     { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/academic" },
//    {
//       icon: BookMarked, label: "My Research", to: "/dashboard/academic/research",
//       children: [
//         { icon: FileText,   label: "My Papers",         to: "/dashboard/academic/research/papers" },
//         { icon: FolderOpen, label: "Research Projects", to: "/dashboard/academic/research/projects" },
//         { icon: BookOpen,   label: "Reading List",      to: "/dashboard/academic/research/reading-list" },
//         { icon: Lightbulb,  label: "Pro Tips",          to: "/dashboard/academic/research/pro-tips" },
//           {
//       icon: Library, label: "Library", to: "/dashboard/academic/library",
//       children: [
//         { icon: BookOpen,   label: "Overview",              to: "/dashboard/academic/library" },
//         { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/academic/library?tab=purchased" },
//         { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/academic/library?tab=saved" },
//         { icon: Download,   label: "Download History",      to: "/dashboard/academic/library?tab=downloads" },
//         { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/academic/library?tab=lists" },
//         { icon: Globe,      label: "Journal Subscriptions", to: "/dashboard/academic/library?tab=subscriptions" },
//       ],
//     },
//       ],
//     },
 
//     {
//       icon: Send, label: "Publishing", to: "/dashboard/academic/publishing",
//       children: [
//         { icon: Globe,         label: "Publishing Overview", to: "/dashboard/academic/publishing" },
//         { icon: Send,          label: "Submit Manuscript",   to: "/dashboard/academic/publishing/submit" },
//         { icon: ClipboardList, label: "My Submissions",      to: "/dashboard/academic/publishing/submissions" },
//         { icon: FileText,      label: "Peer Reviews",        to: "/dashboard/academic/publishing/reviews" },
        
//         {
//           icon: PenLine, label: "Editor Workspace", to: "/dashboard/academic/publishing/journals",
//           children: [
//             { icon: BookOpen,  label: "Journal Management",  to: "/dashboard/academic/publishing/journals" },
//             { icon: GitBranch, label: "Editorial Workflow",  to: "/dashboard/academic/publishing/workflow" },
//             { icon: UserCheck, label: "Reviewer Assignment", to: "/dashboard/academic/publishing/reviewer-assignment" },
//             { icon: BarChart2, label: "Editorial Analytics", to: "/dashboard/academic/publishing/editorial-analytics" },
//           ],
//         },
//       ],
//     },
  
//     {
//       icon: Users, label: "Network", to: "/dashboard/academic/network",
//       children: [
//         { icon: Globe,         label: "Overview",      to: "/dashboard/academic/network" },
//         { icon: Briefcase,     label: "Opportunities", to: "/dashboard/academic/network/opportunities" },
//         { icon: ClipboardList, label: "Applications",  to: "/dashboard/academic/network/applications" },
//         { icon: Users,         label: "Directory",     to: "/dashboard/academic/network/directory" },
//         { icon: Handshake,     label: "Engagements",   to: "/dashboard/academic/network/engagements" },
//       ],
//     },
 
//      {
//       icon: Building2, label: "Institutions", to: "/dashboard/academic/institutions",
//       children: [
//         { icon: Building2,     label: "Overview",                to: "/dashboard/academic/institutions" },
//         { icon: Handshake,     label: "Partnership Requests",    to: "/dashboard/academic/institutions/partnerships" },
//         { icon: Users,         label: "Research Collaboration",  to: "/dashboard/academic/institutions/collaboration" },
//         { icon: Compass,       label: "Advisory Support",        to: "/dashboard/academic/institutions/advisory" },
//         { icon: ClipboardList, label: "My Requests",             to: "/dashboard/academic/institutions/my-requests" },
//       ],
//     },
//     {
//       icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/academic/intelligence",
//       children: [
//         { icon: FileText,  label: "Generate Paper",   to: "/dashboard/academic/intelligence/generate-paper" },
//         { icon: Database,  label: "Dataset Explorer", to: "/dashboard/academic/intelligence/explorer" },
//         { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/academic/intelligence/analyzer" },
//         { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/academic/intelligence/hub" },
//             {
//       icon: Wrench, label: "Instrument Studio", to: "/dashboard/academic/instrument-studio",
//       children: [
//         { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/academic/instrument-studio/create" },
//         { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/academic/instrument-studio/paper-generator" },
//         { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/academic/instrument-studio/slide-builder" },
//       ],
//     },
//       ],
//     },
//     {
//       icon: Users, label: "Community", to: "/dashboard/academic/community",
//       children: [
//         { icon: Users,     label: "Feed",                   to: "/dashboard/academic/community" },
//         { icon: Users,     label: "Discussions",            to: "/dashboard/academic/community/discussions" },
//         { icon: Users,     label: "Researchers",            to: "/dashboard/academic/community/researchers" },
//         { icon: Handshake, label: "Collaboration Requests", to: "/dashboard/academic/community/collaborations" },
//         { icon: User,      label: "My Activity",            to: "/dashboard/academic/community/activity" },
//       ],
//     },
//     {
//       icon: CreditCard, label: "Billing & Credits", to: "/dashboard/academic/billing",
//       children: [
//         { icon: CreditCard, label: "Subscription",    to: "/dashboard/academic/billing" },
//         { icon: Wallet,     label: "Credits",         to: "/dashboard/academic/billing/credits" },
//         { icon: Activity,   label: "Usage",           to: "/dashboard/academic/billing/usage" },
//         { icon: CreditCard, label: "Payment Methods", to: "/dashboard/academic/billing/payment-methods" },
//         { icon: Receipt,    label: "Invoices",        to: "/dashboard/academic/billing/invoices" },
//       ],
//     },
//     {
//       icon: Settings, label: "Account", to: "/dashboard/academic/account",
//       children: [
//        { icon: User,     label: "Profile",       to: "/dashboard/academic/account/profile" },
//         { icon: Settings, label: "Settings",      to: "/dashboard/academic/settings" },
//         { icon: Bell,     label: "Notifications", to: "/dashboard/academic/notifications" },
//       ],
//     },
//   ],

//   professional: [
//     { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/professional" },
//     {
//       icon: Users, label: "Network", to: "/dashboard/professional/network",
//       children: [
//         { icon: Globe,         label: "Overview",      to: "/dashboard/professional/network-overview" },
//         { icon: Briefcase,     label: "Opportunities", to: "/dashboard/professional/network/opportunities" },
//         { icon: ClipboardList, label: "Applications",  to: "/dashboard/professional/network/applications" },
//         { icon: Users,         label: "Directory",     to: "/dashboard/professional/network/directory" },
//         { icon: Handshake,     label: "Engagements",   to: "/dashboard/professional/network/engagements" },
//       ],
//     },
//     {
//       icon: Building2, label: "Institutions", to: "/dashboard/professional/institutions",
//       children: [
//         { icon: Building2,     label: "Overview",                to: "/dashboard/professional/institutions" },
//         { icon: Handshake,     label: "Partnership Requests",    to: "/dashboard/professional/institutions/partnerships" },
//         { icon: Users,         label: "Research Collaboration",  to: "/dashboard/professional/institutions/collaboration" },
//         { icon: Compass,       label: "Advisory Support",        to: "/dashboard/professional/institutions/advisory" },
//         { icon: ClipboardList, label: "My Requests",             to: "/dashboard/professional/institutions/my-requests" },
//       ],
//     },
//     {
//       icon: Library, label: "Library", to: "/dashboard/professional/library",
//       children: [

//             { icon: BookOpen,   label: "Overview",              to: "/dashboard/professional/library" },
//         { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/professional/library?tab=purchased" },
//         { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/professional/library?tab=saved" },
//         { icon: Download,   label: "Download History",      to: "/dashboard/professional/library?tab=downloads" },
//         { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/professional/library?tab=lists" },
//         { icon: Globe,      label: "Journal Subscriptions", to: "/dashboard/professional/library?tab=subscriptions" },
//       ],
//     },
//     {
//       icon: Users, label: "Community", to: "/dashboard/professional/community",
//       children: [
//         { icon: Users,     label: "Feed",                   to: "/dashboard/professional/community" },
//         { icon: Users,     label: "Discussions",            to: "/dashboard/professional/community/discussions" },
//         { icon: Handshake, label: "Collaboration Requests", to: "/dashboard/professional/community/collaborations" },
//         { icon: User,      label: "My Activity",            to: "/dashboard/professional/community/activity" },
//       ],
//     },
//     {
//       icon: GraduationCap, label: "Academic Advisory", to: "/dashboard/professional/advisory",
//       children: [
//         { icon: Compass,       label: "Advisory Overview",   to: "/dashboard/professional/advisory" },
//         { icon: FileText,      label: "Transcript Requests", to: "/dashboard/professional/advisory/transcripts" },
//         { icon: GraduationCap, label: "Degree Advisory",     to: "/dashboard/professional/advisory/degree" },
//         { icon: Globe,         label: "Study in Africa",     to: "/dashboard/professional/advisory/study-africa" },
//         { icon: MapPin,        label: "Academic Pathways",   to: "/dashboard/professional/advisory/pathways" },
//         { icon: ClipboardList, label: "My Cases",            to: "/dashboard/professional/advisory/cases" },
//         { icon: FileUp,        label: "Documents",           to: "/dashboard/professional/advisory/documents" },
//       ],
//     },
//     {
//       icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/professional/intelligence",
//       children: [
//         { icon: FileText,  label: "Generate Paper",   to: "/dashboard/professional/intelligence/generate-paper" },
//         { icon: Database,  label: "Dataset Explorer", to: "/dashboard/professional/intelligence/explorer" },
//         { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/professional/intelligence/analyzer" },
//         { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/professional/intelligence/hub" },
//             {
//       icon: Wrench, label: "Instrument Studio", to: "/dashboard/professional/instrument-studio",
//       children: [
//         { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/professional/instrument-studio/create" },
//         { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/professional/instrument-studio/paper-generator" },
//         { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/professional/instrument-studio/slide-builder" },
//       ],
//     },
//       ],
//     },
//     {
//       icon: CreditCard, label: "Billing & Credits", to: "/dashboard/professional/billing",
//       children: [
//         { icon: CreditCard, label: "Subscription",    to: "/dashboard/professional/billing" },
//         { icon: Wallet,     label: "Credits",         to: "/dashboard/professional/billing/credits" },
//         { icon: Activity,   label: "Usage",           to: "/dashboard/professional/billing/usage" },
//         { icon: CreditCard, label: "Payment Methods", to: "/dashboard/professional/billing/payment-methods" },
//         { icon: Receipt,    label: "Invoices",        to: "/dashboard/professional/billing/invoices" },
//       ],
//     },
//     {
//       icon: Settings, label: "Account", to: "/dashboard/professional/account",
//       children: [
//         { icon: User,     label: "Profile",       to: "/dashboard/professional/account/profile" },
//         { icon: Settings, label: "Settings",      to: "/dashboard/professional/settings" },
//         { icon: Bell,     label: "Notifications", to: "/dashboard/professional/notifications" },
//       ],
//     },
//   ],
// };

// const ROLE_LABEL: Record<Role, string> = {
//   researcher:   "Researcher",
//   academic:     "Academic",
//   professional: "Professional",
// };

// // ─── NavChildRow — handles both plain links and collapsible sub-groups ─────────
// function NavChildRow({ child }: { child: NavChild }) {
//   const location = useLocation();
//   const isGrandchildActive = child.children?.some(c =>
//     location.pathname === c.to || location.pathname.startsWith(c.to + "/")
//   ) ?? false;
//   const isSelfActive = location.pathname === child.to || location.pathname.startsWith(child.to + "/");
//   const isActive = isSelfActive || isGrandchildActive;
//   const [open, setOpen] = useState(isGrandchildActive);

//   if (!child.children) {
//     return (
//       <Link
//         to={child.to}
//         style={{
//           display: "flex", alignItems: "center", gap: "0.55rem",
//           padding: "0.45rem 0.75rem", borderRadius: 6,
//           marginBottom: "0.05rem", textDecoration: "none", transition: "all 0.15s",
//           background: isSelfActive ? "rgba(234,88,12,0.15)" : "transparent",
//           color: isSelfActive ? "#ea580c" : "rgba(255,255,255,0.5)",
//           fontWeight: isSelfActive ? 600 : 400, fontSize: "0.815rem",
//         }}
//         onMouseEnter={e => { if (!isSelfActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}}
//         onMouseLeave={e => { if (!isSelfActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}}
//       >
//         <child.icon size={13} style={{ flexShrink: 0 }} />
//         {child.label}
//       </Link>
//     );
//   }

//   // Has grandchildren — collapsible sub-group
//   return (
//     <div>
//       <button
//         onClick={() => setOpen(v => !v)}
//         style={{
//           width: "100%", display: "flex", alignItems: "center", gap: "0.55rem",
//           padding: "0.45rem 0.75rem", borderRadius: 6, marginBottom: "0.05rem",
//           background: isActive ? "rgba(234,88,12,0.10)" : "transparent",
//           color: isActive ? "#ea580c" : "rgba(255,255,255,0.5)",
//           fontWeight: isActive ? 600 : 400, fontSize: "0.815rem",
//           border: "none", cursor: "pointer", transition: "all 0.15s", textAlign: "left",
//         }}
//         onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}}
//         onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}}
//       >
//         <child.icon size={13} style={{ flexShrink: 0 }} />
//         <span style={{ flex: 1 }}>{child.label}</span>
//         <ChevronDown size={11} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(0deg)" : "rotate(-90deg)", opacity: 0.5 }} />
//       </button>

//       {open && (
//         <div style={{ marginLeft: "1rem", paddingLeft: "0.6rem", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
//           {child.children.map(gc => {
//             const gcActive = location.pathname === gc.to || location.pathname.startsWith(gc.to + "/");
//             return (
//               <Link
//                 key={gc.to} to={gc.to}
//                 style={{
//                   display: "flex", alignItems: "center", gap: "0.5rem",
//                   padding: "0.4rem 0.65rem", borderRadius: 5,
//                   marginBottom: "0.05rem", textDecoration: "none", transition: "all 0.15s",
//                   background: gcActive ? "rgba(234,88,12,0.15)" : "transparent",
//                   color: gcActive ? "#ea580c" : "rgba(255,255,255,0.4)",
//                   fontWeight: gcActive ? 600 : 400, fontSize: "0.79rem",
//                 }}
//                 onMouseEnter={e => { if (!gcActive) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}}
//                 onMouseLeave={e => { if (!gcActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}}
//               >
//                 <gc.icon size={12} style={{ flexShrink: 0 }} />
//                 {gc.label}
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── NavItemRow ───────────────────────────────────────────────────────────────
// function NavItemRow({ item }: { item: NavItem }) {
//   const location = useLocation();
//   const isChildActive = item.children?.some(c =>
//     location.pathname === c.to || location.pathname.startsWith(c.to + "/") ||
//     c.children?.some(gc => location.pathname === gc.to || location.pathname.startsWith(gc.to + "/"))
//   ) ?? false;
//   const isSelfActive = !item.children && (
//     location.pathname === item.to || location.pathname.startsWith(item.to + "/")
//   );
//   const isActive = isSelfActive || isChildActive;
//   const [open, setOpen] = useState(isChildActive);

//   if (!item.children) {
//     return (
//       <Link
//         to={item.to}
//         style={{
//           display: "flex", alignItems: "center", gap: "0.65rem",
//           padding: "0.6rem 0.875rem", borderRadius: 8, marginBottom: "0.1rem",
//           textDecoration: "none", transition: "all 0.15s",
//           background: isActive ? "rgba(234,88,12,0.15)" : "transparent",
//           color: isActive ? "#ea580c" : "rgba(255,255,255,0.65)",
//           fontWeight: isActive ? 700 : 500, fontSize: "0.855rem",
//         }}
//         onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; }}}
//         onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}}
//       >
//         <item.icon size={15} style={{ flexShrink: 0 }} />
//         <span style={{ flex: 1 }}>{item.label}</span>
//       </Link>
//     );
//   }

//   return (
//     <div style={{ marginBottom: "0.1rem" }}>
//       <button
//         onClick={() => setOpen(v => !v)}
//         style={{
//           width: "100%", display: "flex", alignItems: "center", gap: "0.65rem",
//           padding: "0.6rem 0.875rem", borderRadius: 8,
//           background: isActive ? "rgba(234,88,12,0.10)" : "transparent",
//           color: isActive ? "#ea580c" : "rgba(255,255,255,0.65)",
//           fontWeight: isActive ? 700 : 500, fontSize: "0.855rem",
//           border: "none", cursor: "pointer", transition: "all 0.15s", textAlign: "left",
//         }}
//         onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; }}}
//         onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = isActive ? "rgba(234,88,12,0.10)" : "transparent"; e.currentTarget.style.color = isActive ? "#ea580c" : "rgba(255,255,255,0.65)"; }}}
//       >
//         <item.icon size={15} style={{ flexShrink: 0 }} />
//         <span style={{ flex: 1 }}>{item.label}</span>
//         <ChevronDown size={13} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(0deg)" : "rotate(-90deg)", opacity: 0.6 }} />
//       </button>
//       {open && (
//         <div style={{ marginLeft: "1.25rem", paddingLeft: "0.75rem", borderLeft: "1px solid rgba(255,255,255,0.08)", marginTop: "0.15rem", marginBottom: "0.25rem" }}>
//           {item.children.map(child => (
//             <NavChildRow key={child.to} child={child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── Sidebar ──────────────────────────────────────────────────────────────────
// function Sidebar({ role }: { role: Role }) {
//   const nav = NAV_CONFIG[role];
//   const stored = localStorage.getItem("as_user");
//   const user = stored ? JSON.parse(stored) : null;
//   const initials = user?.username ? user.username.slice(0, 2).toUpperCase() : "AS";
//   const username = user?.username || "User";

//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#391b96", color: "#fff" }}>
//       <div style={{ padding: "1.25rem 1.5rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <img src="/src/logo.png" alt="AfrikaScholar" style={{ height: 36, objectFit: "contain" }} />
//         </Link>
//       </div>
//       <nav style={{ flex: 1, overflowY: "auto", padding: "0.5rem 0.75rem" }}>
//         {nav.map(item => <NavItemRow key={item.to} item={item} />)}
//       </nav>
//       <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
//           <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#ea580c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 800, flexShrink: 0 }}>
//             {initials}
//           </div>
//           <div style={{ flex: 1, minWidth: 0 }}>
//             <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{username}</p>
//             <p style={{ margin: 0, fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>{ROLE_LABEL[role]}</p>
//           </div>
//           <button onClick={() => { localStorage.clear(); window.location.href = "/login"; }} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", padding: 4, display: "flex" }} title="Logout">
//             <LogOut size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Mobile Drawer ────────────────────────────────────────────────────────────
// function MobileDrawer({ open, role, onClose }: { open: boolean; role: Role; onClose: () => void }) {
//   if (!open) return null;
//   return (
//     <>
//       <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }} />
//       <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 260, zIndex: 50 }}>
//         <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
//           <div style={{ display: "flex", justifyContent: "flex-end", padding: "0.75rem", background: "#391b96" }}>
//             <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", display: "flex" }}>
//               <X size={18} />
//             </button>
//           </div>
//           <div style={{ flex: 1, overflow: "hidden" }}>
//             <Sidebar role={role} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // ─── Top Bar ──────────────────────────────────────────────────────────────────
// function TopBar({ onMenuClick, credits, role }: { onMenuClick: () => void; credits?: number; role: Role }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const stored = localStorage.getItem("as_user");
//   const user = stored ? JSON.parse(stored) : null;
//   const initials = user?.username ? user.username.slice(0, 2).toUpperCase() : "AS";
//   const username = user?.username || "User";

//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   return (
//     <div style={{
//       height: 56, borderBottom: "1px solid #e5e7eb",
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       padding: "0 1.25rem", background: "#fff", flexShrink: 0, gap: "1rem",
//     }}>
//       {/* Hamburger */}
//       <button onClick={onMenuClick} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", color: "#6b7280", flexShrink: 0 }}>
//         <Menu size={20} />
//       </button>

//       {/* Search */}
//       <div style={{ flex: 1, maxWidth: 380, display: "flex", alignItems: "center", gap: "0.5rem", background: "#f3f4f6", borderRadius: 8, padding: "0.45rem 0.875rem" }}>
//         <Search size={14} style={{ color: "#9ca3af", flexShrink: 0 }} />
//         <input placeholder="Search..." style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: "0.85rem", color: "#374151" }} />
//       </div>

//       {/* Right side */}
//       <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
//         {credits !== undefined && (
//           <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#ea580c", whiteSpace: "nowrap" }}>
//             AI Credits: {credits}
//           </span>
//         )}

//         {/* Chat */}
//         <button style={{ position: "relative", background: "none", border: "none", cursor: "pointer", display: "flex", color: "#6b7280", padding: 2 }}>
//           <MessageSquare size={18} />
//           <span style={{ position: "absolute", top: -3, right: -4, minWidth: 16, height: 16, borderRadius: 8, background: "#ea580c", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", fontWeight: 800, color: "#fff", padding: "0 3px" }}>1</span>
//         </button>

//         {/* Bell */}
//         <Link to={`/dashboard/${role}/notifications`} style={{ position: "relative", display: "flex", color: "#6b7280", padding: 2 }}>
//           <Bell size={18} />
//           <span style={{ position: "absolute", top: -3, right: -4, minWidth: 16, height: 16, borderRadius: 8, background: "#ea580c", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", fontWeight: 800, color: "#fff", padding: "0 3px" }}>3</span>
//         </Link>

//         {/* Avatar dropdown */}
//         <div ref={dropdownRef} style={{ position: "relative" }}>
//           <button onClick={() => setDropdownOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: "0.35rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
//             <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#ea580c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 800 }}>
//               {initials}
//             </div>
//             <ChevronDown size={13} style={{ color: "#6b7280", transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
//           </button>

//           {dropdownOpen && (
//             <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 8px 24px rgba(0,0,0,0.10)", minWidth: 200, zIndex: 100, overflow: "hidden" }}>
//               <div style={{ padding: "0.875rem 1rem", borderBottom: "1px solid #f3f4f6" }}>
//                 <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{username}</p>
//                 <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>{ROLE_LABEL[role]}</p>
//               </div>
//               {[
//                 { icon: User,     label: "View Profile", to: `/dashboard/${role}/account/profile` },
//                 { icon: Settings, label: "Settings",     to: `/dashboard/${role}/account/settings` },
//               ].map(item => (
//                 <Link
//                   key={item.to} to={item.to}
//                   onClick={() => setDropdownOpen(false)}
//                   style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.65rem 1rem", textDecoration: "none", color: "#374151", fontSize: "0.85rem" }}
//                   onMouseEnter={e => (e.currentTarget.style.background = "#f9fafb")}
//                   onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
//                 >
//                   <item.icon size={15} style={{ color: "#6b7280", flexShrink: 0 }} />
//                   {item.label}
//                 </Link>
//               ))}
//               <div style={{ borderTop: "1px solid #f3f4f6" }}>
//                 <button
//                   onClick={() => { localStorage.clear(); window.location.href = "/login"; }}
//                   style={{ width: "100%", display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.65rem 1rem", background: "none", border: "none", cursor: "pointer", color: "#dc2626", fontSize: "0.85rem", textAlign: "left" }}
//                   onMouseEnter={e => (e.currentTarget.style.background = "#fef2f2")}
//                   onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
//                 >
//                   <LogOut size={15} />
//                   Log out
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Layout Shell ─────────────────────────────────────────────────────────────
// export default function DashboardLayout({
//   role,
//   children,
//   credits,
// }: {
//   role: Role;
//   children: React.ReactNode;
//   credits?: number;
// }) {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f4f5f7" }}>
//       <aside className="hidden md:flex" style={{ width: 248, flexShrink: 0, flexDirection: "column", overflow: "hidden" }}>
//         <Sidebar role={role} />
//       </aside>
//       <MobileDrawer open={mobileOpen} role={role} onClose={() => setMobileOpen(false)} />
//       <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
//         <TopBar onMenuClick={() => setMobileOpen(true)} credits={credits} role={role} />
//         <main style={{ flex: 1, overflowY: "auto", padding: "1.75rem" }}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Send, Library, Radar, Users,
  Building2, BookMarked, GraduationCap, Briefcase, CreditCard,
  Settings, ChevronDown, Menu, X, Bell, Search, LogOut,
  FileText, FolderOpen, Lightbulb, ClipboardList, Globe, Bookmark,
  Download, User, Handshake, BarChart3, Database, Compass, MapPin,
  FileUp, Wallet, Activity, Receipt, PlusCircle, Wand2, Monitor, Wrench,
  PenLine, GitBranch, UserCheck, BarChart2, MessageSquare,
} from "lucide-react";

type Role = "researcher" | "academic" | "professional";

interface NavChild {
  icon: any;
  label: string;
  to: string;
  children?: NavChild[];
}
interface NavItem {
  icon: any;
  label: string;
  to: string;
  children?: NavChild[];
}

// ─── Subscription check ───────────────────────────────────────────────────────
// function useSubscription(): boolean {
//   try {
//     const stored = localStorage.getItem("as_user");
//     if (!stored) return false;
//     const user = JSON.parse(stored);
//     return !!(user?.is_subscribed || user?.subscription?.active || user?.plan !== "free");
//   } catch {
//     return false;
//   }
// }
function useSubscription(): boolean {
  try {
    const stored = localStorage.getItem("as_user");
    if (!stored) return false;
    const user = JSON.parse(stored);
    return !!(
      user?.is_subscribed === true ||
      user?.subscription?.active === true ||
      (user?.plan && user.plan !== "free")
    );
  } catch {
    return false;
  }
}
const SUBSCRIPTION_ROUTES: Record<Role, string> = {
  researcher:   "/dashboard/researcher/publishing/subscription",
  academic:     "/dashboard/academic/publishing/subscription",
  professional: "/dashboard/professional/publishing/subscription",
};

// ─── Nav configs ──────────────────────────────────────────────────────────────
const NAV_CONFIG: Record<Role, NavItem[]> = {
  researcher: [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/researcher" },
    {
      icon: BookMarked, label: "My Research", to: "/dashboard/researcher/research",
      children: [
        { icon: FileText,   label: "My Papers",         to: "/dashboard/researcher/research/papers" },
        { icon: FolderOpen, label: "Research Projects", to: "/dashboard/researcher/research/projects" },
        { icon: BookOpen,   label: "Reading List",      to: "/dashboard/researcher/research/reading-list" },
        { icon: Lightbulb,  label: "Pro Tips",          to: "/dashboard/researcher/research/pro-tips" },
        {
          icon: Library, label: "Library", to: "/dashboard/researcher/library",
          children: [
            { icon: BookOpen,   label: "Overview",              to: "/dashboard/researcher/library" },
            { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/researcher/library?tab=purchased" },
            { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/researcher/library?tab=saved" },
            { icon: Download,   label: "Download History",      to: "/dashboard/researcher/library?tab=downloads" },
            { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/researcher/library?tab=lists" },
            { icon: Globe,      label: "Journal Subscriptions", to: "/dashboard/researcher/library?tab=subscriptions" },
          ],
        },
      ],
    },
    {
      icon: Send, label: "Publishing", to: "/dashboard/researcher/publishing",
      children: [
        { icon: Globe,         label: "Publishing Overview", to: "/dashboard/researcher/publishing" },
        { icon: Send,          label: "Submit Manuscript",   to: "/dashboard/researcher/publishing/submit" },
        { icon: ClipboardList, label: "My Submissions",      to: "/dashboard/researcher/publishing/submissions" },
        { icon: FileText,      label: "Peer Reviews",        to: "/dashboard/researcher/publishing/reviews" },
      ],
    },
    {
      icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/researcher/intelligence",
      children: [
        { icon: FileText,  label: "Generate Paper",   to: "/dashboard/researcher/intelligence/generate-paper" },
        { icon: Database,  label: "Dataset Explorer", to: "/dashboard/researcher/intelligence/explorer" },
        { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/researcher/intelligence/analyzer" },
        { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/researcher/intelligence/hub" },
        {
          icon: Wrench, label: "Instrument Studio", to: "/dashboard/researcher/instrument-studio",
          children: [
            { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/researcher/instrument-studio/create" },
            { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/researcher/instrument-studio/paper-generator" },
            { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/researcher/instrument-studio/slide-builder" },
          ],
        },
      ],
    },
    {
      icon: Users, label: "Network", to: "/dashboard/researcher/network",
      children: [
        { icon: Globe,         label: "Overview",      to: "/dashboard/researcher/network" },
        { icon: Briefcase,     label: "Opportunities", to: "/dashboard/researcher/network/opportunities" },
        { icon: ClipboardList, label: "Applications",  to: "/dashboard/researcher/network/applications" },
        { icon: Users,         label: "Directory",     to: "/dashboard/researcher/network/directory" },
        { icon: Handshake,     label: "Engagements",   to: "/dashboard/researcher/network/engagements" },
      ],
    },
    {
      icon: Users, label: "Community", to: "/dashboard/researcher/community",
      children: [
        { icon: Users,     label: "Feed",                   to: "/dashboard/researcher/community" },
        { icon: Users,     label: "Discussions",            to: "/dashboard/researcher/community/discussions" },
        { icon: Users,     label: "Researchers",            to: "/dashboard/researcher/community/researchers" },
        { icon: Handshake, label: "Collaboration Requests", to: "/dashboard/researcher/community/collaborations" },
        { icon: User,      label: "My Activity",            to: "/dashboard/researcher/community/activity" },
      ],
    },
    {
      icon: CreditCard, label: "Billing & Credits", to: "/dashboard/researcher/billing",
      children: [
        { icon: CreditCard, label: "Subscription",    to: "/dashboard/researcher/billing" },
        { icon: Wallet,     label: "Credits",         to: "/dashboard/researcher/billing/credits" },
        { icon: Activity,   label: "Usage",           to: "/dashboard/researcher/billing/usage" },
        { icon: CreditCard, label: "Payment Methods", to: "/dashboard/researcher/billing/payment-methods" },
        { icon: Receipt,    label: "Invoices",        to: "/dashboard/researcher/billing/invoices" },
      ],
    },
    {
      icon: Settings, label: "Account", to: "/dashboard/researcher/account",
      children: [
        { icon: User,     label: "Profile",       to: "/dashboard/researcher/account/profile" },
        { icon: Settings, label: "Settings",      to: "/dashboard/researcher/account/settings" },
        { icon: Bell,     label: "Notifications", to: "/dashboard/researcher/account/notifications" },
      ],
    },
  ],

  academic: [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/academic" },
    {
      icon: BookMarked, label: "My Research", to: "/dashboard/academic/research",
      children: [
        { icon: FileText,   label: "My Papers",         to: "/dashboard/academic/research/papers" },
        { icon: FolderOpen, label: "Research Projects", to: "/dashboard/academic/research/projects" },
        { icon: BookOpen,   label: "Reading List",      to: "/dashboard/academic/research/reading-list" },
        { icon: Lightbulb,  label: "Pro Tips",          to: "/dashboard/academic/research/pro-tips" },
        {
          icon: Library, label: "Library", to: "/dashboard/academic/library",
          children: [
            { icon: BookOpen,   label: "Overview",              to: "/dashboard/academic/library" },
            { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/academic/library?tab=purchased" },
            { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/academic/library?tab=saved" },
            { icon: Download,   label: "Download History",      to: "/dashboard/academic/library?tab=downloads" },
            { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/academic/library?tab=lists" },
            { icon: Globe,      label: "Journal Subscriptions", to: "/dashboard/academic/library?tab=subscriptions" },
          ],
        },
      ],
    },
    {
      icon: Send, label: "Publishing", to: "/dashboard/academic/publishing",
      children: [
        { icon: Globe,         label: "Publishing Overview", to: "/dashboard/academic/publishing" },
        { icon: Send,          label: "Submit Manuscript",   to: "/dashboard/academic/publishing/submit" },
        { icon: ClipboardList, label: "My Submissions",      to: "/dashboard/academic/publishing/submissions" },
        { icon: FileText,      label: "Peer Reviews",        to: "/dashboard/academic/publishing/reviews" },
        {
          icon: PenLine, label: "Editor Workspace", to: "/dashboard/academic/publishing/journals",
          children: [
            { icon: BookOpen,  label: "Journal Management",  to: "/dashboard/academic/publishing/journals" },
            { icon: GitBranch, label: "Editorial Workflow",  to: "/dashboard/academic/publishing/workflow" },
            { icon: UserCheck, label: "Reviewer Assignment", to: "/dashboard/academic/publishing/reviewer-assignment" },
            { icon: BarChart2, label: "Editorial Analytics", to: "/dashboard/academic/publishing/editorial-analytics" },
          ],
        },
      ],
    },
    {
      icon: Users, label: "Network", to: "/dashboard/academic/network",
      children: [
        { icon: Globe,         label: "Overview",      to: "/dashboard/academic/network" },
        { icon: Briefcase,     label: "Opportunities", to: "/dashboard/academic/network/opportunities" },
        { icon: ClipboardList, label: "Applications",  to: "/dashboard/academic/network/applications" },
        { icon: Users,         label: "Directory",     to: "/dashboard/academic/network/directory" },
        { icon: Handshake,     label: "Engagements",   to: "/dashboard/academic/network/engagements" },
      ],
    },
    {
      icon: Building2, label: "Institutions", to: "/dashboard/academic/institutions",
      children: [
        { icon: Building2,     label: "Overview",               to: "/dashboard/academic/institutions" },
        { icon: Handshake,     label: "Partnership Requests",   to: "/dashboard/academic/institutions/partnerships" },
        { icon: Users,         label: "Research Collaboration", to: "/dashboard/academic/institutions/collaboration" },
        { icon: Compass,       label: "Advisory Support",       to: "/dashboard/academic/institutions/advisory" },
        { icon: ClipboardList, label: "My Requests",            to: "/dashboard/academic/institutions/my-requests" },
      ],
    },
    {
      icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/academic/intelligence",
      children: [
        { icon: FileText,  label: "Generate Paper",   to: "/dashboard/academic/intelligence/generate-paper" },
        { icon: Database,  label: "Dataset Explorer", to: "/dashboard/academic/intelligence/explorer" },
        { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/academic/intelligence/analyzer" },
        { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/academic/intelligence/hub" },
        {
          icon: Wrench, label: "Instrument Studio", to: "/dashboard/academic/instrument-studio",
          children: [
            { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/academic/instrument-studio/create" },
            { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/academic/instrument-studio/paper-generator" },
            { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/academic/instrument-studio/slide-builder" },
          ],
        },
      ],
    },
    {
      icon: Users, label: "Community", to: "/dashboard/academic/community",
      children: [
        { icon: Users,     label: "Feed",                   to: "/dashboard/academic/community" },
        { icon: Users,     label: "Discussions",            to: "/dashboard/academic/community/discussions" },
        { icon: Users,     label: "Researchers",            to: "/dashboard/academic/community/researchers" },
        { icon: Handshake, label: "Collaboration Requests", to: "/dashboard/academic/community/collaborations" },
        { icon: User,      label: "My Activity",            to: "/dashboard/academic/community/activity" },
      ],
    },
    {
      icon: CreditCard, label: "Billing & Credits", to: "/dashboard/academic/billing",
      children: [
        { icon: CreditCard, label: "Subscription",    to: "/dashboard/academic/billing" },
        { icon: Wallet,     label: "Credits",         to: "/dashboard/academic/billing/credits" },
        { icon: Activity,   label: "Usage",           to: "/dashboard/academic/billing/usage" },
        { icon: CreditCard, label: "Payment Methods", to: "/dashboard/academic/billing/payment-methods" },
        { icon: Receipt,    label: "Invoices",        to: "/dashboard/academic/billing/invoices" },
      ],
    },
    {
      icon: Settings, label: "Account", to: "/dashboard/academic/account",
      children: [
        { icon: User,     label: "Profile",       to: "/dashboard/academic/account/profile" },
        { icon: Settings, label: "Settings",      to: "/dashboard/academic/settings" },
        { icon: Bell,     label: "Notifications", to: "/dashboard/academic/notifications" },
      ],
    },
  ],

  professional: [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/professional" },
    {
      icon: Users, label: "Network", to: "/dashboard/professional/network",
      children: [
        { icon: Globe,         label: "Overview",      to: "/dashboard/professional/network-overview" },
        { icon: Briefcase,     label: "Opportunities", to: "/dashboard/professional/network/opportunities" },
        { icon: ClipboardList, label: "Applications",  to: "/dashboard/professional/network/applications" },
        { icon: Users,         label: "Directory",     to: "/dashboard/professional/network/directory" },
        { icon: Handshake,     label: "Engagements",   to: "/dashboard/professional/network/engagements" },
      ],
    },
    {
      icon: Building2, label: "Institutions", to: "/dashboard/professional/institutions",
      children: [
        { icon: Building2,     label: "Overview",               to: "/dashboard/professional/institutions" },
        { icon: Handshake,     label: "Partnership Requests",   to: "/dashboard/professional/institutions/partnerships" },
        { icon: Users,         label: "Research Collaboration", to: "/dashboard/professional/institutions/collaboration" },
        { icon: Compass,       label: "Advisory Support",       to: "/dashboard/professional/institutions/advisory" },
        { icon: ClipboardList, label: "My Requests",            to: "/dashboard/professional/institutions/my-requests" },
      ],
    },
    {
      icon: Library, label: "Library", to: "/dashboard/professional/library",
      children: [
        { icon: BookOpen,   label: "Overview",              to: "/dashboard/professional/library" },
        { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/professional/library?tab=purchased" },
        { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/professional/library?tab=saved" },
        { icon: Download,   label: "Download History",      to: "/dashboard/professional/library?tab=downloads" },
        { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/professional/library?tab=lists" },
        { icon: Globe,      label: "Journal Subscriptions", to: "/dashboard/professional/library?tab=subscriptions" },
      ],
    },
    {
      icon: Users, label: "Community", to: "/dashboard/professional/community",
      children: [
        { icon: Users,     label: "Feed",                   to: "/dashboard/professional/community" },
        { icon: Users,     label: "Discussions",            to: "/dashboard/professional/community/discussions" },
        { icon: Handshake, label: "Collaboration Requests", to: "/dashboard/professional/community/collaborations" },
        { icon: User,      label: "My Activity",            to: "/dashboard/professional/community/activity" },
      ],
    },
    {
      icon: GraduationCap, label: "Academic Advisory", to: "/dashboard/professional/advisory",
      children: [
        { icon: Compass,       label: "Advisory Overview",   to: "/dashboard/professional/advisory" },
        { icon: FileText,      label: "Transcript Requests", to: "/dashboard/professional/advisory/transcripts" },
        { icon: GraduationCap, label: "Degree Advisory",     to: "/dashboard/professional/advisory/degree" },
        { icon: Globe,         label: "Study in Africa",     to: "/dashboard/professional/advisory/study-africa" },
        { icon: MapPin,        label: "Academic Pathways",   to: "/dashboard/professional/advisory/pathways" },
        { icon: ClipboardList, label: "My Cases",            to: "/dashboard/professional/advisory/cases" },
        { icon: FileUp,        label: "Documents",           to: "/dashboard/professional/advisory/documents" },
      ],
    },
    {
      icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/professional/intelligence",
      children: [
        { icon: FileText,  label: "Generate Paper",   to: "/dashboard/professional/intelligence/generate-paper" },
        { icon: Database,  label: "Dataset Explorer", to: "/dashboard/professional/intelligence/explorer" },
        { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/professional/intelligence/analyzer" },
        { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/professional/intelligence/hub" },
        {
          icon: Wrench, label: "Instrument Studio", to: "/dashboard/professional/instrument-studio",
          children: [
            { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/professional/instrument-studio/create" },
            { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/professional/instrument-studio/paper-generator" },
            { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/professional/instrument-studio/slide-builder" },
          ],
        },
      ],
    },
    {
      icon: CreditCard, label: "Billing & Credits", to: "/dashboard/professional/billing",
      children: [
        { icon: CreditCard, label: "Subscription",    to: "/dashboard/professional/billing" },
        { icon: Wallet,     label: "Credits",         to: "/dashboard/professional/billing/credits" },
        { icon: Activity,   label: "Usage",           to: "/dashboard/professional/billing/usage" },
        { icon: CreditCard, label: "Payment Methods", to: "/dashboard/professional/billing/payment-methods" },
        { icon: Receipt,    label: "Invoices",        to: "/dashboard/professional/billing/invoices" },
      ],
    },
    {
      icon: Settings, label: "Account", to: "/dashboard/professional/account",
      children: [
        { icon: User,     label: "Profile",       to: "/dashboard/professional/account/profile" },
        { icon: Settings, label: "Settings",      to: "/dashboard/professional/settings" },
        { icon: Bell,     label: "Notifications", to: "/dashboard/professional/notifications" },
      ],
    },
  ],
};

const ROLE_LABEL: Record<Role, string> = {
  researcher:   "Researcher",
  academic:     "Academic",
  professional: "Professional",
};

// ─── Locked nav item ──────────────────────────────────────────────────────────
function LockedNavItem({ item, role }: { item: NavItem; role: Role }) {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "0.1rem" }}>
      <button
        onClick={() => navigate(SUBSCRIPTION_ROUTES[role])}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: "0.65rem",
          padding: "0.6rem 0.875rem", borderRadius: 8,
          background: "transparent",
          color: "rgba(255,255,255,0.35)",
          fontWeight: 500, fontSize: "0.855rem",
          border: "none", cursor: "pointer", transition: "all 0.15s", textAlign: "left",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          e.currentTarget.style.color = "rgba(255,255,255,0.55)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "rgba(255,255,255,0.35)";
        }}
        title="Upgrade to access Research Intelligence"
      >
        <item.icon size={15} style={{ flexShrink: 0, opacity: 0.5 }} />
        <span style={{ flex: 1 }}>{item.label}</span>
        <span style={{
          fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.4rem",
          borderRadius: 4, background: "rgba(234,88,12,0.25)",
          color: "#ea580c", whiteSpace: "nowrap", letterSpacing: "0.03em",
        }}>
          🔒 PRO
        </span>
      </button>
    </div>
  );
}

// ─── NavChildRow ──────────────────────────────────────────────────────────────
function NavChildRow({ child }: { child: NavChild }) {
  const location = useLocation();
  const isGrandchildActive = child.children?.some(c =>
    location.pathname === c.to || location.pathname.startsWith(c.to + "/")
  ) ?? false;
  const isSelfActive = location.pathname === child.to || location.pathname.startsWith(child.to + "/");
  const isActive = isSelfActive || isGrandchildActive;
  const [open, setOpen] = useState(isGrandchildActive);

  if (!child.children) {
    return (
      <Link
        to={child.to}
        style={{
          display: "flex", alignItems: "center", gap: "0.55rem",
          padding: "0.45rem 0.75rem", borderRadius: 6,
          marginBottom: "0.05rem", textDecoration: "none", transition: "all 0.15s",
          background: isSelfActive ? "rgba(234,88,12,0.15)" : "transparent",
          color: isSelfActive ? "#ea580c" : "rgba(255,255,255,0.5)",
          fontWeight: isSelfActive ? 600 : 400, fontSize: "0.815rem",
        }}
        onMouseEnter={e => { if (!isSelfActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}}
        onMouseLeave={e => { if (!isSelfActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}}
      >
        <child.icon size={13} style={{ flexShrink: 0 }} />
        {child.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: "0.55rem",
          padding: "0.45rem 0.75rem", borderRadius: 6, marginBottom: "0.05rem",
          background: isActive ? "rgba(234,88,12,0.10)" : "transparent",
          color: isActive ? "#ea580c" : "rgba(255,255,255,0.5)",
          fontWeight: isActive ? 600 : 400, fontSize: "0.815rem",
          border: "none", cursor: "pointer", transition: "all 0.15s", textAlign: "left",
        }}
        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}}
        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}}
      >
        <child.icon size={13} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>{child.label}</span>
        <ChevronDown size={11} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(0deg)" : "rotate(-90deg)", opacity: 0.5 }} />
      </button>

      {open && (
        <div style={{ marginLeft: "1rem", paddingLeft: "0.6rem", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
          {child.children.map(gc => {
            const gcActive = location.pathname === gc.to || location.pathname.startsWith(gc.to + "/");
            return (
              <Link
                key={gc.to} to={gc.to}
                style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.4rem 0.65rem", borderRadius: 5,
                  marginBottom: "0.05rem", textDecoration: "none", transition: "all 0.15s",
                  background: gcActive ? "rgba(234,88,12,0.15)" : "transparent",
                  color: gcActive ? "#ea580c" : "rgba(255,255,255,0.4)",
                  fontWeight: gcActive ? 600 : 400, fontSize: "0.79rem",
                }}
                onMouseEnter={e => { if (!gcActive) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}}
                onMouseLeave={e => { if (!gcActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}}
              >
                <gc.icon size={12} style={{ flexShrink: 0 }} />
                {gc.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── NavItemRow ───────────────────────────────────────────────────────────────
function NavItemRow({ item, role }: { item: NavItem; role: Role }) {
  const location = useLocation();
  const isSubscribed = useSubscription();

  // ── Gate: lock Research Intelligence for unsubscribed users ──────────────
  const isIntelligenceItem =
    item.to.includes("/intelligence") ||
    item.label.toLowerCase().includes("research intelligence");

  if (isIntelligenceItem && !isSubscribed) {
    return <LockedNavItem item={item} role={role} />;
  }

  const isChildActive = item.children?.some(c =>
    location.pathname === c.to || location.pathname.startsWith(c.to + "/") ||
    c.children?.some(gc => location.pathname === gc.to || location.pathname.startsWith(gc.to + "/"))
  ) ?? false;
  const isSelfActive = !item.children && (
    location.pathname === item.to || location.pathname.startsWith(item.to + "/")
  );
  const isActive = isSelfActive || isChildActive;
  const [open, setOpen] = useState(isChildActive);

  if (!item.children) {
    return (
      <Link
        to={item.to}
        style={{
          display: "flex", alignItems: "center", gap: "0.65rem",
          padding: "0.6rem 0.875rem", borderRadius: 8, marginBottom: "0.1rem",
          textDecoration: "none", transition: "all 0.15s",
          background: isActive ? "rgba(234,88,12,0.15)" : "transparent",
          color: isActive ? "#ea580c" : "rgba(255,255,255,0.65)",
          fontWeight: isActive ? 700 : 500, fontSize: "0.855rem",
        }}
        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; }}}
        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}}
      >
        <item.icon size={15} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>{item.label}</span>
      </Link>
    );
  }

  return (
    <div style={{ marginBottom: "0.1rem" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: "0.65rem",
          padding: "0.6rem 0.875rem", borderRadius: 8,
          background: isActive ? "rgba(234,88,12,0.10)" : "transparent",
          color: isActive ? "#ea580c" : "rgba(255,255,255,0.65)",
          fontWeight: isActive ? 700 : 500, fontSize: "0.855rem",
          border: "none", cursor: "pointer", transition: "all 0.15s", textAlign: "left",
        }}
        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; }}}
        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = isActive ? "rgba(234,88,12,0.10)" : "transparent"; e.currentTarget.style.color = isActive ? "#ea580c" : "rgba(255,255,255,0.65)"; }}}
      >
        <item.icon size={15} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>{item.label}</span>
        <ChevronDown size={13} style={{ flexShrink: 0, transition: "transform 0.2s", transform: open ? "rotate(0deg)" : "rotate(-90deg)", opacity: 0.6 }} />
      </button>
      {open && (
        <div style={{ marginLeft: "1.25rem", paddingLeft: "0.75rem", borderLeft: "1px solid rgba(255,255,255,0.08)", marginTop: "0.15rem", marginBottom: "0.25rem" }}>
          {item.children.map(child => (
            <NavChildRow key={child.to} child={child} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ role }: { role: Role }) {
  const nav = NAV_CONFIG[role];
  const stored = localStorage.getItem("as_user");
  const user = stored ? JSON.parse(stored) : null;
  const initials = user?.username ? user.username.slice(0, 2).toUpperCase() : "AS";
  const username = user?.username || "User";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#391b96", color: "#fff" }}>
      <div style={{ padding: "1.25rem 1.5rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src="/src/logo.png" alt="AfrikaScholar" style={{ height: 36, objectFit: "contain" }} />
        </Link>
      </div>
      <nav style={{ flex: 1, overflowY: "auto", padding: "0.5rem 0.75rem" }}>
        {nav.map(item => <NavItemRow key={item.to} item={item} role={role} />)}
      </nav>
      <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#ea580c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 800, flexShrink: 0 }}>
            {initials}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{username}</p>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>{ROLE_LABEL[role]}</p>
          </div>
          <button onClick={() => { localStorage.clear(); window.location.href = "/login"; }} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", padding: 4, display: "flex" }} title="Logout">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
function MobileDrawer({ open, role, onClose }: { open: boolean; role: Role; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }} />
      <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 260, zIndex: 50 }}>
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "0.75rem", background: "#391b96" }}>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", display: "flex" }}>
              <X size={18} />
            </button>
          </div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <Sidebar role={role} />
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────
function TopBar({ onMenuClick, credits, role }: { onMenuClick: () => void; credits?: number; role: Role }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const stored = localStorage.getItem("as_user");
  const user = stored ? JSON.parse(stored) : null;
  const initials = user?.username ? user.username.slice(0, 2).toUpperCase() : "AS";
  const username = user?.username || "User";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div style={{
      height: 56, borderBottom: "1px solid #e5e7eb",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 1.25rem", background: "#fff", flexShrink: 0, gap: "1rem",
    }}>
      <button onClick={onMenuClick} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", color: "#6b7280", flexShrink: 0 }}>
        <Menu size={20} />
      </button>

      <div style={{ flex: 1, maxWidth: 380, display: "flex", alignItems: "center", gap: "0.5rem", background: "#f3f4f6", borderRadius: 8, padding: "0.45rem 0.875rem" }}>
        <Search size={14} style={{ color: "#9ca3af", flexShrink: 0 }} />
        <input placeholder="Search..." style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: "0.85rem", color: "#374151" }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
        {credits !== undefined && (
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#ea580c", whiteSpace: "nowrap" }}>
            AI Credits: {credits}
          </span>
        )}

        <button style={{ position: "relative", background: "none", border: "none", cursor: "pointer", display: "flex", color: "#6b7280", padding: 2 }}>
          <MessageSquare size={18} />
          <span style={{ position: "absolute", top: -3, right: -4, minWidth: 16, height: 16, borderRadius: 8, background: "#ea580c", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", fontWeight: 800, color: "#fff", padding: "0 3px" }}>1</span>
        </button>

        <Link to={`/dashboard/${role}/notifications`} style={{ position: "relative", display: "flex", color: "#6b7280", padding: 2 }}>
          <Bell size={18} />
          <span style={{ position: "absolute", top: -3, right: -4, minWidth: 16, height: 16, borderRadius: 8, background: "#ea580c", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", fontWeight: 800, color: "#fff", padding: "0 3px" }}>3</span>
        </Link>

        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button onClick={() => setDropdownOpen(v => !v)} style={{ display: "flex", alignItems: "center", gap: "0.35rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#ea580c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 800 }}>
              {initials}
            </div>
            <ChevronDown size={13} style={{ color: "#6b7280", transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
          </button>

          {dropdownOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 8px 24px rgba(0,0,0,0.10)", minWidth: 200, zIndex: 100, overflow: "hidden" }}>
              <div style={{ padding: "0.875rem 1rem", borderBottom: "1px solid #f3f4f6" }}>
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{username}</p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "#6b7280" }}>{ROLE_LABEL[role]}</p>
              </div>
              {[
                { icon: User,     label: "View Profile", to: `/dashboard/${role}/account/profile` },
                { icon: Settings, label: "Settings",     to: `/dashboard/${role}/account/settings` },
              ].map(item => (
                <Link
                  key={item.to} to={item.to}
                  onClick={() => setDropdownOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.65rem 1rem", textDecoration: "none", color: "#374151", fontSize: "0.85rem" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f9fafb")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <item.icon size={15} style={{ color: "#6b7280", flexShrink: 0 }} />
                  {item.label}
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #f3f4f6" }}>
                <button
                  onClick={() => { localStorage.clear(); window.location.href = "/login"; }}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "0.65rem", padding: "0.65rem 1rem", background: "none", border: "none", cursor: "pointer", color: "#dc2626", fontSize: "0.85rem", textAlign: "left" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#fef2f2")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <LogOut size={15} />
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Layout Shell ─────────────────────────────────────────────────────────────
export default function DashboardLayout({
  role,
  children,
  credits,
}: {
  role: Role;
  children: React.ReactNode;
  credits?: number;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f4f5f7" }}>
      <aside className="hidden md:flex" style={{ width: 248, flexShrink: 0, flexDirection: "column", overflow: "hidden" }}>
        <Sidebar role={role} />
      </aside>
      <MobileDrawer open={mobileOpen} role={role} onClose={() => setMobileOpen(false)} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopBar onMenuClick={() => setMobileOpen(true)} credits={credits} role={role} />
        <main style={{ flex: 1, overflowY: "auto", padding: "1.75rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}