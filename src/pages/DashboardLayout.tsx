import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Send, Library, Radar, Users,
  Building2, BookMarked, GraduationCap, Briefcase, CreditCard,
  Settings, ChevronRight, Menu, X, Bell, Search, LogOut,
} from "lucide-react";

// ─── Nav configs per role ─────────────────────────────────────────────────────

const NAV_CONFIG = {
  researcher: [
    { icon: LayoutDashboard, label: "Dashboard",               to: "/dashboard/researcher" },
    { icon: BookMarked,      label: "My Research",             to: "/dashboard/researcher/research" },
    { icon: Send,            label: "Publishing",              to: "/dashboard/researcher/publishing" },
    { icon: Library,         label: "Library",                 to: "/dashboard/researcher/library" },
    { icon: Radar,           label: "Research Intelligence",   to: "/dashboard/researcher/intelligence" },
    { icon: Users,           label: "Network",                 to: "/dashboard/researcher/network" },
    { icon: Users,           label: "Community",               to: "/dashboard/researcher/community" },
    { icon: CreditCard,      label: "Billing & Credits",       to: "/dashboard/researcher/billing" },
    { icon: Settings,        label: "Account",                 to: "/dashboard/researcher/account" },
  ],
  academic: [
    { icon: LayoutDashboard, label: "Dashboard",               to: "/dashboard/academic" },
    { icon: BookMarked,      label: "My Research",             to: "/dashboard/academic/research" },
    { icon: Send,            label: "Publishing",              to: "/dashboard/academic/publishing" },
    { icon: Library,         label: "Library",                 to: "/dashboard/academic/library" },
    { icon: Users,           label: "Network",                 to: "/dashboard/academic/network" },
    { icon: Building2,       label: "Institutions",            to: "/dashboard/academic/institutions" },
    { icon: Radar,           label: "Research Intelligence",   to: "/dashboard/academic/intelligence" },
    { icon: Users,           label: "Community",               to: "/dashboard/academic/community" },
    { icon: CreditCard,      label: "Billing & Credits",       to: "/dashboard/academic/billing" },
    { icon: Settings,        label: "Account",                 to: "/dashboard/academic/account" },
  ],
  professional: [
    { icon: LayoutDashboard, label: "Dashboard",               to: "/dashboard/professional" },
    { icon: Users,           label: "Network",                 to: "/dashboard/professional/network" },
    { icon: Building2,       label: "Institutions",            to: "/dashboard/professional/institutions" },
    { icon: Library,         label: "Library",                 to: "/dashboard/professional/library" },
    { icon: Users,           label: "Community",               to: "/dashboard/professional/community" },
    { icon: GraduationCap,   label: "Academic Advisory",       to: "/dashboard/professional/advisory" },
    { icon: Radar,           label: "Research Intelligence",   to: "/dashboard/professional/intelligence" },
    { icon: CreditCard,      label: "Billing & Credits",       to: "/dashboard/professional/billing" },
    { icon: Settings,        label: "Account",                 to: "/dashboard/professional/account" },
  ],
};

const ROLE_LABEL: Record<string, string> = {
  researcher: "Researcher",
  academic: "Academic",
  professional: "Professional",
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ role, onClose }: { role: "researcher" | "academic" | "professional"; onClose?: () => void }) {
  const location = useLocation();
  const nav = NAV_CONFIG[role];
  const stored = localStorage.getItem("as_user");
  const user = stored ? JSON.parse(stored) : null;
  const initials = user?.username ? user.username.slice(0, 2).toUpperCase() : "AS";
  const username = user?.username || "User";

  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100%",
      background: "#0f1623", color: "#fff",
    }}>
      {/* Logo */}
      <div style={{ padding: "1.25rem 1.5rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#ea580c" }}>Afrika</span>
            <span style={{ color: "#fff" }}>Scholar</span>
          </span>
        </Link>
      </div>

      {/* Search */}
      <div style={{ padding: "1rem 1rem 0.5rem", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.07)", borderRadius: 8, padding: "0.5rem 0.75rem" }}>
          <Search size={13} style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>Search...</span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "0.5rem 0.75rem" }}>
        {nav.map(({ icon: Icon, label, to }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to} to={to} onClick={onClose}
              style={{
                display: "flex", alignItems: "center", gap: "0.65rem",
                padding: "0.6rem 0.875rem", borderRadius: 8, marginBottom: "0.1rem",
                textDecoration: "none", transition: "all 0.15s",
                background: active ? "rgba(234,88,12,0.15)" : "transparent",
                color: active ? "#ea580c" : "rgba(255,255,255,0.65)",
                fontWeight: active ? 700 : 500,
                fontSize: "0.855rem",
              }}
              onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; } }}
            >
              <Icon size={15} style={{ flexShrink: 0 }} />
              {label}
              {active && <ChevronRight size={12} style={{ marginLeft: "auto", opacity: 0.7 }} />}
            </Link>
          );
        })}
      </nav>

      {/* User footer */}
      <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#ea580c", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.78rem", fontWeight: 800, flexShrink: 0,
          }}>
            {initials}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{username}</p>
            <p style={{ margin: 0, fontSize: "0.7rem", color: "rgba(255,255,255,0.45)" }}>{ROLE_LABEL[role]}</p>
          </div>
          <button
            onClick={() => { localStorage.clear(); window.location.href = "/login"; }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", padding: 4, display: "flex" }}
            title="Logout"
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────

function MobileDrawer({ open, role, onClose }: { open: boolean; role: "researcher" | "academic" | "professional"; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }} />
      <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 248, zIndex: 50 }}>
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "0.75rem", background: "#0f1623" }}>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", display: "flex" }}>
              <X size={18} />
            </button>
          </div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <Sidebar role={role} onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────

function TopBar({ onMenuClick, credits }: { onMenuClick: () => void; credits?: number }) {
  return (
    <div style={{
      height: 56, borderBottom: "1px solid #e5e7eb",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 1.5rem", background: "#fff", flexShrink: 0,
    }}>
      <button
        onClick={onMenuClick}
        className="md:hidden"
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#374151" }}
      >
        <Menu size={20} />
      </button>
      <div className="hidden md:block" />

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {credits !== undefined && (
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#ea580c" }}>
            AI Credits: {credits}
          </span>
        )}
        <button style={{ position: "relative", background: "none", border: "none", cursor: "pointer", display: "flex", color: "#6b7280" }}>
          <Bell size={18} />
          <span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "#ea580c", border: "2px solid #fff" }} />
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", color: "#6b7280" }}>
          <Settings size={18} />
        </button>
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
  role: "researcher" | "academic" | "professional";
  children: React.ReactNode;
  credits?: number;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f4f5f7" }}>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex"
        style={{ width: 240, flexShrink: 0, flexDirection: "column", overflow: "hidden" }}
      >
        <Sidebar role={role} />
      </aside>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} role={role} onClose={() => setMobileOpen(false)} />

      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopBar onMenuClick={() => setMobileOpen(true)} credits={credits} />
        <main style={{ flex: 1, overflowY: "auto", padding: "1.75rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
