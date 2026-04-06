// import { Link } from "react-router-dom";
// import {
//   FileText, Users, BookOpen, ArrowUpRight, CheckCircle,
//   AlertCircle, RefreshCw, Eye, Calendar, Zap, ChevronRight,
//   Plus, ClipboardList, GraduationCap, Star, TrendingUp, Send,
// } from "lucide-react";
// import DashboardLayout from "./DashboardLayout";

// // ─── Mock data ────────────────────────────────────────────────────────────────

// const submissions = [
//   { id: "SUB-007", title: "Pedagogy & Digital Learning in African Universities", journal: "Journal of African Education",  status: "under_review",       date: "2026-02-10" },
//   { id: "SUB-006", title: "Curriculum Reform and Research Integration",          journal: "African Academic Review",       status: "submitted",           date: "2026-02-15" },
//   { id: "SUB-005", title: "Peer Learning Models in Sub-Saharan Institutions",    journal: "Higher Education Africa",       status: "revision_requested",  date: "2026-01-05" },
//   { id: "SUB-004", title: "Research Mentorship and Graduate Supervision",        journal: "Journal of African Dev.",       status: "accepted",            date: "2025-11-20" },
// ];

// const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
//   submitted:          { label: "Submitted",          color: "#6b7280", bg: "#f3f4f6" },
//   under_review:       { label: "Under Review",       color: "#d97706", bg: "#fffbeb" },
//   revision_requested: { label: "Revision Requested", color: "#ea580c", bg: "#fff7ed" },
//   accepted:           { label: "Accepted",           color: "#16a34a", bg: "#f0fdf4" },
// };

// const reviewQueue = [
//   { title: "Machine Learning Applications in African Agriculture", journal: "JAES", due: "Mar 30, 2026", priority: "high" },
//   { title: "Post-Colonial Theories in Educational Policy",          journal: "AAR",  due: "Apr 4, 2026",  priority: "medium" },
//   { title: "Climate Adaptation Strategies in West Africa",          journal: "HEA",  due: "Apr 10, 2026", priority: "low" },
// ];

// const quickActions = [
//   { icon: Send,          label: "Submit Manuscript", to: "/dashboard/academic/submit",      color: "#381b92", bg: "rgba(56,27,146,0.08)" },
//   { icon: ClipboardList, label: "Peer Reviews",      to: "/dashboard/academic/reviews",     color: "#d97706", bg: "rgba(217,119,6,0.08)" },
//   { icon: Users,         label: "Supervision",       to: "/dashboard/academic/supervision", color: "#0891b2", bg: "rgba(8,145,178,0.08)" },
//   { icon: BookOpen,      label: "Calls for Papers",  to: "/dashboard/academic/calls",       color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
// ];

// function StatusBadge({ status }: { status: string }) {
//   const cfg = statusConfig[status] ?? statusConfig.submitted;
//   return (
//     <span style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}30`, borderRadius: 999, padding: "0.2rem 0.6rem", fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap" }}>
//       {cfg.label}
//     </span>
//   );
// }

// function StatCard({ icon: Icon, label, value, sub, color, to }: { icon: React.ElementType; label: string; value: number | string; sub?: string; color: string; to?: string }) {
//   const content = (
//     <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", transition: "box-shadow 0.15s, transform 0.15s", cursor: to ? "pointer" : "default" }}
//       onMouseEnter={e => { if (to) { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)"; } }}
//       onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
//     >
//       <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.875rem" }}>
//         <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Icon size={20} style={{ color }} />
//         </div>
//         {to && <ArrowUpRight size={14} style={{ color: "#9ca3af" }} />}
//       </div>
//       <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1f2937", lineHeight: 1 }}>{value}</div>
//       <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6b7280", marginTop: "0.3rem" }}>{label}</div>
//       {sub && <div style={{ fontSize: "0.7rem", color, marginTop: "0.25rem", fontWeight: 600 }}>{sub}</div>}
//     </div>
//   );
//   return to ? <Link to={to} style={{ textDecoration: "none" }}>{content}</Link> : content;
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────

// export default function AcademicDashboard() {
//   const stored = localStorage.getItem("as_user");
//   const user = stored ? JSON.parse(stored) : null;
//   const name = user?.username || "Academic";
//   const initials = name.slice(0, 2).toUpperCase();
//   const h = new Date().getHours();
//   const greeting = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

//   return (
//     <DashboardLayout role="academic" credits={55}>
//       <div style={{ maxWidth: 1100, margin: "0 auto" }}>

//         {/* Welcome Banner */}
//         <div style={{
//           background: "linear-gradient(135deg, #0f1623 0%, #0c2d6b 60%, #1a4da8 100%)",
//           borderRadius: 16, padding: "1.75rem 2rem", marginBottom: "1.75rem",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "#ea580c", opacity: 0.12 }} />
//           <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//               <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#1a4da8", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 800, flexShrink: 0 }}>{initials}</div>
//               <div>
//                 <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", margin: "0 0 0.2rem" }}>{greeting},</p>
//                 <h1 style={{ fontSize: "clamp(1rem,3vw,1.4rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "#fff", margin: 0 }}>{name} 👋</h1>
//                 <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", margin: "0.2rem 0 0" }}>Manage publishing, peer reviews, editorial tasks, and academic collaboration.</p>
//               </div>
//             </div>
//             <Link to="/dashboard/academic/submit" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#ea580c", color: "#fff", border: "none", borderRadius: 10, padding: "0.7rem 1.25rem", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
//               <Plus size={16} /> Submit Paper
//             </Link>
//           </div>
//         </div>

//         {/* Identity Card */}
//         <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem 1.5rem", marginBottom: "1.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//             <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#1a4da8", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>{initials}</div>
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//                 <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1f2937" }}>{name}</span>
//                 <span style={{ background: "#eff6ff", color: "#1a4da8", border: "1px solid #bfdbfe", borderRadius: 999, padding: "0.15rem 0.6rem", fontSize: "0.7rem", fontWeight: 700 }}>Academic</span>
//               </div>
//               <p style={{ margin: "0.2rem 0 0", fontSize: "0.78rem", color: "#6b7280" }}>{user?.email || ""}</p>
//             </div>
//           </div>
//           <div style={{ display: "flex", gap: "0.75rem" }}>
//             <Link to="/dashboard/academic/profile" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: "0.8rem", fontWeight: 600, color: "#374151", textDecoration: "none" }}>
//               <Eye size={14} /> View
//             </Link>
//             <Link to="/dashboard/academic/profile/edit" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: "0.8rem", fontWeight: 600, color: "#374151", textDecoration: "none" }}>
//               Edit
//             </Link>
//           </div>
//         </div>

//         {/* Stats */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
//           <StatCard icon={FileText}      label="Publications"     value={12} color="#381b92" to="/dashboard/academic/submissions" sub="↑ 3 this year" />
//           <StatCard icon={ClipboardList} label="Pending Reviews"  value={3}  color="#d97706" to="/dashboard/academic/reviews"    sub="Due this week" />
//           <StatCard icon={AlertCircle}   label="Needs Revision"   value={1}  color="#ea580c" to="/dashboard/academic/revisions"  sub="Action needed" />
//           <StatCard icon={GraduationCap} label="Students Supervised" value={8} color="#0891b2" />
//           <StatCard icon={Star}          label="Citations"        value={124} color="#7c3aed" />
//           <StatCard icon={CheckCircle}   label="Accepted Papers"  value={9}  color="#16a34a" />
//         </div>

//         {/* Two-column */}
//         <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "1.25rem", alignItems: "start" }}>

//           {/* Left */}
//           <div>
//             {/* Quick Actions */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", marginBottom: "1.25rem" }}>
//               <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem" }}>Quick Actions</h2>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
//                 {quickActions.map(({ icon: Icon, label, to, color, bg }) => (
//                   <Link key={to} to={to} style={{ textDecoration: "none" }}>
//                     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", padding: "1rem 0.5rem", borderRadius: 12, background: bg, border: `1px solid ${color}20`, textAlign: "center", transition: "transform 0.15s" }}
//                       onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
//                       onMouseLeave={e => (e.currentTarget.style.transform = "none")}
//                     >
//                       <Icon size={20} style={{ color }} />
//                       <span style={{ fontSize: "0.72rem", fontWeight: 700, color, lineHeight: 1.3 }}>{label}</span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Submissions table */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", marginBottom: "1.25rem" }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
//                 <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>My Submissions</h2>
//                 <Link to="/dashboard/academic/submissions" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ea580c", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
//                   View all <ChevronRight size={13} />
//                 </Link>
//               </div>
//               <div style={{ overflowX: "auto" }}>
//                 <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                   <thead>
//                     <tr style={{ background: "#f9fafb" }}>
//                       {["ID", "Title", "Status", "Date"].map(h => (
//                         <th key={h} style={{ padding: "0.65rem 1rem", textAlign: "left", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6b7280", whiteSpace: "nowrap" }}>{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {submissions.map(sub => (
//                       <tr key={sub.id} style={{ borderTop: "1px solid #f3f4f6" }}
//                         onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
//                         onMouseLeave={e => (e.currentTarget.style.background = "none")}
//                       >
//                         <td style={{ padding: "0.875rem 1rem", fontSize: "0.78rem", fontWeight: 700, color: "#1a4da8", whiteSpace: "nowrap" }}>{sub.id}</td>
//                         <td style={{ padding: "0.875rem 1rem", maxWidth: 220 }}>
//                           <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "#1f2937", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sub.title}</div>
//                           <div style={{ fontSize: "0.7rem", color: "#6b7280", marginTop: 2 }}>{sub.journal}</div>
//                         </td>
//                         <td style={{ padding: "0.875rem 1rem", whiteSpace: "nowrap" }}><StatusBadge status={sub.status} /></td>
//                         <td style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", color: "#6b7280", whiteSpace: "nowrap" }}>
//                           <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Calendar size={11} />{sub.date}</span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Peer Review Queue */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
//                 <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>Peer Review Queue</h2>
//                 <Link to="/dashboard/academic/reviews" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ea580c", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
//                   View all <ChevronRight size={13} />
//                 </Link>
//               </div>
//               {reviewQueue.map((r, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "0.875rem 1.25rem", borderTop: i > 0 ? "1px solid #f9fafb" : "none", gap: "1rem" }}>
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <p style={{ margin: "0 0 0.25rem", fontSize: "0.83rem", fontWeight: 600, color: "#1f2937", lineHeight: 1.4 }}>{r.title}</p>
//                     <span style={{ fontSize: "0.7rem", color: "#6b7280" }}>{r.journal} · Due {r.due}</span>
//                   </div>
//                   <span style={{
//                     flexShrink: 0, fontSize: "0.68rem", fontWeight: 700, borderRadius: 999, padding: "0.2rem 0.55rem",
//                     background: r.priority === "high" ? "#fef2f2" : r.priority === "medium" ? "#fffbeb" : "#f0fdf4",
//                     color: r.priority === "high" ? "#dc2626" : r.priority === "medium" ? "#d97706" : "#16a34a",
//                   }}>
//                     {r.priority.charAt(0).toUpperCase() + r.priority.slice(1)}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

//             {/* Activity */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem" }}>
//               <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem" }}>Teaching & Research</h2>
//               {[
//                 { label: "Lectures this semester", value: 24, max: 30,  color: "#1a4da8" },
//                 { label: "Students supervised",    value: 8,  max: 15,  color: "#d97706" },
//                 { label: "Profile completion",     value: 75, max: 100, color: "#16a34a", pct: true },
//               ].map(({ label, value, max, color, pct }) => (
//                 <div key={label} style={{ marginBottom: "0.875rem" }}>
//                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
//                     <span style={{ fontSize: "0.78rem", color: "#6b7280", fontWeight: 500 }}>{label}</span>
//                     <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1f2937" }}>{pct ? `${value}%` : `${value}/${max}`}</span>
//                   </div>
//                   <div style={{ height: 6, borderRadius: 99, background: "#f3f4f6" }}>
//                     <div style={{ height: "100%", width: `${(value / max) * 100}%`, background: color, borderRadius: 99 }} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* AI CTA */}
//             <div style={{ background: "linear-gradient(135deg, #0c2d6b 0%, #1a4da8 100%)", borderRadius: 14, padding: "1.25rem", position: "relative", overflow: "hidden" }}>
//               <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "#ea580c", opacity: 0.2 }} />
//               <div style={{ position: "relative" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
//                   <Zap size={16} style={{ color: "#ea580c" }} />
//                   <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>AI-Powered</span>
//                 </div>
//                 <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.4rem", fontFamily: "Georgia, serif" }}>Publeesh AI</h3>
//                 <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", margin: "0 0 1rem", lineHeight: 1.5 }}>Generate lecture notes, research papers, and scholarly content.</p>
//                 <Link to="/dashboard/academic/generate" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#ea580c", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none" }}>
//                   Get Started <ArrowUpRight size={13} />
//                 </Link>
//               </div>
//             </div>

//             {/* Upgrade */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", textAlign: "center" }}>
//               <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(26,77,168,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
//                 <TrendingUp size={22} style={{ color: "#1a4da8" }} />
//               </div>
//               <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 0.4rem" }}>Unlock Full Access</h3>
//               <p style={{ fontSize: "0.78rem", color: "#6b7280", margin: "0 0 1rem", lineHeight: 1.5 }}>Get unlimited access to all academic tools and resources.</p>
//               <Link to="/pricing" style={{ display: "block", background: "#1a4da8", color: "#fff", borderRadius: 8, padding: "0.65rem", fontSize: "0.83rem", fontWeight: 700, textDecoration: "none" }}>
//                 View Plans
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }

// import { Link } from "react-router-dom";
// import {
//   Brain, FileText, Database, Globe, ArrowUpRight,
//   CheckCircle, AlertCircle, RefreshCw, Eye,
//   Calendar, Zap, ChevronRight, Plus, Award,
//   BookOpen, TrendingUp,
// } from "lucide-react";
// import DashboardLayout from "@/pages/DashboardLayout";
// import { useAuth } from "@/context/AuthContext";

// // ─── Mock data ────────────────────────────────────────────────────────────────

// const submissions = [
//   { id: "SUB-005", title: "Fintech Adoption in Nigerian Markets",          journal: "African Journal of Finance",          status: "under_review",      date: "2026-01-28" },
//   { id: "SUB-003", title: "Indigenous Knowledge Systems in Education",     journal: "Journal of African Development",      status: "submitted",         date: "2026-02-01" },
//   { id: "SUB-002", title: "Renewable Energy Policy in Sub-Saharan Africa", journal: "African Journal of Economic Studies", status: "revision_requested", date: "2026-01-10" },
//   { id: "SUB-004", title: "Public Health Interventions in East Africa",    journal: "African Journal of Economic Studies", status: "accepted",           date: "2025-12-20" },
// ];

// const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
//   submitted:          { label: "Submitted",          color: "#6b7280", bg: "#f3f4f6" },
//   under_review:       { label: "Under Review",       color: "#d97706", bg: "#fffbeb" },
//   revision_requested: { label: "Revision Requested", color: "#ea580c", bg: "#fff7ed" },
//   accepted:           { label: "Accepted",           color: "#16a34a", bg: "#f0fdf4" },
//   rejected:           { label: "Rejected",           color: "#dc2626", bg: "#fef2f2" },
// };

// const quickActions = [
//   { icon: Brain,    label: "Generate Paper",   to: "/dashboard/researcher/generate",             color: "#381b92", bg: "rgba(56,27,146,0.08)" },
//   { icon: BookOpen, label: "Browse Journals",  to: "/dashboard/researcher/publishing",           color: "#d97706", bg: "rgba(217,119,6,0.08)" },
//   { icon: Database, label: "Explore Datasets", to: "/dashboard/researcher/intelligence/explorer", color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
//   { icon: Globe,    label: "Calls for Papers", to: "/dashboard/researcher/publishing",           color: "#0891b2", bg: "rgba(8,145,178,0.08)" },
// ];

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function StatusBadge({ status }: { status: string }) {
//   const cfg = statusConfig[status] ?? statusConfig.submitted;
//   return (
//     <span style={{
//       background: cfg.bg, color: cfg.color,
//       border: `1px solid ${cfg.color}30`, borderRadius: 999,
//       padding: "0.2rem 0.6rem", fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap",
//     }}>
//       {cfg.label}
//     </span>
//   );
// }

// function StatCard({ icon: Icon, label, value, sub, color, to }: {
//   icon: React.ElementType; label: string; value: number | string;
//   sub?: string; color: string; to?: string;
// }) {
//   const content = (
//     <div
//       style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", transition: "box-shadow 0.15s, transform 0.15s", cursor: to ? "pointer" : "default" }}
//       onMouseEnter={e => { if (to) { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)"; } }}
//       onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
//     >
//       <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.875rem" }}>
//         <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Icon size={20} style={{ color }} />
//         </div>
//         {to && <ArrowUpRight size={14} style={{ color: "#9ca3af" }} />}
//       </div>
//       <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1f2937", lineHeight: 1 }}>{value}</div>
//       <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6b7280", marginTop: "0.3rem" }}>{label}</div>
//       {sub && <div style={{ fontSize: "0.7rem", color, marginTop: "0.25rem", fontWeight: 600 }}>{sub}</div>}
//     </div>
//   );
//   return to ? <Link to={to} style={{ textDecoration: "none" }}>{content}</Link> : content;
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────

// export default function ResearcherDashboard() {
//   const { user } = useAuth();
//   const name = user?.username || user?.email || "Researcher";
//   const initials = name.slice(0, 2).toUpperCase();

//   const h = new Date().getHours();
//   const greeting = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

//   return (
//     <DashboardLayout role="researcher">
//       <div style={{ maxWidth: 1100, margin: "0 auto" }}>

//         {/* Welcome Banner */}
//         <div style={{
//           background: "linear-gradient(135deg, #0f1623 0%, #1e0f5c 60%, #381b92 100%)",
//           borderRadius: 16, padding: "1.75rem 2rem", marginBottom: "1.75rem",
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "#ea580c", opacity: 0.12 }} />
//           <div style={{ position: "absolute", bottom: -20, left: "40%", width: 120, height: 120, borderRadius: "50%", background: "#381b92", opacity: 0.3 }} />
//           <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//               <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#ea580c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 800, flexShrink: 0 }}>
//                 {initials}
//               </div>
//               <div>
//                 <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", margin: "0 0 0.2rem" }}>{greeting},</p>
//                 <h1 style={{ fontSize: "clamp(1rem,3vw,1.4rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "#fff", margin: 0 }}>{name} 👋</h1>
//                 <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", margin: "0.2rem 0 0" }}>Manage your research, publishing, and intelligence tools.</p>
//               </div>
//             </div>
//             <Link
//               to="/dashboard/researcher/research/papers"
//               style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#ea580c", color: "#fff", border: "none", borderRadius: 10, padding: "0.7rem 1.25rem", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 0.15s" }}
//               onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
//               onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
//             >
//               <Plus size={16} /> New Paper
//             </Link>
//           </div>
//         </div>

//         {/* Identity Card */}
//         <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem 1.5rem", marginBottom: "1.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//             <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#ea580c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>
//               {initials}
//             </div>
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//                 <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1f2937" }}>{name}</span>
//                 <span style={{ background: "#fff7ed", color: "#ea580c", border: "1px solid #fed7aa", borderRadius: 999, padding: "0.15rem 0.6rem", fontSize: "0.7rem", fontWeight: 700 }}>Researcher</span>
//               </div>
//               <p style={{ margin: "0.2rem 0 0", fontSize: "0.78rem", color: "#6b7280" }}>{user?.email || ""}</p>
//             </div>
//           </div>
//           <div style={{ display: "flex", gap: "0.75rem" }}>
//             <Link to="/dashboard/researcher/account/profile" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: "0.8rem", fontWeight: 600, color: "#374151", textDecoration: "none", background: "#fff" }}>
//               <Eye size={14} /> View Profile
//             </Link>
//           </div>
//         </div>

//         {/* Stats */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
//           <StatCard icon={FileText}    label="Total Submissions" value={6}  color="#381b92" to="/dashboard/researcher/publishing/submissions" sub="↑ 2 this month" />
//           <StatCard icon={RefreshCw}   label="Under Review"      value={2}  color="#d97706" to="/dashboard/researcher/publishing/submissions" />
//           <StatCard icon={AlertCircle} label="Needs Revision"    value={1}  color="#ea580c" to="/dashboard/researcher/publishing/submissions" sub="Action needed" />
//           <StatCard icon={CheckCircle} label="Accepted"          value={1}  color="#16a34a" to="/dashboard/researcher/publishing/submissions" />
//           <StatCard icon={Eye}         label="Total Citations"   value={47} color="#0891b2" />
//           <StatCard icon={Award}       label="H-Index"           value={3}  color="#7c3aed" />
//         </div>

//         {/* Two-column */}
//         <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "1.25rem", alignItems: "start" }}>

//           {/* Left */}
//           <div>
//             {/* Quick Actions */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", marginBottom: "1.25rem" }}>
//               <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem" }}>Quick Actions</h2>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
//                 {quickActions.map(({ icon: Icon, label, to, color, bg }) => (
//                   <Link key={to + label} to={to} style={{ textDecoration: "none" }}>
//                     <div
//                       style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", padding: "1rem 0.5rem", borderRadius: 12, background: bg, border: `1px solid ${color}20`, textAlign: "center", transition: "transform 0.15s" }}
//                       onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
//                       onMouseLeave={e => (e.currentTarget.style.transform = "none")}
//                     >
//                       <Icon size={20} style={{ color }} />
//                       <span style={{ fontSize: "0.72rem", fontWeight: 700, color, lineHeight: 1.3 }}>{label}</span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Recent Submissions */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
//                 <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>Recent Submissions</h2>
//                 <Link to="/dashboard/researcher/publishing/submissions" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ea580c", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
//                   View all <ChevronRight size={13} />
//                 </Link>
//               </div>
//               <div style={{ overflowX: "auto" }}>
//                 <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                   <thead>
//                     <tr style={{ background: "#f9fafb" }}>
//                       {["ID", "Title", "Status", "Date"].map(col => (
//                         <th key={col} style={{ padding: "0.65rem 1rem", textAlign: "left", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#6b7280", whiteSpace: "nowrap" }}>{col}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {submissions.map(sub => (
//                       <tr
//                         key={sub.id}
//                         style={{ borderTop: "1px solid #f3f4f6" }}
//                         onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
//                         onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
//                       >
//                         <td style={{ padding: "0.875rem 1rem", fontSize: "0.78rem", fontWeight: 700, color: "#ea580c", whiteSpace: "nowrap" }}>{sub.id}</td>
//                         <td style={{ padding: "0.875rem 1rem", maxWidth: 240 }}>
//                           <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "#1f2937", lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sub.title}</div>
//                           <div style={{ fontSize: "0.7rem", color: "#6b7280", marginTop: 2 }}>{sub.journal}</div>
//                         </td>
//                         <td style={{ padding: "0.875rem 1rem", whiteSpace: "nowrap" }}><StatusBadge status={sub.status} /></td>
//                         <td style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", color: "#6b7280", whiteSpace: "nowrap" }}>
//                           <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}><Calendar size={11} />{sub.date}</span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Right */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

//             {/* Activity */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem" }}>
//               <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem" }}>Activity Overview</h2>
//               {[
//                 { label: "Submissions this year", value: 6,  max: 10,  color: "#381b92" },
//                 { label: "Reviews completed",     value: 4,  max: 10,  color: "#d97706" },
//                 { label: "Profile completion",    value: 60, max: 100, color: "#16a34a", pct: true },
//               ].map(({ label, value, max, color, pct }) => (
//                 <div key={label} style={{ marginBottom: "0.875rem" }}>
//                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
//                     <span style={{ fontSize: "0.78rem", color: "#6b7280", fontWeight: 500 }}>{label}</span>
//                     <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1f2937" }}>{pct ? `${value}%` : `${value}/${max}`}</span>
//                   </div>
//                   <div style={{ height: 6, borderRadius: 99, background: "#f3f4f6" }}>
//                     <div style={{ height: "100%", width: `${(value / max) * 100}%`, background: color, borderRadius: 99 }} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* AI CTA */}
//             <div style={{ background: "linear-gradient(135deg, #0f1623 0%, #381b92 100%)", borderRadius: 14, padding: "1.25rem", position: "relative", overflow: "hidden" }}>
//               <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "#ea580c", opacity: 0.2 }} />
//               <div style={{ position: "relative" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
//                   <Zap size={16} style={{ color: "#ea580c" }} />
//                   <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>AI-Powered</span>
//                 </div>
//                 <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.4rem", fontFamily: "Georgia, serif" }}>Publeesh AI</h3>
//                 <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", margin: "0 0 1rem", lineHeight: 1.5 }}>Generate research papers, slides and datasets with AI.</p>
//                 <Link to="/dashboard/researcher/research/papers" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#ea580c", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none" }}>
//                   Generate Paper <ArrowUpRight size={13} />
//                 </Link>
//               </div>
//             </div>

//             {/* Unlock panel */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", textAlign: "center" }}>
//               <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(234,88,12,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
//                 <TrendingUp size={22} style={{ color: "#ea580c" }} />
//               </div>
//               <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 0.4rem" }}>Unlock Full Access</h3>
//               <p style={{ fontSize: "0.78rem", color: "#6b7280", margin: "0 0 1rem", lineHeight: 1.5 }}>Get unlimited paper generation, dataset access, and more.</p>
//               <Link to="/dashboard/researcher/billing" style={{ display: "block", background: "#381b92", color: "#fff", borderRadius: 8, padding: "0.65rem", fontSize: "0.83rem", fontWeight: 700, textDecoration: "none" }}>
//                 View Plans
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }

import { Link } from "react-router-dom";
import DashboardLayout from "@/pages/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { useSubscriptionContext } from "@/context/SubscriptionContext";
import { useModuleUnlocksContext } from "@/context/ModuleUnlocksContext";
import AcademicDashboard from "./home/AcademicDashboard";
import ProfessionalDashboard from "./home/ProfessionalDashboard";
import ResearcherDashboard from "./home/ResearcherDashboard";

const Academic = () => {

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

export default AcademicDashboard;