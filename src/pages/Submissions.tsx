import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText, Clock, CheckCircle, XCircle, RefreshCw,
  Search, Filter, Eye, Download, ChevronRight,
  PenLine, AlertCircle, ArrowUpRight, Calendar, Menu, X,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { useAuth } from "@/context/AuthContext";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const submissions = [
  {
    id: "SUB-001",
    title: "Machine Learning Applications in African Agricultural Policy",
    journal: "African Journal of Economic Studies",
    type: "Research Article",
    status: "under_review",
    submittedDate: "2026-01-15",
    lastUpdated: "2026-02-10",
    reviewers: 2,
  },
  {
    id: "SUB-002",
    title: "Renewable Energy Policy in Sub-Saharan Africa: A Comparative Study",
    journal: "Journal of African Public Health & Urban Research",
    type: "Research Article",
    status: "revision_requested",
    submittedDate: "2026-01-10",
    lastUpdated: "2026-02-18",
    reviewers: 2,
  },
  {
    id: "SUB-003",
    title: "Indigenous Knowledge Systems in Education: Decolonising the Curriculum",
    journal: "African Journal of Development & Innovation",
    type: "Review Article",
    status: "submitted",
    submittedDate: "2026-02-01",
    lastUpdated: "2026-02-01",
    reviewers: 0,
  },
  {
    id: "SUB-004",
    title: "Public Health Interventions in East Africa: Evidence from Five Countries",
    journal: "African Journal of Economic Studies",
    type: "Research Article",
    status: "accepted",
    submittedDate: "2025-12-20",
    lastUpdated: "2026-01-30",
    reviewers: 3,
  },
  {
    id: "SUB-005",
    title: "Fintech Adoption in Nigerian Markets: Barriers and Opportunities",
    journal: "African Journal of Finance & Economics",
    type: "Research Article",
    status: "under_review",
    submittedDate: "2026-01-28",
    lastUpdated: "2026-02-20",
    reviewers: 1,
  },
  {
    id: "SUB-006",
    title: "Climate Change Adaptation Strategies in Coastal West Africa",
    journal: "African Journal of Development & Innovation",
    type: "Policy Brief",
    status: "rejected",
    submittedDate: "2025-11-05",
    lastUpdated: "2025-12-15",
    reviewers: 2,
  },
];

// ─── Status config ────────────────────────────────────────────────────────────

const statusConfig: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  submitted:          { label: "Submitted",          color: "#6b7280", bg: "#f3f4f6", icon: Clock },
  under_review:       { label: "Under Review",       color: "#d97706", bg: "#fffbeb", icon: RefreshCw },
  revision_requested: { label: "Revision Requested", color: "#ea580c", bg: "#fff7ed", icon: AlertCircle },
  accepted:           { label: "Accepted",           color: "#16a34a", bg: "#f0fdf4", icon: CheckCircle },
  rejected:           { label: "Rejected",           color: "#dc2626", bg: "#fef2f2", icon: XCircle },
  published:          { label: "Published",          color: "#7c3aed", bg: "#f5f3ff", icon: ArrowUpRight },
};

const filterTabs = [
  { key: "all",                label: "All" },
  { key: "submitted",          label: "Submitted" },
  { key: "under_review",       label: "Under Review" },
  { key: "revision_requested", label: "Revision" },
  { key: "accepted",           label: "Accepted" },
  { key: "rejected",           label: "Rejected" },
];

const NAV_ITEMS = [
  { icon: FileText,    label: "Submissions",          to: "/dashboard/submissions",   count: 5,  active: true },
  { icon: Eye,         label: "Peer Review",          to: "/dashboard/peer-review",   count: 4 },
  { icon: RefreshCw,   label: "Revisions",            to: "/dashboard/revisions",     count: 2 },
  { icon: CheckCircle, label: "Published",            to: "/dashboard/published",     count: 2 },
  { icon: Clock,       label: "Metrics",              to: "/dashboard/metrics" },
  { icon: Search,      label: "Calls for Papers",     to: "/publishing/calls",        count: 2 },
  { icon: PenLine,     label: "Create Special Issue", to: "/publishing/special-issue" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const cfg = statusConfig[status] ?? statusConfig.submitted;
  const Icon = cfg.icon;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "0.3rem",
      background: cfg.bg, color: cfg.color,
      border: `1px solid ${cfg.color}30`,
      borderRadius: 999, padding: "0.25rem 0.625rem",
      fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap",
    }}>
      <Icon size={11} />
      {cfg.label}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: React.ElementType; label: string; value: number; color: string;
}) {
  return (
    <div style={{
      background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
      padding: "1rem", display: "flex", alignItems: "center", gap: "0.75rem",
    }}>
      <div style={{ width: 36, height: 36, borderRadius: 9, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={17} style={{ color }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 800, color: "var(--foreground)", lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: "0.7rem", color: "var(--muted-foreground)", marginTop: 2, lineHeight: 1.3 }}>{label}</div>
      </div>
    </div>
  );
}

// ─── Mobile Card (replaces table row on small screens) ────────────────────────

function SubmissionCard({ sub }: { sub: typeof submissions[0] }) {
  return (
    <div style={{
      padding: "1rem", borderBottom: "1px solid #f3f4f6",
      display: "flex", flexDirection: "column", gap: "0.5rem",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)" }}>{sub.id}</span>
        <StatusBadge status={sub.status} />
      </div>

      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--foreground)", margin: 0, lineHeight: 1.4 }}>
        {sub.title}
      </p>

      <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", margin: 0 }}>
        {sub.journal}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 600, background: "#f3f4f6", color: "#374151", borderRadius: 4, padding: "0.15rem 0.45rem" }}>
            {sub.type}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.72rem", color: "var(--muted-foreground)" }}>
            <Calendar size={10} /> {sub.submittedDate}
          </span>
          {sub.reviewers > 0 && (
            <span style={{ fontSize: "0.72rem", color: "var(--muted-foreground)" }}>
              {sub.reviewers} reviewer{sub.reviewers > 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div style={{ display: "flex", gap: "0.375rem" }}>
          <button style={{ background: "#f3f4f6", border: "none", borderRadius: 6, padding: "0.35rem 0.625rem", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600, color: "var(--foreground)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <Eye size={12} /> View
          </button>
          <button style={{ background: "#f3f4f6", border: "none", borderRadius: 6, padding: "0.35rem 0.5rem", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <Download size={12} style={{ color: "var(--foreground)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Nav Drawer ────────────────────────────────────────────────────────

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 40, backdropFilter: "blur(2px)" }}
      />
      <div style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 260,
        background: "#fff", zIndex: 50, boxShadow: "4px 0 24px rgba(0,0,0,0.12)",
        display: "flex", flexDirection: "column", overflowY: "auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1rem", borderBottom: "1px solid #f3f4f6" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)", margin: 0 }}>
            Dashboard
          </p>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
            <X size={18} style={{ color: "var(--muted-foreground)" }} />
          </button>
        </div>
        <nav style={{ padding: "0.5rem" }}>
          {NAV_ITEMS.map(({ icon: Icon, label, to, count, active }: any) => (
            <Link
              key={to} to={to} onClick={onClose}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "0.65rem 1rem", margin: "0.1rem 0", borderRadius: 8,
                fontSize: "0.875rem", fontWeight: active ? 700 : 500,
                color: active ? "#fff" : "var(--foreground)",
                background: active ? "var(--accent)" : "none",
                textDecoration: "none",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <Icon size={15} style={{ opacity: active ? 1 : 0.6 }} /> {label}
              </span>
              {count !== undefined && (
                <span style={{ fontSize: "0.7rem", fontWeight: 800, minWidth: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: active ? "rgba(255,255,255,0.25)" : "var(--primary)", color: "#fff" }}>
                  {count}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Submissions() {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch]             = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filtered = submissions.filter(s => {
    const matchesFilter = activeFilter === "all" || s.status === activeFilter;
    const matchesSearch = !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.journal.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total:    submissions.length,
    review:   submissions.filter(s => s.status === "under_review").length,
    revision: submissions.filter(s => s.status === "revision_requested").length,
    accepted: submissions.filter(s => s.status === "accepted").length,
  };

  return (
    <Layout>
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <div style={{ display: "flex", minHeight: "calc(100vh - 64px)" }}>

        {/* ── Desktop Sidebar ───────────────────────────────────────────── */}
        <aside
          className="hidden md:flex"
          style={{ width: 240, flexShrink: 0, borderRight: "1px solid #e5e7eb", background: "#fafafa", padding: "1.5rem 0", flexDirection: "column" }}
        >
          <div style={{ padding: "0 1.25rem", marginBottom: "0.5rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>
              Dashboard
            </p>
          </div>
          {NAV_ITEMS.map(({ icon: Icon, label, to, count, active }: any) => (
            <Link
              key={to} to={to}
              style={{
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
              {count !== undefined && (
                <span style={{ fontSize: "0.7rem", fontWeight: 800, minWidth: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: active ? "rgba(255,255,255,0.25)" : "var(--primary)", color: "#fff" }}>
                  {count}
                </span>
              )}
            </Link>
          ))}
        </aside>

        {/* ── Main ─────────────────────────────────────────────────────── */}
        <main style={{ flex: 1, minWidth: 0, padding: "1.25rem", overflowX: "hidden" }}>

          {/* Mobile top bar */}
          <div
            className="flex md:hidden"
            style={{ alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", gap: "0.5rem" }}
          >
            <button
              onClick={() => setMobileNavOpen(true)}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "none", border: "1px solid #e5e7eb", borderRadius: 8, padding: "0.5rem 0.75rem", cursor: "pointer", fontSize: "0.83rem", fontWeight: 600, color: "var(--foreground)", flexShrink: 0 }}
            >
              <Menu size={16} /> Menu
            </button>
            <Link
              to="/publishing/submit"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "var(--accent)", color: "#fff", borderRadius: 8, padding: "0.5rem 0.875rem", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", flexShrink: 0 }}
            >
              <PenLine size={13} /> New
            </Link>
          </div>

          {/* Page header */}
          <div style={{ marginBottom: "1.25rem" }}>
            {/* Desktop breadcrumb */}
            <div
              className="hidden md:flex"
              style={{ alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}
            >
              <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>Dashboard</span>
              <ChevronRight size={12} style={{ color: "var(--muted-foreground)" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--foreground)" }}>Submissions</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
              <div>
                <h1 style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: 0 }}>
                  My Submissions
                </h1>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: "0.2rem 0 0" }}>
                  Track and manage all your manuscript submissions
                </p>
              </div>
              {/* Desktop New Submission button */}
              <Link
                to="/publishing/submit"
                className="hidden md:inline-flex"
                style={{ alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#fff", borderRadius: 8, padding: "0.65rem 1.25rem", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <PenLine size={15} /> New Submission
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <StatCard icon={FileText}    label="Total Submissions" value={stats.total}    color="#381b92" />
            <StatCard icon={RefreshCw}   label="Under Review"      value={stats.review}   color="#d97706" />
            <StatCard icon={AlertCircle} label="Needs Revision"    value={stats.revision} color="#ea580c" />
            <StatCard icon={CheckCircle} label="Accepted"          value={stats.accepted} color="#16a34a" />
          </div>

          {/* Table / Card panel */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>

            {/* Toolbar */}
            <div style={{ padding: "0.875rem 1rem", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.625rem" }}>
              <h2 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
                Submissions
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                {/* Search */}
                <div style={{ position: "relative" }}>
                  <Search size={13} style={{ position: "absolute", left: "0.625rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", pointerEvents: "none" }} />
                  <input
                    type="text" placeholder="Search..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    style={{
                      borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb",
                      padding: "0.45rem 0.75rem 0.45rem 2rem", fontSize: "0.8rem",
                      color: "var(--foreground)", outline: "none",
                      width: "clamp(120px, 30vw, 200px)",
                    }}
                  />
                </div>
                <button style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: "0.45rem 0.75rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.375rem", whiteSpace: "nowrap" }}>
                  <Filter size={13} /> <span className="hidden sm:inline">Assign Reviewers</span>
                </button>
              </div>
            </div>

            {/* Filter tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #f3f4f6", overflowX: "auto", scrollbarWidth: "none" }}>
              {filterTabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  style={{
                    padding: "0.6rem 0.875rem", fontSize: "0.78rem", fontWeight: 600,
                    color: activeFilter === tab.key ? "var(--accent)" : "var(--muted-foreground)",
                    background: "none", border: "none", cursor: "pointer",
                    borderBottom: activeFilter === tab.key ? "2px solid var(--accent)" : "2px solid transparent",
                    whiteSpace: "nowrap", transition: "color 0.12s", flexShrink: 0,
                  }}
                >
                  {tab.label}
                  {tab.key !== "all" && (
                    <span style={{ marginLeft: 4, fontSize: "0.68rem", fontWeight: 700 }}>
                      ({submissions.filter(s => s.status === tab.key).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* ── Desktop Table (md+) ─────────────────────────────────────── */}
            <div className="hidden md:block" style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f9fafb" }}>
                    {["ID", "Title", "Journal", "Type", "Status", "Date", "Actions"].map(h => (
                      <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: "3rem", textAlign: "center", color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                        No submissions found.
                      </td>
                    </tr>
                  ) : filtered.map(sub => (
                    <tr
                      key={sub.id}
                      style={{ borderTop: "1px solid #f3f4f6", transition: "background 0.1s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                      onMouseLeave={e => (e.currentTarget.style.background = "none")}
                    >
                      <td style={{ padding: "1rem", fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", whiteSpace: "nowrap" }}>
                        {sub.id}
                      </td>
                      <td style={{ padding: "1rem", maxWidth: 280 }}>
                        <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--foreground)", lineHeight: 1.4 }}>
                          {sub.title}
                        </div>
                        {sub.reviewers > 0 && (
                          <div style={{ fontSize: "0.72rem", color: "var(--muted-foreground)", marginTop: 3 }}>
                            {sub.reviewers} reviewer{sub.reviewers > 1 ? "s" : ""} assigned
                          </div>
                        )}
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", maxWidth: 180, lineHeight: 1.4 }}>
                          {sub.journal}
                        </div>
                      </td>
                      <td style={{ padding: "1rem", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: "0.72rem", fontWeight: 600, background: "#f3f4f6", color: "#374151", borderRadius: 4, padding: "0.2rem 0.5rem" }}>
                          {sub.type}
                        </span>
                      </td>
                      <td style={{ padding: "1rem", whiteSpace: "nowrap" }}>
                        <StatusBadge status={sub.status} />
                      </td>
                      <td style={{ padding: "1rem", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                          <Calendar size={11} />
                          {sub.submittedDate}
                        </div>
                      </td>
                      <td style={{ padding: "1rem", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                          <button
                            style={{ background: "#f3f4f6", border: "none", borderRadius: 6, padding: "0.35rem 0.625rem", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600, color: "var(--foreground)", display: "flex", alignItems: "center", gap: "0.3rem", transition: "background 0.12s" }}
                            onMouseEnter={e => (e.currentTarget.style.background = "#e5e7eb")}
                            onMouseLeave={e => (e.currentTarget.style.background = "#f3f4f6")}
                          >
                            <Eye size={12} /> View
                          </button>
                          <button
                            style={{ background: "#f3f4f6", border: "none", borderRadius: 6, padding: "0.35rem 0.625rem", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600, color: "var(--foreground)", display: "flex", alignItems: "center", gap: "0.3rem", transition: "background 0.12s" }}
                            onMouseEnter={e => (e.currentTarget.style.background = "#e5e7eb")}
                            onMouseLeave={e => (e.currentTarget.style.background = "#f3f4f6")}
                          >
                            <Download size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Mobile Cards (< md) ─────────────────────────────────────── */}
            <div className="block md:hidden">
              {filtered.length === 0 ? (
                <p style={{ padding: "2.5rem", textAlign: "center", color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                  No submissions found.
                </p>
              ) : filtered.map(sub => (
                <SubmissionCard key={sub.id} sub={sub} />
              ))}
            </div>

            {/* Footer */}
            <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #f3f4f6" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                Showing {filtered.length} of {submissions.length} submissions
              </span>
            </div>
          </div>

          <div style={{ height: "1rem" }} />
        </main>
      </div>
    </Layout>
  );
}
