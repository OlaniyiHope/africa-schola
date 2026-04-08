
// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import logo from "@/assets/logo.png";
// import { useAuth } from "@/context/AuthContext"; // 👈 your auth context

// const navItems = [
//   { label: "About", href: "/about" },
//   { label: "Publications", href: "/publications" },
//   { label: "Network", href: "/network" },
//   { label: "Instituition", href: "/instituition" },
//   {
//     label: "Advisory",
//     href: "/advisory",
//     children: [
//       { label: "Overview", href: "/advisory", description: "Educational & University Advisory services" },
//       { label: "Transcript Advisory", href: "/advisory/transcripts", description: "University transcript processing guidance" },
//       { label: "Degree Programs", href: "/advisory/degrees", description: "Part-time, Master's & Doctoral pathways" },
//       { label: "Study in Africa", href: "/advisory/study-in-africa", description: "Academic mobility opportunities" },
//     ],
//   },
//   {
//     label: "Publishing",
//     href: "/publishing",
//     children: [
//       { label: "Submit Manuscript", href: "/publishing/submit", description: "Submit your research for publication" },
//       { label: "Start a Journal", href: "/publishing/start-journal", description: "Launch a new academic journal" },
//       { label: "Call for Papers", href: "/publishing/calls", description: "Open calls and special issues" },
//     ],
//   },
// ];

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location  = useLocation();
//   const navigate  = useNavigate();
//   const { isAuthenticated } = useAuth(); // 👈 pull auth state

//   const isActive = (href: string) => {
//     if (href === "/") return location.pathname === "/";
//     return location.pathname.startsWith(href);
//   };

//   // Guard: go to /publeesh if logged in, else redirect to login with a return path
//   const handlePubleesh = () => {
//     if (isAuthenticated) {
//       navigate("/publeesh-ai");
//     } else {
//       navigate("/login", { state: { from: "/publeesh-ai" } });
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container-section flex h-16 items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Afrika Scholar" className="h-10 w-auto" />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-1">
//           {navItems.map((item) =>
//             item.children ? (
//               <div key={item.label} className="relative group">
//                 <button
//                   className={cn(
//                     "inline-flex h-10 items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent",
//                     isActive(item.href) && "text-accent"
//                   )}
//                 >
//                   {item.label}
//                   <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
//                 </button>
//                 <div className="absolute left-0 top-full z-50 hidden group-hover:block pt-1">
//                   <ul className="w-[340px] rounded-lg border bg-white p-2 shadow-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
//                     {item.children.map((child) => (
//                       <li key={child.href}>
//                         <Link
//                           to={child.href}
//                           className={cn(
//                             "block rounded-md p-3 transition-colors hover:bg-accent/10 hover:text-accent",
//                             isActive(child.href) && "bg-accent/10 text-accent"
//                           )}
//                         >
//                           <div className="text-sm font-semibold leading-none mb-1">{child.label}</div>
//                           <p className="text-xs text-muted-foreground leading-snug">{child.description}</p>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className={cn(
//                   "inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent",
//                   isActive(item.href) && "text-accent"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//         </nav>

//         {/* CTA Buttons */}
//         <div className="hidden lg:flex items-center gap-3">
//           <Button variant="outline" asChild>
//             <Link to="/publishing/submit">Publish Paper</Link>
//           </Button>

//           {/* Publeesh — auth guarded */}
//           <Button className="bg-accent hover:bg-accent/90" onClick={handlePubleesh}>
//             Publeesh Ai
//           </Button>

//           <Button className="bg-accent hover:bg-accent/90" style={{ backgroundColor: "#381b92" }} asChild>
//             <Link to="/login">Sign In</Link>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden p-2"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden border-t bg-background">
//           <nav className="container-section py-4">
//             <ul className="space-y-2">
//               {navItems.map((item) => (
//                 <li key={item.label}>
//                   {item.children ? (
//                     <MobileNavDropdown item={item} isActive={isActive} onItemClick={() => setMobileMenuOpen(false)} />
//                   ) : (
//                     <Link
//                       to={item.href}
//                       className={cn("block py-2 text-lg font-medium hover:text-accent", isActive(item.href) && "text-accent")}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-4 flex flex-col gap-2">
//               <Button variant="outline" asChild className="w-full">
//                 <Link to="/publishing/submit" onClick={() => setMobileMenuOpen(false)}>Publish Paper</Link>
//               </Button>

//               {/* Publeesh mobile — auth guarded */}
//               <Button
//                 className="w-full bg-accent hover:bg-accent/90"
//                 onClick={() => { setMobileMenuOpen(false); handlePubleesh(); }}
//               >
//                 Publeesh Ai
//               </Button>

//               <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" style={{ backgroundColor: "#381b92" }} asChild>
//                 <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
//               </Button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// interface MobileNavDropdownProps {
//   item: {
//     label: string;
//     href: string;
//     children?: { label: string; href: string; description: string }[];
//   };
//   isActive: (href: string) => boolean;
//   onItemClick: () => void;
// }

// function MobileNavDropdown({ item, isActive, onItemClick }: MobileNavDropdownProps) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <button
//         className={cn("flex w-full items-center justify-between py-2 text-lg font-medium hover:text-accent", isActive(item.href) && "text-accent")}
//         onClick={() => setOpen(!open)}
//       >
//         {item.label}
//         <ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
//       </button>
//       {open && item.children && (
//         <ul className="ml-4 space-y-1 border-l-2 border-accent/20 pl-4">
//           {item.children.map((child) => (
//             <li key={child.href}>
//               <Link
//                 to={child.href}
//                 className={cn("block py-2 text-base hover:text-accent", isActive(child.href) && "text-accent")}
//                 onClick={onItemClick}
//               >
//                 {child.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu, X, ChevronDown, LogOut, LayoutDashboard,
  BookOpen, FileText, Settings, PenLine, Bell, User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useAuth } from "@/context/AuthContext";

// ─── Nav items ────────────────────────────────────────────────────────────────

const navItems = [
  { label: "About",        href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "Network",      href: "/network" },
  { label: "Instituition", href: "/instituition" },
  {
    label: "Advisory",
    href: "/advisory",
    children: [
      { label: "Overview",            href: "/advisory",                description: "Educational & University Advisory services" },
      { label: "Transcript Advisory", href: "/advisory/transcripts",    description: "University transcript processing guidance" },
      { label: "Degree Programs",     href: "/advisory/degrees",        description: "Part-time, Master's & Doctoral pathways" },
      { label: "Study in Africa",     href: "/advisory/study-in-africa", description: "Academic mobility opportunities" },
    ],
  },
  {
    label: "Publishing",
    href: "/publishing",
    children: [
      { label: "Submit Manuscript", href: "/publishing/submit", description: "Submit your research for publication" },
      { label: "Start a Journal",   href: "/publishing/start-journal", description: "Launch a new academic journal" },
      { label: "Call for Papers",   href: "/publishing/calls", description: "Open calls and special issues" },
    ],
  },
];

// ─── User dropdown menu items ─────────────────────────────────────────────────

const userMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard",       to: "/dashboard" },
  { icon: User,            label: "My Profile",      to: "/dashboard/researcher/account/profile" },
  { icon: PenLine,         label: "My Submissions",  to: "/dashboard/researcher/publishing/submissions" },
  { icon: BookOpen,        label: "My Publications", to: "/dashboard/researcher/publishing" },
  { icon: FileText,        label: "Post a Paper",    to: "/dashboard/researcher/research/papers" },
  { icon: Bell,            label: "Notifications",   to: "/dashboard/researcher/notifications" },
  { icon: Settings,        label: "Settings",        to: "/dashboard/researcher/settings" },
];

// ─── UserDropdown ─────────────────────────────────────────────────────────────

function UserDropdown() {
  const { user, logout } = useAuth();
  const navigate         = useNavigate();
  const [open, setOpen]  = useState(false);
  const ref              = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  const initials = user?.username
    ? user.username.slice(0, 2).toUpperCase()
    : "AS";

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "none", border: "1.5px solid var(--border, #e5e7eb)",
          borderRadius: 999, padding: "0.3rem 0.75rem 0.3rem 0.3rem",
          cursor: "pointer", transition: "border-color 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border,#e5e7eb)")}
      >
        {/* Avatar */}
        <div style={{
          width: 30, height: 30, borderRadius: "50%",
          background: "#381b92", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.72rem", fontWeight: 800, flexShrink: 0,
        }}>
          {initials}
        </div>
        <span style={{
          fontSize: "0.83rem", fontWeight: 600, color: "var(--foreground)",
          maxWidth: 110, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {user?.username}
        </span>
        <ChevronDown
          size={13}
          style={{ color: "var(--muted-foreground)", transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
     width: 230, background: "#ffffff",   
          border: "1px solid var(--border, #e5e7eb)", borderRadius: 14,
          boxShadow: "0 8px 32px rgba(0,0,0,0.13)", zIndex: 100, overflow: "hidden",
          animation: "dropIn 0.15s ease",
        }}>
          {/* User info */}
          <div style={{ padding: "1rem 1rem 0.75rem", borderBottom: "1px solid var(--border,#e5e7eb)" }}>
            <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--foreground)" }}>
              {user?.username}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {user?.email}
            </div>
       
          </div>

          {/* Menu links */}
          <div style={{ padding: "0.4rem" }}>
            {userMenuItems.map(({ icon: Icon, label, to }) => (
              <Link
                key={to} to={to}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: "0.625rem",
                  padding: "0.55rem 0.75rem", borderRadius: 8,
                  fontSize: "0.83rem", fontWeight: 500,
                  color: "var(--foreground)", textDecoration: "none",
                  transition: "background 0.12s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(234,88,12,0.06)")}
                onMouseLeave={e => (e.currentTarget.style.background = "none")}
              >
                <Icon size={14} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
                {label}
              </Link>
            ))}
          </div>

          {/* Logout */}
          <div style={{ borderTop: "1px solid var(--border,#e5e7eb)", padding: "0.4rem" }}>
            <button
              onClick={handleLogout}
              style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                width: "100%", padding: "0.55rem 0.75rem", borderRadius: 8,
                fontSize: "0.83rem", fontWeight: 600, color: "#ef4444",
                background: "none", border: "none", cursor: "pointer", transition: "background 0.12s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(239,68,68,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}
            >
              <LogOut size={14} style={{ flexShrink: 0 }} />
              Sign Out
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes dropIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location                            = useLocation();
  const navigate                            = useNavigate();
  const { isAuthenticated, isLoading, logout } = useAuth();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const handlePubleesh = () => {
    if (isAuthenticated) navigate("/publeesh-ai");
    else navigate("/publeesh-ai", { state: { from: "/publeesh-ai" } });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-section flex h-16 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Afrika Scholar" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className={cn(
                  "inline-flex h-10 items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent",
                  isActive(item.href) && "text-accent"
                )}>
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full z-50 hidden group-hover:block pt-1">
                  <ul className="w-[340px] rounded-lg border bg-white p-2 shadow-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link to={child.href} className={cn(
                          "block rounded-md p-3 transition-colors hover:bg-accent/10 hover:text-accent",
                          isActive(child.href) && "bg-accent/10 text-accent"
                        )}>
                          <div className="text-sm font-semibold leading-none mb-1">{child.label}</div>
                          <p className="text-xs text-muted-foreground leading-snug">{child.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.href} className={cn(
                "inline-flex h-10 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent",
                isActive(item.href) && "text-accent"
              )}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/publishing/submit">Publish Paper</Link>
          </Button>

          <Button className="bg-accent hover:bg-accent/90" onClick={handlePubleesh}>
            Publeesh Ai
          </Button>

          {/* ── Auth-aware: dropdown or Sign In ── */}
          {!isLoading && (
            isAuthenticated
              ? <UserDropdown />
              : (
                <Button style={{ backgroundColor: "#381b92" }} asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
              )
          )}
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-section py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children
                    ? <MobileNavDropdown item={item} isActive={isActive} onItemClick={() => setMobileMenuOpen(false)} />
                    : (
                      <Link
                        to={item.href}
                        className={cn("block py-2 text-lg font-medium hover:text-accent", isActive(item.href) && "text-accent")}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  }
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/publishing/submit" onClick={() => setMobileMenuOpen(false)}>Publish Paper</Link>
              </Button>

              <Button className="w-full bg-accent hover:bg-accent/90"
                onClick={() => { setMobileMenuOpen(false); handlePubleesh(); }}>
                Publeesh Ai
              </Button>

              {/* ── Mobile auth-aware ── */}
              {!isLoading && (
                isAuthenticated ? (
                  <>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/dashboard/profile" onClick={() => setMobileMenuOpen(false)}>My Profile</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/publishing/submit" onClick={() => setMobileMenuOpen(false)}>Post a Paper</Link>
                    </Button>
                    <Button
                      className="w-full"
                      style={{ background: "#ef4444", color: "#fff" }}
                      onClick={() => { logout(); setMobileMenuOpen(false); navigate("/"); }}
                    >
                      <LogOut size={15} className="mr-2" /> Sign Out
                    </Button>
                  </>
                ) : (
                  <Button className="w-full" style={{ backgroundColor: "#381b92" }} asChild>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                  </Button>
                )
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── MobileNavDropdown ────────────────────────────────────────────────────────

interface MobileNavDropdownProps {
  item: { label: string; href: string; children?: { label: string; href: string; description: string }[] };
  isActive: (href: string) => boolean;
  onItemClick: () => void;
}

function MobileNavDropdown({ item, isActive, onItemClick }: MobileNavDropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className={cn("flex w-full items-center justify-between py-2 text-lg font-medium hover:text-accent", isActive(item.href) && "text-accent")}
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
      </button>
      {open && item.children && (
        <ul className="ml-4 space-y-1 border-l-2 border-accent/20 pl-4">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                className={cn("block py-2 text-base hover:text-accent", isActive(child.href) && "text-accent")}
                onClick={onItemClick}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
