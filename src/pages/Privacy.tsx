import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import {
  Shield, Database, Eye, Lock, UserCheck, Globe,
  Bell, Trash2, MessageSquare, Brain, Cookie,
  ChevronRight, Mail, AlertCircle, Users, BarChart2,
} from "lucide-react";
import networkImage from "@/assets/network-collaboration.jpg";
// ─── Data ─────────────────────────────────────────────────────────────────────

const lastUpdated = "March 2026";

const sections = [
  { id: "introduction",        label: "Introduction",                    icon: Shield },
  { id: "information",         label: "Information We Collect",          icon: Database },
  { id: "how-we-use",          label: "How We Use Your Information",     icon: Eye },
  { id: "research-analytics",  label: "Research Intelligence Analytics", icon: BarChart2 },
  { id: "cookies",             label: "Cookies & Tracking",              icon: Cookie },
  { id: "data-protection",     label: "Data Protection",                 icon: Lock },
  { id: "your-rights",         label: "Your Data Rights",                icon: UserCheck },
  { id: "community",           label: "Public & Shared Content",         icon: Users },
  { id: "third-party",         label: "Third-Party Integrations",        icon: Globe },
  { id: "children",            label: "Age Restrictions",                icon: AlertCircle },
  { id: "retention",           label: "Data Retention",                  icon: Trash2 },
  { id: "changes",             label: "Policy Updates",                  icon: Bell },
  { id: "contact",             label: "Contact Us",                      icon: Mail },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHeading({ id, num, icon: Icon, title }: { id: string; num: number; icon: React.ElementType; title: string }) {
  return (
    <div id={id} style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem", paddingTop: "0.5rem" }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(234,88,12,0.08)", border: "1px solid rgba(234,88,12,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={18} style={{ color: "var(--accent)" }} />
      </div>
      <div>
        <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: 2 }}>
          Section {num}
        </div>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--foreground)", margin: 0, fontFamily: "Georgia, serif" }}>
          {title}
        </h2>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0.75rem 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map(item => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>
          <span style={{ marginTop: "0.45rem", width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--foreground)", margin: "1.25rem 0 0.5rem" }}>
      {children}
    </h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.75, margin: "0.5rem 0" }}>
      {children}
    </p>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)", borderRadius: 14, padding: "1.75rem", marginBottom: "1.25rem" }}>
      {children}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
    
    <section className="relative overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img src={networkImage} alt="Academic collaboration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="net-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-primary-foreground" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#net-grid)" />
          </svg>
        </div>
        <div className="container-section relative py-24 md:py-32 text-primary-foreground">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
         Privacy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
         Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl">
            This Privacy Policy explains how AfrikaScholar collects, uses, and protects your personal and research-related information when using our platform.
            </p>
            <p className="text-sm text-primary-foreground/60 italic mb-8">
               Last Updated: {lastUpdated}
            </p>
          
          </div>
        </div>
      </section>
      {/* Body */}
      <div className="container-section" style={{ padding: "2.5rem var(--container-padding, 1.5rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "2.5rem", maxWidth: 1100, margin: "0 auto" }} className="privacy-layout">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div style={{ position: "sticky", top: 88, background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)", borderRadius: 14, padding: "1.25rem", overflow: "hidden" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "0.875rem", paddingLeft: "0.5rem" }}>
                Contents
              </p>
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                {sections.map((s, i) => (
                  <a key={s.id} href={`#${s.id}`} style={{
                    display: "flex", alignItems: "center", gap: "0.625rem",
                    padding: "0.45rem 0.625rem", borderRadius: 8, fontSize: "0.8rem",
                    color: "var(--muted-foreground)", textDecoration: "none", transition: "all 0.15s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(234,88,12,0.06)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "none"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)"; }}
                  >
                    <s.icon size={13} style={{ flexShrink: 0 }} />
                    <span>{s.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* 1 — Introduction */}
            <SectionCard>
              <SectionHeading id="introduction" num={1} icon={Shield} title="Introduction" />
              <Body>
                AfrikaScholar is a research intelligence and academic publishing platform designed to support researchers, academics, institutions, and policy professionals.
              </Body>
              <Body>
                This Privacy Policy describes how we collect, process, and safeguard information when users interact with the AfrikaScholar platform — including its AI-powered tools, publishing workflows, community features, and research intelligence systems.
              </Body>
              <Body>
                By using AfrikaScholar, you agree to the collection and use of information in accordance with this policy.
              </Body>
            </SectionCard>

            {/* 2 — Information We Collect */}
            <SectionCard>
              <SectionHeading id="information" num={2} icon={Database} title="Information We Collect" />
              <Body>AfrikaScholar collects several categories of information to provide platform services.</Body>

              <SubHeading>Account Information</SubHeading>
              <Body>When creating an account, users may provide:</Body>
              <BulletList items={["Name", "Email address", "Institution or organization", "Professional role", "Account credentials"]} />
              <Body>This information is used to manage platform access.</Body>

              <SubHeading>Research Content</SubHeading>
              <Body>Users may create or upload research-related materials including:</Body>
              <BulletList items={["Research papers", "Datasets", "Research instruments", "Survey responses", "Presentation slides", "Research posts within the community"]} />
              <Body>This content remains owned by the user but may be stored on platform infrastructure.</Body>

              <SubHeading>Platform Activity Data</SubHeading>
              <Body>AfrikaScholar collects platform usage data such as:</Body>
              <BulletList items={["Pages visited", "Tools used", "Research instruments generated", "Slides created", "Dataset analyses performed", "Community interactions (likes, posts, comments)"]} />
              <Body>This information helps improve platform functionality.</Body>

              <SubHeading>Messaging and Community Interactions</SubHeading>
              <Body>When users interact in the Research Community, we collect data related to:</Body>
              <BulletList items={["Direct messages", "Community posts", "Likes and comments", "Connection requests"]} />

              <SubHeading>AI Tool Inputs and Outputs</SubHeading>
              <Body>When users use AI tools such as research paper generation, slide generation, research instrument creation, or dataset analysis — the prompts, inputs, and generated outputs may be processed by AI systems. This information is used to generate responses and improve AI capabilities.</Body>
            </SectionCard>

            {/* 3 — How We Use */}
            <SectionCard>
              <SectionHeading id="how-we-use" num={3} icon={Eye} title="How We Use Your Information" />
              <Body>AfrikaScholar uses collected data to provide and improve the platform. Examples include:</Body>
              <BulletList items={[
                "Providing research tools and publishing infrastructure",
                "Generating AI-assisted research outputs",
                "Recommending journals and conferences",
                "Detecting research trends and gaps",
                "Facilitating collaboration within the community",
                "Maintaining platform security and stability",
              ]} />
              <div style={{ marginTop: "1rem", background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10, padding: "0.875rem 1rem", fontSize: "0.875rem", color: "var(--foreground)", fontWeight: 600 }}>
                ✅ We do not sell personal data to third parties.
              </div>
            </SectionCard>

            {/* 4 — Research Analytics */}
            <SectionCard>
              <SectionHeading id="research-analytics" num={4} icon={BarChart2} title="Research Intelligence Analytics" />
              <Body>AfrikaScholar may analyze research activity to generate insights within the Intelligence Hub. This may include:</Body>
              <BulletList items={["Research topics", "Keyword patterns", "Publishing activity", "Research trends"]} />
              <Body>These analytics are designed to help researchers identify journal opportunities, conference deadlines, and research gaps. Analytics results are generated algorithmically.</Body>
            </SectionCard>

            {/* 5 — Cookies */}
            <SectionCard>
              <SectionHeading id="cookies" num={5} icon={Cookie} title="Cookies & Tracking Technologies" />
              <Body>AfrikaScholar may use cookies or similar technologies to:</Body>
              <BulletList items={["Maintain login sessions", "Improve performance", "Analyze user behavior", "Enhance user experience"]} />
              <Body>Users may control cookie preferences through their browser settings.</Body>
            </SectionCard>

            {/* 6 — Data Protection */}
            <SectionCard>
              <SectionHeading id="data-protection" num={6} icon={Lock} title="Data Protection" />
              <Body>AfrikaScholar implements reasonable security measures to protect user information. These include:</Body>
              <BulletList items={["Encrypted data transmission", "Secure authentication systems", "Restricted access to platform databases"]} />
              <div style={{ marginTop: "1rem", background: "rgba(234,88,12,0.05)", border: "1px solid rgba(234,88,12,0.15)", borderRadius: 10, padding: "0.875rem 1rem", fontSize: "0.82rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>
                <strong style={{ color: "var(--foreground)" }}>Note:</strong> No system can guarantee complete security. Users should protect their account credentials and avoid sharing login information.
              </div>
            </SectionCard>

            {/* 7 — Your Rights */}
            <SectionCard>
              <SectionHeading id="your-rights" num={7} icon={UserCheck} title="Your Data Rights" />
              <Body>Users may request to:</Body>
              <BulletList items={["View their stored data", "Edit profile information", "Delete account data", "Export personal research materials"]} />
              <Body>Account deletion may remove access to stored research tools and outputs. To exercise any of these rights, contact us at support@afrikascholar.org.</Body>
            </SectionCard>

            {/* 8 — Community */}
            <SectionCard>
              <SectionHeading id="community" num={8} icon={Users} title="Public & Shared Content" />
              <Body>Certain content may be visible to other users when shared publicly. Examples include:</Body>
              <BulletList items={["Community posts", "Published research instruments", "Shared presentation slides", "Research updates"]} />
              <Body>Users control whether content is public or private through platform privacy settings.</Body>
            </SectionCard>

            {/* 9 — Third Party */}
            <SectionCard>
              <SectionHeading id="third-party" num={9} icon={Globe} title="Third-Party Integrations" />
              <Body>AfrikaScholar may integrate with external services to enable platform functionality. Examples may include:</Body>
              <BulletList items={["Cloud hosting providers", "Analytics services", "Authentication systems"]} />
              <Body>These services are subject to their own privacy policies. AfrikaScholar does not control third-party data handling practices.</Body>
            </SectionCard>

            {/* 10 — Children */}
            <SectionCard>
              <SectionHeading id="children" num={10} icon={AlertCircle} title="Age Restrictions" />
              <Body>AfrikaScholar is not intended for individuals under the age of 18. If we become aware that personal information from minors has been collected without parental consent, we will take steps to remove such data promptly.</Body>
            </SectionCard>

            {/* 11 — Retention */}
            <SectionCard>
              <SectionHeading id="retention" num={11} icon={Trash2} title="How Long We Keep Your Data" />
              <Body>User data is retained only as long as necessary to:</Body>
              <BulletList items={["Provide platform services", "Maintain research content", "Comply with legal obligations"]} />
              <Body>Users may request deletion of personal data at any time by contacting our support team.</Body>
            </SectionCard>

            {/* 12 — Changes */}
            <SectionCard>
              <SectionHeading id="changes" num={12} icon={Bell} title="Updates to This Privacy Policy" />
              <Body>AfrikaScholar may update this Privacy Policy periodically to reflect changes in platform features, legal requirements, or data practices.</Body>
              <Body>Users will be notified of significant changes via email or platform notification. Continued use of the platform after such updates constitutes acceptance of the revised policy.</Body>
            </SectionCard>

            {/* 13 — Contact */}
            <SectionCard>
              <SectionHeading id="contact" num={13} icon={Mail} title="Contact Us" />
              <Body>For questions, concerns, or data requests related to this Privacy Policy, please contact our team:</Body>
              <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <a href="mailto:support@afrikascholar.org" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
                  <Mail size={15} /> support@afrikascholar.org
                </a>
              </div>
              <Body>We aim to respond to all privacy-related inquiries within 5 business days.</Body>
            </SectionCard>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .privacy-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  );
}
