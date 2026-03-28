import { Link } from "react-router-dom";
import {
  Users, Building2, Globe, ArrowUpRight, Briefcase,
  TrendingUp, Eye, Calendar, Zap, ChevronRight,
  Plus, BookOpen, Network, MessageSquare, Target, Star,
} from "lucide-react";
import DashboardLayout from "./DashboardLayout";

// ─── Mock data ────────────────────────────────────────────────────────────────

const opportunities = [
  { title: "Research Consultant — Health Policy",  org: "WHO Africa Office",        type: "Consulting",     date: "Apr 15, 2026" },
  { title: "Industry-Academia Partnership Lead",   org: "Lagos Business School",   type: "Partnership",    date: "Apr 20, 2026" },
  { title: "Policy Advisor — Climate Finance",     org: "AfDB Group",               type: "Advisory",       date: "May 1, 2026"  },
  { title: "Research Collaboration: Fintech",      org: "Univ. of Cape Town",       type: "Collaboration",  date: "May 10, 2026" },
];

const typeColors: Record<string, { color: string; bg: string }> = {
  Consulting:    { color: "#7c3aed", bg: "#f5f3ff" },
  Partnership:   { color: "#0891b2", bg: "#ecfeff" },
  Advisory:      { color: "#d97706", bg: "#fffbeb" },
  Collaboration: { color: "#16a34a", bg: "#f0fdf4" },
};

const networkHighlights = [
  { name: "Dr. Amara Diallo",   role: "Public Health Researcher", institution: "Univ. of Dakar",    mutual: 4 },
  { name: "Prof. Kofi Mensah",  role: "Economics Professor",       institution: "Univ. of Ghana",    mutual: 7 },
  { name: "Fatima Al-Hassan",   role: "Policy Analyst",            institution: "AUC Addis Ababa",   mutual: 2 },
];

const quickActions = [
  { icon: Network,   label: "Find Researchers", to: "/dashboard/professional/network",     color: "#381b92", bg: "rgba(56,27,146,0.08)" },
  { icon: Building2, label: "Institutions",     to: "/dashboard/professional/institutions", color: "#0891b2", bg: "rgba(8,145,178,0.08)"  },
  { icon: BookOpen,  label: "Library",          to: "/dashboard/professional/library",     color: "#16a34a", bg: "rgba(22,163,74,0.08)"  },
  { icon: Target,    label: "Opportunities",    to: "/dashboard/professional/advisory",    color: "#d97706", bg: "rgba(217,119,6,0.08)"  },
];

function StatCard({ icon: Icon, label, value, sub, color, to }: { icon: React.ElementType; label: string; value: number | string; sub?: string; color: string; to?: string }) {
  const content = (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", transition: "box-shadow 0.15s, transform 0.15s", cursor: to ? "pointer" : "default" }}
      onMouseEnter={e => { if (to) { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)"; } }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.875rem" }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={20} style={{ color }} />
        </div>
        {to && <ArrowUpRight size={14} style={{ color: "#9ca3af" }} />}
      </div>
      <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1f2937", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6b7280", marginTop: "0.3rem" }}>{label}</div>
      {sub && <div style={{ fontSize: "0.7rem", color, marginTop: "0.25rem", fontWeight: 600 }}>{sub}</div>}
    </div>
  );
  return to ? <Link to={to} style={{ textDecoration: "none" }}>{content}</Link> : content;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ProfessionalDashboard() {
  const stored = localStorage.getItem("as_user");
  const user = stored ? JSON.parse(stored) : null;
  const name = user?.username || "Professional";
  const initials = name.slice(0, 2).toUpperCase();
  const h = new Date().getHours();
  const greeting = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";

  return (
    <DashboardLayout role="professional" credits={55}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Welcome Banner */}
        <div style={{
          background: "linear-gradient(135deg, #0f1623 0%, #064e3b 60%, #065f46 100%)",
          borderRadius: 16, padding: "1.75rem 2rem", marginBottom: "1.75rem",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "#ea580c", opacity: 0.12 }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#065f46", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 800, flexShrink: 0 }}>{initials}</div>
              <div>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", margin: "0 0 0.2rem" }}>{greeting},</p>
                <h1 style={{ fontSize: "clamp(1rem,3vw,1.4rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "#fff", margin: 0 }}>{name} 👋</h1>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", margin: "0.2rem 0 0" }}>Discover research partnerships, consulting opportunities, and academic networks.</p>
              </div>
            </div>
            <Link to="/dashboard/professional/network" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#ea580c", color: "#fff", border: "none", borderRadius: 10, padding: "0.7rem 1.25rem", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
              <Plus size={16} /> Explore Network
            </Link>
          </div>
        </div>

        {/* Identity Card */}
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem 1.5rem", marginBottom: "1.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#065f46", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>{initials}</div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1f2937" }}>{name}</span>
                <span style={{ background: "#f0fdf4", color: "#065f46", border: "1px solid #bbf7d0", borderRadius: 999, padding: "0.15rem 0.6rem", fontSize: "0.7rem", fontWeight: 700 }}>Professional</span>
              </div>
              <p style={{ margin: "0.2rem 0 0", fontSize: "0.78rem", color: "#6b7280" }}>{user?.email || ""}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <Link to="/dashboard/professional/profile" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: "0.8rem", fontWeight: 600, color: "#374151", textDecoration: "none" }}>
              <Eye size={14} /> View
            </Link>
            <Link to="/dashboard/professional/profile/edit" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: "0.8rem", fontWeight: 600, color: "#374151", textDecoration: "none" }}>
              Edit
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
          <StatCard icon={Users}     label="Connections"         value={38}  color="#381b92" to="/dashboard/professional/network"  sub="↑ 5 this month" />
          <StatCard icon={Building2} label="Institutions"        value={12}  color="#0891b2" to="/dashboard/professional/institutions" />
          <StatCard icon={Briefcase} label="Opportunities"       value={4}   color="#d97706" to="/dashboard/professional/advisory"  sub="Active" />
          <StatCard icon={MessageSquare} label="Collaborations"  value={6}   color="#065f46" />
          <StatCard icon={BookOpen}  label="Resources Saved"     value={23}  color="#7c3aed" />
          <StatCard icon={Star}      label="Profile Views"       value={141} color="#ea580c" />
        </div>

        {/* Two-column */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "1.25rem", alignItems: "start" }}>

          {/* Left */}
          <div>
            {/* Quick Actions */}
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", marginBottom: "1.25rem" }}>
              <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem" }}>Quick Actions</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
                {quickActions.map(({ icon: Icon, label, to, color, bg }) => (
                  <Link key={to} to={to} style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", padding: "1rem 0.5rem", borderRadius: 12, background: bg, border: `1px solid ${color}20`, textAlign: "center", transition: "transform 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                    >
                      <Icon size={20} style={{ color }} />
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color, lineHeight: 1.3 }}>{label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
                <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>Research Opportunities</h2>
                <Link to="/dashboard/professional/advisory" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ea580c", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  View all <ChevronRight size={13} />
                </Link>
              </div>
              {opportunities.map((opp, i) => {
                const tc = typeColors[opp.type] || typeColors.Collaboration;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "0.875rem 1.25rem", borderTop: i > 0 ? "1px solid #f9fafb" : "none", gap: "1rem" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#fafafa")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: "0 0 0.25rem", fontSize: "0.83rem", fontWeight: 600, color: "#1f2937" }}>{opp.title}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.7rem", color: "#6b7280" }}>{opp.org}</span>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, borderRadius: 999, padding: "0.15rem 0.5rem", background: tc.bg, color: tc.color }}>{opp.type}</span>
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, textAlign: "right" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.7rem", color: "#6b7280" }}><Calendar size={10} />{opp.date}</span>
                      <button style={{ marginTop: "0.3rem", background: "#065f46", color: "#fff", border: "none", borderRadius: 6, padding: "0.25rem 0.65rem", fontSize: "0.7rem", fontWeight: 700, cursor: "pointer" }}>Apply</button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Network Highlights */}
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #f3f4f6" }}>
                <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>Suggested Connections</h2>
                <Link to="/dashboard/professional/network" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#ea580c", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  View all <ChevronRight size={13} />
                </Link>
              </div>
              {networkHighlights.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1.25rem", borderTop: i > 0 ? "1px solid #f9fafb" : "none" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#065f46", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontWeight: 800, flexShrink: 0 }}>
                    {p.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: "0.83rem", fontWeight: 600, color: "#1f2937" }}>{p.name}</p>
                    <p style={{ margin: 0, fontSize: "0.72rem", color: "#6b7280" }}>{p.role} · {p.institution}</p>
                    <p style={{ margin: 0, fontSize: "0.68rem", color: "#9ca3af" }}>{p.mutual} mutual connections</p>
                  </div>
                  <button style={{ background: "#f0fdf4", color: "#065f46", border: "1px solid #bbf7d0", borderRadius: 8, padding: "0.35rem 0.75rem", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Connect</button>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Activity */}
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem" }}>
              <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem" }}>Network Activity</h2>
              {[
                { label: "Connections made",     value: 38, max: 50,  color: "#381b92" },
                { label: "Opportunities applied", value: 3,  max: 10,  color: "#d97706" },
                { label: "Profile completion",   value: 70, max: 100, color: "#065f46", pct: true },
              ].map(({ label, value, max, color, pct }) => (
                <div key={label} style={{ marginBottom: "0.875rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.78rem", color: "#6b7280", fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1f2937" }}>{pct ? `${value}%` : `${value}/${max}`}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: "#f3f4f6" }}>
                    <div style={{ height: "100%", width: `${(value / max) * 100}%`, background: color, borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* AI CTA */}
            <div style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)", borderRadius: 14, padding: "1.25rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "#ea580c", opacity: 0.2 }} />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <Zap size={16} style={{ color: "#ea580c" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>AI-Powered</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.4rem", fontFamily: "Georgia, serif" }}>Research Intelligence</h3>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", margin: "0 0 1rem", lineHeight: 1.5 }}>Discover insights, trends, and collaboration opportunities across Africa.</p>
                <Link to="/dashboard/professional/intelligence" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "#ea580c", color: "#fff", borderRadius: 8, padding: "0.55rem 1rem", fontSize: "0.8rem", fontWeight: 700, textDecoration: "none" }}>
                  Explore <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Upgrade */}
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.25rem", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(6,95,70,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
                <TrendingUp size={22} style={{ color: "#065f46" }} />
              </div>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 0.4rem" }}>Unlock Full Access</h3>
              <p style={{ fontSize: "0.78rem", color: "#6b7280", margin: "0 0 1rem", lineHeight: 1.5 }}>Access premium networking, advisory tools, and research intelligence.</p>
              <Link to="/pricing" style={{ display: "block", background: "#065f46", color: "#fff", borderRadius: 8, padding: "0.65rem", fontSize: "0.83rem", fontWeight: 700, textDecoration: "none" }}>
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
