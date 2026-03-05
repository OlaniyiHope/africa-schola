import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FileText, BookOpen, Eye, RefreshCw, CheckCircle,
  Clock, AlertCircle, TrendingUp, Bell, PenLine,
  ChevronRight, ArrowUpRight, LayoutDashboard,
  User, Settings, Search, Calendar, Zap,
  Award, Globe, Users, BarChart2, Plus,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { useAuth } from "@/context/AuthContext";

// ─── Types ────────────────────────────────────────────────────────────────────

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  submitted:          { label: "Submitted",          color: "#6b7280", bg: "#f3f4f6" },
  under_review:       { label: "Under Review",       color: "#d97706", bg: "#fffbeb" },
  revision_requested: { label: "Revision Requested", color: "#ea580c", bg: "#fff7ed" },
  accepted:           { label: "Accepted",           color: "#16a34a", bg: "#f0fdf4" },
  rejected:           { label: "Rejected",           color: "#dc2626", bg: "#fef2f2" },
};

// ─── Mock data ────────────────────────────────────────────────────────────────

const recentSubmissions = [
  { id: "SUB-005", title: "Fintech Adoption in Nigerian Markets", journal: "African Journal of Finance", status: "under_review",       date: "2026-01-28" },
  { id: "SUB-003", title: "Indigenous Knowledge Systems in Education", journal: "Journal of African Dev.", status: "submitted",         date: "2026-02-01" },
  { id: "SUB-002", title: "Renewable Energy Policy in Sub-Saharan Africa", journal: "African Journal of Economic Studies", status: "revision_requested", date: "2026-01-10" },
  { id: "SUB-004", title: "Public Health Interventions in East Africa", journal: "African Journal of Economic Studies", status: "accepted", date: "2025-12-20" },
];

const notifications = [
  { id: 1, type: "revision",  title: "Revision requested on SUB-002", time: "2 hours ago",   read: false },
  { id: 2, type: "review",    title: "Peer review assigned for SUB-005", time: "1 day ago",   read: false },
  { id: 3, type: "accepted",  title: "SUB-004 has been accepted!", time: "3 days ago",         read: true  },
  { id: 4, type: "deadline",  title: "Call for Papers closing soon — JAES", time: "5 days ago", read: true },
];

const quickActions = [
  { icon: PenLine,  label: "New Submission",   to: "/publishing/submit",       color: "#381b92", bg: "rgba(56,27,146,0.08)" },
  { icon: BookOpen, label: "Browse Journals",  to: "/publishing",              color: "#d97706", bg: "rgba(217,119,6,0.08)"  },
  { icon: Users,    label: "Peer Reviews",     to: "/dashboard/peer-review",   color: "#16a34a", bg: "rgba(22,163,74,0.08)"  },
  { icon: Globe,    label: "Calls for Papers", to: "/publishing/calls",        color: "#0891b2", bg: "rgba(8,145,178,0.08)"  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status] ?? statusConfig.submitted;
  return (
    <span style={{
      background: cfg.bg, color: cfg.color,
      border: `1px solid ${cfg.color}30`,
      borderRadius: 999, padding: "0.2rem 0.6rem",
      fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap",
    }}>
      {cfg.label}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, to }: {
  icon: React.ElementType; label: string; value: number | string;
  sub?: string; color: string; to?: string;
}) {
  const inner = (
    <div style={{
      background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14,
      padding: "1.25rem", cursor: to ? "pointer" : "default",
      transition: "box-shadow 0.15s, transform 0.15s",
    }}
      onMouseEnter={e => { if (to) { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)"; } }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.875rem" }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={20} style={{ color }} />
        </div>
        {to && <ArrowUpRight size={14} style={{ color: "var(--muted-foreground)" }} />}
      </div>
      <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--foreground)", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted-foreground)", marginTop: "0.3rem" }}>{label}</div>
      {sub && <div style={{ fontSize: "0.7rem", color, marginTop: "0.25rem", fontWeight: 600 }}>{sub}</div>}
    </div>
  );
  return to ? <Link to={to} style={{ textDecoration: "none" }}>{inner}</Link> : inner;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [unread] = useState(notifications.filter(n => !n.read).length);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  };

  const initials = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "AS";

  return (
    <Layout>
      <div style={{ display: "flex", minHeight: "calc(100vh - 64px)" }}>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside style={{
          width: 240, flexShrink: 0, borderRight: "1px solid #e5e7eb",
          background: "#fafafa", padding: "1.5rem 0",
        }} className="hidden md:block">
          <div style={{ padding: "0 1.25rem", marginBottom: "0.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>
              Dashboard
            </p>
          </div>
          {[
            { icon: LayoutDashboard, label: "Dashboard",         to: "/dashboard",               active: true },
            { icon: User,            label: "My Profile",        to: "/dashboard/profile" },
            { icon: FileText,        label: "Submissions",       to: "/dashboard/submissions",   count: 5 },
            { icon: Eye,             label: "Peer Review",       to: "/dashboard/peer-review",   count: 4 },
            { icon: RefreshCw,       label: "Revisions",         to: "/dashboard/revisions",     count: 2 },
            { icon: BookOpen,        label: "Published",         to: "/dashboard/published",     count: 2 },
            { icon: BarChart2,       label: "Metrics",           to: "/dashboard/metrics" },
            { icon: Bell,            label: "Notifications",     to: "/dashboard/notifications", count: unread },
            { icon: Search,          label: "Calls for Papers",  to: "/publishing/calls",        count: 2 },
            { icon: Settings,        label: "Settings",          to: "/dashboard/settings" },
          ].map(({ icon: Icon, label, to, count, active }: any) => (
            <Link key={to} to={to} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "0.6rem 1.25rem", margin: "0.1rem 0.5rem", borderRadius: 8,
              fontSize: "0.85rem", fontWeight: active ? 700 : 500,
              color: active ? "#fff" : "var(--foreground)",
              background: active ? "var(--accent)" : "none",
              textDecoration: "none", transition: "background 0.12s",
            }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(234,88,12,0.06)"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = "none"; }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <Icon size={15} style={{ opacity: active ? 1 : 0.6 }} />
                {label}
              </span>
              {count !== undefined && count > 0 && (
                <span style={{
                  fontSize: "0.7rem", fontWeight: 800, minWidth: 20, height: 20,
                  borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  background: active ? "rgba(255,255,255,0.25)" : "#381b92", color: "#fff",
                }}>
                  {count}
                </span>
              )}
            </Link>
          ))}
        </aside>

        {/* ── Main ─────────────────────────────────────────────────────────── */}
        <main style={{ flex: 1, padding: "2rem", overflowX: "hidden", background: "#f9fafb" }}>

          {/* ── Welcome header ─────────────────────────────────────────────── */}
          <div style={{
            background: "linear-gradient(135deg, #381b92 0%, #1e0f5c 100%)",
            borderRadius: 16, padding: "1.75rem 2rem", marginBottom: "1.75rem",
            position: "relative", overflow: "hidden",
          }}>
            {/* Dot pattern */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}>
              <svg width="100%" height="100%"><defs><pattern id="dd" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="0.8" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#dd)" /></svg>
            </div>
            {/* Glow blob */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "var(--accent)", opacity: 0.15, pointerEvents: "none" }} />

            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 800, flexShrink: 0 }}>
                  {initials}
                </div>
                <div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", margin: "0 0 0.2rem" }}>
                    {greeting()},
                  </p>
                  <h1 style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "#fff", margin: 0 }}>
                    {user?.username || "Researcher"} 👋
                  </h1>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", margin: "0.2rem 0 0" }}>
                    {user?.email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/publishing/submit")}
                style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  background: "var(--accent)", color: "#fff", border: "none",
                  borderRadius: 10, padding: "0.7rem 1.25rem",
                  fontSize: "0.875rem", fontWeight: 700, cursor: "pointer",
                  transition: "opacity 0.15s", whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <Plus size={16} /> New Submission
              </button>
            </div>
          </div>

          {/* ── Stats grid ─────────────────────────────────────────────────── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
            <StatCard icon={FileText}    label="Total Submissions" value={6}  color="#381b92" to="/dashboard/submissions" sub="↑ 2 this month" />
            <StatCard icon={RefreshCw}   label="Under Review"      value={2}  color="#d97706" to="/dashboard/submissions" />
            <StatCard icon={AlertCircle} label="Needs Revision"    value={1}  color="#ea580c" to="/dashboard/revisions"   sub="Action needed" />
            <StatCard icon={CheckCircle} label="Accepted"          value={1}  color="#16a34a" to="/dashboard/published" />
            <StatCard icon={Eye}         label="Total Citations"   value={47} color="#0891b2" />
            <StatCard icon={Award}       label="H-Index"           value={3}  color="#7c3aed" />
          </div>

          {/* ── Two-column layout ──────────────────────────────────────────── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.25rem", alignItems: "start" }}>

            {/* Left column */}
            <div>

              {/* Quick actions */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", marginBottom: "1.25rem" }}>
                <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 1rem" }}>Quick Actions</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
                  {quickActions.map(({ icon: Icon, label, to, color, bg }) => (
                    <Link key={to} to={to} style={{ textDecoration: "none" }}>
                      <div style={{
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        gap: "0.5rem", padding: "1rem 0.5rem", borderRadius: 12, background: bg,
                        border: `1px solid ${color}20`, cursor: "pointer", transition: "transform 0.15s",
                        textAlign: "center",
                      }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                      >
                        <Icon size={20} style={{ color }} />
                        <span style={{ fontSize: "0.73rem", fontWeight: 700, color, lineHeight: 1.3 }}>{label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Submissions table */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
                  <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>Recent Submissions</h2>
                  <Link to="/dashboard/submissions" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    View all <ChevronRight size={13} />
                  </Link>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#f9fafb" }}>
                        {["ID", "Title", "Status", "Date"].map(h => (
                          <th key={h} style={{ padding: "0.65rem 1rem", textAlign: "left", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {recentSubmissions.map(sub => (
                        <tr key={sub.id} style={{ borderTop: "1px solid #f3f4f6", transition: "background 0.1s" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                          onMouseLeave={e => (e.currentTarget.style.background = "none")}
                        >
                          <td style={{ padding: "0.875rem 1rem", fontSize: "0.78rem", fontWeight: 700, color: "var(--accent)", whiteSpace: "nowrap" }}>
                            {sub.id}
                          </td>
                          <td style={{ padding: "0.875rem 1rem", maxWidth: 260 }}>
                            <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "var(--foreground)", lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 240 }}>
                              {sub.title}
                            </div>
                            <div style={{ fontSize: "0.7rem", color: "var(--muted-foreground)", marginTop: 2 }}>{sub.journal}</div>
                          </td>
                          <td style={{ padding: "0.875rem 1rem", whiteSpace: "nowrap" }}>
                            <StatusBadge status={sub.status} />
                          </td>
                          <td style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                              <Calendar size={11} /> {sub.date}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Activity summary */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem" }}>
                <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 1rem" }}>
                  Activity Overview
                </h2>
                {[
                  { label: "Submissions this year", value: 6,  max: 10, color: "#381b92" },
                  { label: "Reviews completed",     value: 4,  max: 10, color: "#d97706" },
                  { label: "Profile completion",    value: 60, max: 100, color: "#16a34a", pct: true },
                ].map(({ label, value, max, color, pct }) => (
                  <div key={label} style={{ marginBottom: "0.875rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", fontWeight: 500 }}>{label}</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--foreground)" }}>
                        {pct ? `${value}%` : `${value}/${max}`}
                      </span>
                    </div>
                    <div style={{ height: 6, borderRadius: 99, background: "#f3f4f6", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(value / max) * 100}%`, background: color, borderRadius: 99, transition: "width 0.6s ease" }} />
                    </div>
                  </div>
                ))}
                <Link to="/dashboard/profile" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none", marginTop: "0.5rem" }}>
                  Complete your profile <ChevronRight size={12} />
                </Link>
              </div>

              {/* Notifications */}
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
                  <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)", margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    Notifications
                    {unread > 0 && (
                      <span style={{ fontSize: "0.65rem", fontWeight: 800, background: "var(--accent)", color: "#fff", borderRadius: 999, padding: "0.1rem 0.45rem" }}>
                        {unread}
                      </span>
                    )}
                  </h2>
                  <Link to="/dashboard/notifications" style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
                    See all
                  </Link>
                </div>
                <div>
                  {notifications.map((n, i) => (
                    <div key={n.id} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.75rem",
                      padding: "0.875rem 1.25rem",
                      borderTop: i > 0 ? "1px solid #f9fafb" : "none",
                      background: n.read ? "#fff" : "rgba(234,88,12,0.03)",
                      transition: "background 0.12s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                      onMouseLeave={e => (e.currentTarget.style.background = n.read ? "#fff" : "rgba(234,88,12,0.03)")}
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 5,
                        background: n.read ? "#e5e7eb" : "var(--accent)",
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: n.read ? 500 : 700, color: "var(--foreground)", margin: "0 0 0.2rem", lineHeight: 1.4 }}>
                          {n.title}
                        </p>
                        <span style={{ fontSize: "0.7rem", color: "var(--muted-foreground)" }}>{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publeesh AI CTA */}
              <div style={{
                background: "linear-gradient(135deg, #381b92 0%, #1e0f5c 100%)",
                borderRadius: 14, padding: "1.25rem", position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "var(--accent)", opacity: 0.2 }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <Zap size={16} style={{ color: "var(--accent)" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.7)" }}>
                      AI-Powered
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.5rem", fontFamily: "Georgia, serif" }}>
                    Try Publeesh AI
                  </h3>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", margin: "0 0 1rem", lineHeight: 1.5 }}>
                    Generate research papers, slides and datasets with AI.
                  </p>
                  <Link to="/publeesh-ai" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    background: "var(--accent)", color: "#fff", borderRadius: 8,
                    padding: "0.55rem 1rem", fontSize: "0.8rem", fontWeight: 700,
                    textDecoration: "none", transition: "opacity 0.15s",
                  }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  >
                    Launch Publeesh AI <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </Layout>
  );
}
