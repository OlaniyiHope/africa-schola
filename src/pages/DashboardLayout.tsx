import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Send, Library, Radar, Users,
  Building2, BookMarked, GraduationCap, Briefcase, CreditCard,
  Settings, ChevronRight, ChevronDown, Menu, X, Bell, Search, LogOut,
  FileText, FolderOpen, Lightbulb, ClipboardList, Globe, Bookmark,
  Download, User, Handshake, BarChart3, Database, Compass, MapPin,
  FileUp, Wallet, Activity, Receipt,   PlusCircle, Wand2, Monitor, Wrench
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "researcher" | "academic" | "professional";

interface NavChild {
  icon: any;
  label: string;
  to: string;
}

interface NavItem {
  icon: any;
  label: string;
  to: string;
  children?: NavChild[];
}

// ─── Nav configs per role ─────────────────────────────────────────────────────

const NAV_CONFIG: Record<Role, NavItem[]> = {
  researcher: [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/researcher" },
    {
      icon: BookMarked, label: "My Research", to: "/dashboard/researcher/research",
      children: [
        { icon: FileText,    label: "My Papers",         to: "/dashboard/researcher/research/papers" },
        { icon: FolderOpen,  label: "Research Projects", to: "/dashboard/researcher/research/projects" },
        { icon: BookOpen,    label: "Reading List",      to: "/dashboard/researcher/research/reading-list" },
        { icon: Lightbulb,   label: "Pro Tips",          to: "/dashboard/researcher/research/pro-tips" },
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

//   {
//   icon: Radar, label: "Research Intelligence", to: "/dashboard/researcher/intelligence",
//   children: [
//     { icon: FileText,  label: "Generate Paper",    to: "/dashboard/researcher/intelligence/generate-paper" },
//     { icon: Database,  label: "Dataset Explorer",  to: "/dashboard/researcher/intelligence/explorer" },
//     { icon: BarChart3, label: "Dataset Analyzer",  to: "/dashboard/researcher/intelligence/analyzer" },
//     { icon: Compass,   label: "Intelligence Hub",  to: "/dashboard/researcher/intelligence/hub" },
    
//   ],
// },
{
  icon: Radar, label: "Research Intelligence (Publeesh AI)", to: "/dashboard/researcher/intelligence",
  children: [
    { icon: FileText,  label: "Generate Paper",    to: "/dashboard/researcher/intelligence/generate-paper" },
    { icon: Database,  label: "Dataset Explorer",  to: "/dashboard/researcher/intelligence/explorer" },
    { icon: BarChart3, label: "Dataset Analyzer",  to: "/dashboard/researcher/intelligence/analyzer" },
    { icon: Compass,   label: "Intelligence Hub",  to: "/dashboard/researcher/intelligence/hub" },

  ],
},
{
  icon: Wrench, label: "Instrument Studio", to: "/dashboard/researcher/instrument-studio",
  children: [
    { icon: PlusCircle, label: "Create Instrument",  to: "/dashboard/researcher/instrument-studio/create" },
    { icon: Wand2,      label: "AI Paper Generator", to: "/dashboard/researcher/instrument-studio/paper-generator" },
    { icon: Monitor,    label: "AI Slide Builder",   to: "/dashboard/researcher/instrument-studio/slide-builder" },
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
        { icon: Users,     label: "Feed",                    to: "/dashboard/researcher/community" },
        { icon: Users,     label: "Discussions",             to: "/dashboard/researcher/community/discussions" },
        { icon: Users,     label: "Researchers",             to: "/dashboard/researcher/community/researchers" },
        { icon: Handshake, label: "Collaboration Requests",  to: "/dashboard/researcher/community/collaborations" },
        { icon: User,      label: "My Activity",             to: "/dashboard/researcher/community/activity" },
      ],
    },
    {
      icon: CreditCard, label: "Billing & Credits", to: "/dashboard/researcher/billing",
      children: [
        { icon: CreditCard, label: "Subscription",      to: "/dashboard/researcher/billing" },
        { icon: Wallet,     label: "Credits",           to: "/dashboard/researcher/billing/credits" },
        { icon: Activity,   label: "Usage",             to: "/dashboard/researcher/billing/usage" },
        { icon: CreditCard, label: "Payment Methods",   to: "/dashboard/researcher/billing/payment-methods" },
        { icon: Receipt,    label: "Invoices",          to: "/dashboard/researcher/billing/invoices" },
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
        { icon: FileText,    label: "My Papers",         to: "/dashboard/academic/research/papers" },
        { icon: FolderOpen,  label: "Research Projects", to: "/dashboard/academic/research/projects" },
        { icon: BookOpen,    label: "Reading List",      to: "/dashboard/academic/research/reading-list" },
        { icon: Lightbulb,   label: "Pro Tips",          to: "/dashboard/academic/research/pro-tips" },
      ],
    },
    {
      icon: Send, label: "Publishing", to: "/dashboard/academic/publishing",
      children: [
        { icon: Globe,         label: "Publishing Overview", to: "/dashboard/academic/publishing" },
        { icon: Send,          label: "Submit Manuscript",   to: "/dashboard/academic/publishing/submit" },
        { icon: ClipboardList, label: "My Submissions",      to: "/dashboard/academic/publishing/submissions" },
        { icon: FileText,      label: "Peer Reviews",        to: "/dashboard/academic/publishing/reviews" },
      ],
    },
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
        { icon: Building2,     label: "Overview",                to: "/dashboard/academic/institutions" },
        { icon: Handshake,     label: "Partnership Requests",    to: "/dashboard/academic/institutions/partnerships" },
        { icon: GraduationCap, label: "Lecturer Requests",       to: "/dashboard/academic/institutions/lecturer-requests" },
        { icon: Users,         label: "Research Collaboration",  to: "/dashboard/academic/institutions/collaboration" },
        { icon: BookOpen,      label: "Curriculum & Validation", to: "/dashboard/academic/institutions/curriculum" },
        { icon: Compass,       label: "Advisory Support",        to: "/dashboard/academic/institutions/advisory" },
        { icon: ClipboardList, label: "My Requests",             to: "/dashboard/academic/institutions/my-requests" },
      ],
    },
    {
      icon: Radar, label: "Research Intelligence", to: "/dashboard/academic/intelligence",
      children: [
        { icon: Database,  label: "Dataset Explorer", to: "/dashboard/academic/intelligence/explorer" },
        { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/academic/intelligence/explorer" },
        { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/academic/intelligence/explorer" },
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
        { icon: Settings, label: "Settings",      to: "/dashboard/academic/account/settings" },
        { icon: Bell,     label: "Notifications", to: "/dashboard/academic/account/notifications" },
      ],
    },
  ],

  professional: [
    { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard/professional" },
    {
      icon: Users, label: "Network", to: "/dashboard/professional/network",
      children: [
        { icon: Globe,         label: "Overview",      to: "/dashboard/professional/network" },
        { icon: Briefcase,     label: "Opportunities", to: "/dashboard/professional/network/opportunities" },
        { icon: ClipboardList, label: "Applications",  to: "/dashboard/professional/network/applications" },
        { icon: Users,         label: "Directory",     to: "/dashboard/professional/network/directory" },
        { icon: Handshake,     label: "Engagements",   to: "/dashboard/professional/network/engagements" },
      ],
    },
    {
      icon: Building2, label: "Institutions", to: "/dashboard/professional/institutions",
      children: [
        { icon: Building2,     label: "Overview",                to: "/dashboard/professional/institutions" },
        { icon: Handshake,     label: "Partnership Requests",    to: "/dashboard/professional/institutions/partnerships" },
        { icon: Users,         label: "Research Collaboration",  to: "/dashboard/professional/institutions/collaboration" },
        { icon: Compass,       label: "Advisory Support",        to: "/dashboard/professional/institutions/advisory" },
        { icon: ClipboardList, label: "My Requests",             to: "/dashboard/professional/institutions/my-requests" },
      ],
    },
    {
      icon: Library, label: "Library", to: "/dashboard/professional/library",
      children: [
        { icon: BookOpen,   label: "Overview",              to: "/dashboard/professional/library" },
        { icon: FileText,   label: "Purchased Papers",      to: "/dashboard/professional/library/purchased" },
        { icon: Bookmark,   label: "Saved Articles",        to: "/dashboard/professional/library/saved" },
        { icon: Download,   label: "Download History",      to: "/dashboard/professional/library/downloads" },
        { icon: FolderOpen, label: "Reading Lists",         to: "/dashboard/professional/library/lists" },
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
        { icon: Compass,       label: "Advisory Overview",  to: "/dashboard/professional/advisory" },
        { icon: FileText,      label: "Transcript Requests",to: "/dashboard/professional/advisory/transcripts" },
        { icon: GraduationCap, label: "Degree Advisory",    to: "/dashboard/professional/advisory/degree" },
        { icon: Globe,         label: "Study in Africa",    to: "/dashboard/professional/advisory/study-africa" },
        { icon: MapPin,        label: "Academic Pathways",  to: "/dashboard/professional/advisory/pathways" },
        { icon: ClipboardList, label: "My Cases",           to: "/dashboard/professional/advisory/cases" },
        { icon: FileUp,        label: "Documents",          to: "/dashboard/professional/advisory/documents" },
      ],
    },
    {
      icon: Radar, label: "Research Intelligence", to: "/dashboard/professional/intelligence",
      children: [
        { icon: Database,  label: "Dataset Explorer", to: "/dashboard/professional/intelligence/explorer" },
        { icon: BarChart3, label: "Dataset Analyzer", to: "/dashboard/professional/intelligence/explorer" },
        { icon: Compass,   label: "Intelligence Hub", to: "/dashboard/professional/intelligence/explorer" },
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
        { icon: Settings, label: "Settings",      to: "/dashboard/professional/account/settings" },
        { icon: Bell,     label: "Notifications", to: "/dashboard/professional/account/notifications" },
      ],
    },
  ],
};

const ROLE_LABEL: Record<Role, string> = {
  researcher:   "Researcher",
  academic:     "Academic",
  professional: "Professional",
};

// ─── Nav Item with optional dropdown ─────────────────────────────────────────

function NavItemRow({ item }: { item: NavItem }) {
  const location = useLocation();

  // Determine if this item or any child is active
  const isChildActive = item.children?.some(c =>
    location.pathname === c.to || location.pathname.startsWith(c.to + "/")
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
          fontWeight: isActive ? 700 : 500,
          fontSize: "0.855rem",
        }}
        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; } }}
        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; } }}
      >
        <item.icon size={15} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>{item.label}</span>
      </Link>
    );
  }

  return (
    <div style={{ marginBottom: "0.1rem" }}>
      {/* Parent row — clicking toggles dropdown */}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: "0.65rem",
          padding: "0.6rem 0.875rem", borderRadius: 8,
          background: isActive ? "rgba(234,88,12,0.10)" : "transparent",
          color: isActive ? "#ea580c" : "rgba(255,255,255,0.65)",
          fontWeight: isActive ? 700 : 500, fontSize: "0.855rem",
          border: "none", cursor: "pointer", transition: "all 0.15s",
          textAlign: "left",
        }}
        onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; } }}
        onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = isActive ? "rgba(234,88,12,0.10)" : "transparent"; e.currentTarget.style.color = isActive ? "#ea580c" : "rgba(255,255,255,0.65)"; } }}
      >
        <item.icon size={15} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>{item.label}</span>
        <ChevronDown
          size={13}
          style={{
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(0deg)" : "rotate(-90deg)",
            opacity: 0.6,
          }}
        />
      </button>

      {/* Children */}
      {open && (
        <div style={{
          marginLeft: "1.25rem",
          paddingLeft: "0.75rem",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          marginTop: "0.15rem",
          marginBottom: "0.25rem",
        }}>
          {item.children.map(child => {
            const childActive = location.pathname === child.to || location.pathname.startsWith(child.to + "/");
            return (
              <Link
                key={child.to}
                to={child.to}
                style={{
                  display: "flex", alignItems: "center", gap: "0.55rem",
                  padding: "0.45rem 0.75rem", borderRadius: 6,
                  marginBottom: "0.05rem", textDecoration: "none",
                  transition: "all 0.15s",
                  background: childActive ? "rgba(234,88,12,0.15)" : "transparent",
                  color: childActive ? "#ea580c" : "rgba(255,255,255,0.5)",
                  fontWeight: childActive ? 600 : 400,
                  fontSize: "0.815rem",
                }}
                onMouseEnter={e => { if (!childActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; } }}
                onMouseLeave={e => { if (!childActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; } }}
              >
                <child.icon size={13} style={{ flexShrink: 0 }} />
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ role, onClose }: { role: Role; onClose?: () => void }) {
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
        {nav.map(item => (
          <NavItemRow key={item.to} item={item} />
        ))}
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

function MobileDrawer({ open, role, onClose }: { open: boolean; role: Role; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }} />
      <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 260, zIndex: 50 }}>
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
  role: Role;
  children: React.ReactNode;
  credits?: number;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#f4f5f7" }}>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex"
        style={{ width: 248, flexShrink: 0, flexDirection: "column", overflow: "hidden" }}
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
