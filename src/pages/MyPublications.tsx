import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, FileText, Eye, RefreshCw, Download,
  ExternalLink, Search, Filter, ChevronRight,
  LayoutDashboard, User, Settings, Bell, BarChart2,
  Calendar, Award, Globe, Quote, TrendingUp,
  ArrowUpRight, BookMarked, Menu, X,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { useAuth } from "@/context/AuthContext";
import { useArticles } from "@/hooks/useApi";

// ─── Mock Data ────────────────────────────────────────────────────────────────

// const publications = [
//   {
//     id: "PUB-001",
//     title: "Public Health Interventions in East Africa: Evidence from Five Countries",
//     journal: "African Journal of Economic Studies",
//     volume: "Vol. 12, No. 3",
//     year: "2026",
//     doi: "10.1234/ajes.2026.001",
//     type: "Research Article",
//     pages: "pp. 45–68",
//     citations: 12,
//     downloads: 348,
//     views: 1204,
//     abstract: "This study examines the effectiveness of public health interventions across five East African countries, analysing outcomes from 2018–2024. Using a mixed-methods approach, we identify key success factors and barriers to implementation at the community level.",
//     keywords: ["Public Health", "East Africa", "Health Policy", "Intervention Studies"],
//     openAccess: true,
//     publishedDate: "2026-01-30",
//   },
//   {
//     id: "PUB-002",
//     title: "Digital Financial Inclusion and Poverty Reduction in Sub-Saharan Africa",
//     journal: "Journal of African Finance & Economics",
//     volume: "Vol. 8, No. 1",
//     year: "2025",
//     doi: "10.5678/jafe.2025.014",
//     type: "Review Article",
//     pages: "pp. 12–34",
//     citations: 35,
//     downloads: 892,
//     views: 3401,
//     abstract: "A systematic review of 47 studies on digital financial services and their impact on poverty alleviation in Sub-Saharan Africa, covering mobile money, digital banking, and microfinance platforms from 2015–2024.",
//     keywords: ["Fintech", "Financial Inclusion", "Poverty", "Sub-Saharan Africa", "Mobile Money"],
//     openAccess: true,
//     publishedDate: "2025-06-15",
//   },
// ];

const filterTabs = [
  { key: "all",              label: "All" },
  { key: "Research Article", label: "Research" },
  { key: "Review Article",   label: "Review" },
  { key: "Policy Brief",     label: "Policy" },
];

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard",        to: "/dashboard" },
  { icon: User,            label: "My Profile",       to: "/dashboard/profile" },
  { icon: FileText,        label: "Submissions",      to: "/dashboard/submissions",  count: 5 },
  { icon: Eye,             label: "Peer Review",      to: "/dashboard/peer-review",  count: 4 },
  { icon: RefreshCw,       label: "Revisions",        to: "/dashboard/revisions",    count: 2 },
  { icon: BookOpen,        label: "Published",        to: "/dashboard/published",    count: 2, active: true },
  { icon: BarChart2,       label: "Metrics",          to: "/dashboard/metrics" },
  { icon: Bell,            label: "Notifications",    to: "/dashboard/notifications",count: 2 },
  { icon: Search,          label: "Calls for Papers", to: "/publishing/calls",       count: 2 },
  { icon: Settings,        label: "Settings",         to: "/dashboard/settings" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricPill({ icon: Icon, value, label, color }: {
  icon: React.ElementType; value: number | string; label: string; color?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: color || "var(--muted-foreground)" }}>
      <Icon size={12} style={{ flexShrink: 0 }} />
      <span style={{ fontWeight: 700 }}>{value}</span>
      {label && <span>{label}</span>}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }: {
  icon: React.ElementType; label: string; value: number | string; color: string;
}) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
              {count !== undefined && count > 0 && (
                <span style={{ fontSize: "0.7rem", fontWeight: 800, minWidth: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: active ? "rgba(255,255,255,0.25)" : "#381b92", color: "#fff" }}>
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

export default function MyPublications() {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch]             = useState("");
const [expanded, setExpanded] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
const { data, loading } = useArticles({ per_page: 50 });
const publications = data?.items ?? [];

  const filtered = publications.filter(p => {
    const matchesFilter = activeFilter === "all" || p.type === activeFilter;
    const matchesSearch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.journal.toLowerCase().includes(search.toLowerCase()) ||
      p.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const totalCitations = publications.reduce((s, p) => s + p.citations, 0);
  const totalDownloads = publications.reduce((s, p) => s + p.downloads, 0);
  const totalViews     = publications.reduce((s, p) => s + p.views, 0);

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
                <Icon size={15} style={{ opacity: active ? 1 : 0.6 }} />{label}
              </span>
              {count !== undefined && count > 0 && (
                <span style={{ fontSize: "0.7rem", fontWeight: 800, minWidth: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: active ? "rgba(255,255,255,0.25)" : "#381b92", color: "#fff" }}>
                  {count}
                </span>
              )}
            </Link>
          ))}
        </aside>

        {/* ── Main ─────────────────────────────────────────────────────── */}
        <main style={{ flex: 1, minWidth: 0, padding: "1.25rem", background: "#f9fafb", overflowX: "hidden" }}>

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
              <BookMarked size={13} /> Submit
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
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--foreground)" }}>My Publications</span>
            </div>

            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
              <div>
                <h1 style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.2rem" }}>
                  My Publications
                </h1>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: 0 }}>
                  Your accepted and published research papers
                </p>
              </div>
              {/* Desktop submit button */}
              <Link
                to="/publishing/submit"
                className="hidden md:inline-flex"
                style={{ alignItems: "center", gap: "0.5rem", background: "var(--accent)", color: "#fff", borderRadius: 8, padding: "0.65rem 1.25rem", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <BookMarked size={15} /> Submit New Paper
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <StatCard icon={BookOpen}   label="Published Papers" value={publications.length}                              color="#381b92" />
            <StatCard icon={Quote}      label="Total Citations"  value={totalCitations}                                   color="#7c3aed" />
            <StatCard icon={Download}   label="Total Downloads"  value={totalDownloads}                                   color="#0891b2" />
            <StatCard icon={Eye}        label="Total Views"      value={totalViews}                                       color="#d97706" />
            <StatCard icon={Award}      label="H-Index"          value={3}                                                color="#16a34a" />
            <StatCard icon={TrendingUp} label="Avg. Citations"   value={publications.length ? (totalCitations / publications.length).toFixed(1) : "0"} color="#ea580c" />
          </div>

          {/* Publications list */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>

            {/* Toolbar */}
            <div style={{ padding: "0.875rem 1rem", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.625rem" }}>
              <h2 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
                Publications ({filtered.length})
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ position: "relative" }}>
                  <Search size={13} style={{ position: "absolute", left: "0.625rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", pointerEvents: "none" }} />
                  <input
                    type="text" placeholder="Search..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    style={{
                      borderRadius: 8, border: "1px solid #e5e7eb", background: "#f9fafb",
                      padding: "0.45rem 0.75rem 0.45rem 2rem", fontSize: "0.8rem",
                      color: "var(--foreground)", outline: "none",
                      width: "clamp(120px, 28vw, 200px)",
                    }}
                  />
                </div>
                <button style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: "0.45rem 0.75rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--foreground)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.375rem", whiteSpace: "nowrap" }}>
                  <Filter size={13} /> <span className="hidden sm:inline">Filter</span>
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
                    background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                    color: activeFilter === tab.key ? "var(--accent)" : "var(--muted-foreground)",
                    borderBottom: activeFilter === tab.key ? "2px solid var(--accent)" : "2px solid transparent",
                    transition: "color 0.12s",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Publication cards */}
            <div style={{ padding: "0.25rem 0" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "3rem", textAlign: "center", color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                  No publications found.
                </div>
              ) : filtered.map((pub, i) => (
                <div
                  key={pub.id}
                  style={{ borderTop: i > 0 ? "1px solid #f3f4f6" : "none" }}
                >
                  <div
                    style={{ padding: "1.25rem 1rem", transition: "background 0.1s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}
                  >
                    {/* Top row: content + actions */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                      <div style={{ flex: 1, minWidth: 0 }}>

                        {/* Badges */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                          <span style={{ fontSize: "0.68rem", fontWeight: 700, background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", borderRadius: 4, padding: "0.15rem 0.5rem" }}>
                            ✓ Published
                          </span>
                          <span style={{ fontSize: "0.68rem", fontWeight: 700, background: "#f3f4f6", color: "#374151", borderRadius: 4, padding: "0.15rem 0.5rem" }}>
                            {pub.type}
                          </span>
{pub.open_access && (
                            <span style={{ fontSize: "0.68rem", fontWeight: 700, background: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.2)", borderRadius: 4, padding: "0.15rem 0.5rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                              <Globe size={9} /> Open Access
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", fontWeight: 700, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.4rem", lineHeight: 1.4 }}>
                          {pub.title}
                        </h3>

                        {/* Journal info */}
                        <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", margin: "0 0 0.5rem", lineHeight: 1.5 }}>
                          <span style={{ fontStyle: "italic" }}>{pub.journal}</span>
                          {" · "}{pub.volume}{" · "}{pub.pages}{" · "}{pub.year}
                        </p>

                        {/* DOI */}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank" rel="noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600, marginBottom: "0.75rem", wordBreak: "break-all" }}
                        >
                          <ExternalLink size={11} style={{ flexShrink: 0 }} /> DOI: {pub.doi}
                        </a>

                        {/* Metrics */}
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                          <MetricPill icon={Quote}    value={pub.citations}     label="citations"  color="#7c3aed" />
                          <MetricPill icon={Download} value={pub.downloads}     label="downloads"  color="#0891b2" />
                          <MetricPill icon={Eye}      value={pub.views}         label="views"      color="#d97706" />
<MetricPill icon={Calendar} value={pub.published_date} label="" />
                        </div>
                      </div>

                      {/* Action buttons — stack on mobile, column on larger */}
                      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "0.5rem", flexShrink: 0 }}>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank" rel="noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", background: "#381b92", color: "#fff", borderRadius: 8, padding: "0.5rem 0.875rem", fontSize: "0.78rem", fontWeight: 700, textDecoration: "none", transition: "opacity 0.15s", whiteSpace: "nowrap" }}
                          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                        >
                          <ArrowUpRight size={13} /> View
                        </a>
                        <button style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", background: "#f3f4f6", color: "var(--foreground)", borderRadius: 8, padding: "0.5rem 0.875rem", fontSize: "0.78rem", fontWeight: 600, border: "none", cursor: "pointer", transition: "background 0.12s", whiteSpace: "nowrap" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#e5e7eb")}
                          onMouseLeave={e => (e.currentTarget.style.background = "#f3f4f6")}
                        >
                          <Download size={13} /> Download
                        </button>
                      </div>
                    </div>

                    {/* Expand abstract toggle */}
                    <button
                      onClick={() => setExpanded(expanded === pub.id ? null : pub.id)}
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600, color: "var(--muted-foreground)", padding: "0.5rem 0 0", display: "flex", alignItems: "center", gap: "0.3rem", transition: "color 0.12s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
                    >
                      <ChevronRight size={13} style={{ transform: expanded === pub.id ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
                      {expanded === pub.id ? "Hide abstract" : "Show abstract & keywords"}
                    </button>

                    {/* Abstract */}
                    {expanded === pub.id && (
                      <div style={{ marginTop: "0.875rem", paddingTop: "0.875rem", borderTop: "1px solid #f3f4f6", animation: "fadeIn 0.2s ease" }}>
                        <p style={{ fontSize: "0.83rem", color: "var(--muted-foreground)", lineHeight: 1.7, margin: "0 0 0.875rem" }}>
                          {pub.abstract}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                          {pub.keywords.map(kw => (
                            <span key={kw} style={{ fontSize: "0.72rem", fontWeight: 600, background: "rgba(56,27,146,0.07)", color: "#381b92", borderRadius: 4, padding: "0.2rem 0.5rem" }}>
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--muted-foreground)" }}>
                Showing {filtered.length} of {publications.length} publications
              </span>
              <Link
                to="/dashboard/metrics"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}
              >
                <TrendingUp size={13} /> View citation metrics
              </Link>
            </div>
          </div>

          <div style={{ height: "1rem" }} />
        </main>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </Layout>
  );
}
