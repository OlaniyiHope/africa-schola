import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { LayoutGrid, List, FileText, Eye, BookOpen, Quote, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const journals = [
  {
    id: 1,
    title: "Climate Change Adaptation Strategies in West Africa",
    authors: "A. Mensah, B. Diallo",
    tags: ["Environmental Science", "Original Research"],
    year: "2026",
    journal: "African Journal of Applied Mathematics",
    institution: "University of Ghana, Université Cheikh Anta Diop",
    slug: "climate-change-adaptation-west-africa",
  },
  {
    id: 2,
    title: "Digital Transformation of African Universities",
    authors: "C. Ndlovu, D. Kamau",
    tags: ["Education Technology", "Review Article"],
    year: "2026",
    journal: "African Studies in Digital Innovation",
    institution: "University of Cape Town, University of Nairobi",
    slug: "digital-transformation-african-universities",
  },
  {
    id: 3,
    title: "Public Health Interventions in East Africa: A Systematic Review",
    authors: "D. Kamau, F. Mwangi, G. Ochieng",
    tags: ["Public Health", "Systematic Review"],
    year: "2025",
    journal: "Journal of African Public Health Research",
    institution: "Kenyatta University, Makerere University",
    slug: "public-health-interventions-east-africa",
  },
  {
    id: 4,
    title: "Fintech Adoption and Financial Inclusion in Nigerian Markets",
    authors: "E. Adesanya, H. Balogun",
    tags: ["Finance & Economics", "Original Research"],
    year: "2025",
    journal: "African Journal of Applied Mathematics",
    institution: "University of Lagos, Covenant University",
    slug: "fintech-adoption-financial-inclusion-nigeria",
  },
  {
    id: 5,
    title: "Artificial Intelligence in African Healthcare Systems",
    authors: "I. Osei, J. Asante",
    tags: ["Health Informatics", "Original Research"],
    year: "2026",
    journal: "Journal of Digital Health in Africa",
    institution: "University of Ghana, Kwame Nkrumah University",
    slug: "ai-african-healthcare-systems",
  },
  {
    id: 6,
    title: "Sustainable Agriculture and Food Security in Sub-Saharan Africa",
    authors: "K. Mwamba, L. Banda",
    tags: ["Agricultural Science", "Policy Review"],
    year: "2025",
    journal: "African Journal of Agricultural Research",
    institution: "University of Zambia, University of Zimbabwe",
    slug: "sustainable-agriculture-food-security-africa",
  },
];

const allTags = ["All", "Environmental Science", "Education Technology", "Public Health", "Finance & Economics", "Health Informatics", "Agricultural Science"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ExistingJournals() {
  const [view, setView]                   = useState<"cards" | "list">("cards");
  const [search, setSearch]               = useState("");
  const [activeTag, setActiveTag]         = useState("All");

  const filtered = journals.filter(j => {
    const matchSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.authors.toLowerCase().includes(search.toLowerCase()) ||
      j.journal.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "All" || j.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <Layout>
      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--background)", padding: "2.5rem 0 0" }}>
        <div className="container-section">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingBottom: "1.5rem" }}>
            <div>
              <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.4rem" }}>
                Existing Journals &amp; Publications
              </h1>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", margin: 0 }}>
                Browse published articles on the Afrika Scholar platform.
              </p>
            </div>

            {/* Cards / List toggle */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <button
                onClick={() => setView("cards")}
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                  border: "1.5px solid var(--border)",
                  background: view === "cards" ? "var(--primary)" : "var(--background)",
                  color: view === "cards" ? "var(--primary-foreground)" : "var(--foreground)",
                  transition: "all 0.15s",
                }}
              >
                <LayoutGrid size={15} /> Cards
              </button>
              <button
                onClick={() => setView("list")}
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                  border: "1.5px solid var(--border)",
                  background: view === "list" ? "var(--primary)" : "var(--background)",
                  color: view === "list" ? "var(--primary-foreground)" : "var(--foreground)",
                  transition: "all 0.15s",
                }}
              >
                <List size={15} /> List
              </button>
            </div>
          </div>

          {/* Search + tag filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", paddingBottom: "1rem" }}>
            <div style={{ position: "relative", minWidth: 220, flex: "1 1 220px", maxWidth: 360 }}>
              <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", pointerEvents: "none" }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search journals, authors..."
                style={{
                  width: "100%", paddingLeft: "2.25rem", paddingRight: "0.875rem", paddingTop: "0.55rem", paddingBottom: "0.55rem",
                  borderRadius: 8, border: "1.5px solid var(--border)", background: "var(--background)",
                  fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "inherit", outline: "none", boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  style={{
                    padding: "0.35rem 0.85rem", borderRadius: 999, fontSize: "0.78rem", fontWeight: 600, cursor: "pointer",
                    border: "1.5px solid",
                    borderColor: activeTag === tag ? "var(--accent)" : "var(--border)",
                    background: activeTag === tag ? "var(--accent)" : "var(--background)",
                    color: activeTag === tag ? "var(--accent-foreground, #fff)" : "var(--muted-foreground)",
                    transition: "all 0.15s",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <div className="container-section" style={{ padding: "2rem var(--container-padding, 1rem)" }}>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "5rem 1rem", color: "var(--muted-foreground)" }}>
            <Search size={40} style={{ margin: "0 auto 1rem", opacity: 0.2 }} />
            <p style={{ fontWeight: 600 }}>No journals found</p>
            <button onClick={() => { setSearch(""); setActiveTag("All"); }} style={{ marginTop: "0.75rem", color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}>
              Clear filters
            </button>
          </div>
        )}

        {/* CARDS view */}
        {view === "cards" && filtered.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))", gap: "1.25rem" }}>
            {filtered.map(j => (
              <JournalCard key={j.id} journal={j} />
            ))}
          </div>
        )}

        {/* LIST view */}
        {view === "list" && filtered.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {filtered.map(j => (
              <JournalListRow key={j.id} journal={j} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

// ─── Journal Card ─────────────────────────────────────────────────────────────

function JournalCard({ journal }: { journal: typeof journals[0] }) {
  return (
    <div style={{
      background: "#fff",
      border: "1.5px solid #d1d5db",
      borderRadius: 12,
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.875rem",
      transition: "box-shadow 0.2s",
    }}
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 18px rgba(0,0,0,0.08)"}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "none"}
    >
      {/* Icon + title row */}
      <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#f3f4f6", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <BookOpen size={20} style={{ color: "#6b7280" }} />
        </div>
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 0.2rem", lineHeight: 1.4 }}>
            {journal.title}
          </h3>
          <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0 }}>{journal.authors}</p>
        </div>
      </div>

      {/* Tags + year */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center" }}>
        {journal.tags.map(tag => (
          <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 6, background: "#f9fafb", color: "#374151", border: "1px solid #d1d5db" }}>
            {tag}
          </span>
        ))}
        <span style={{ fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 6, background: "#f9fafb", color: "#374151", border: "1px solid #d1d5db" }}>
          {journal.year}
        </span>
      </div>

      {/* Journal + institution */}
      <div style={{ fontSize: "0.83rem", color: "#111827", lineHeight: 1.7 }}>
        <div><strong>Journal:</strong> <span style={{ color: "#4b5563", fontWeight: 400 }}>{journal.journal}</span></div>
        <div><strong>Institution:</strong> <span style={{ color: "#4b5563", fontWeight: 400 }}>{journal.institution}</span></div>
      </div>

      {/* Action buttons */}
      <ActionButtons slug={journal.slug} />
    </div>
  );
}

// ─── Journal List Row ─────────────────────────────────────────────────────────

function JournalListRow({ journal }: { journal: typeof journals[0] }) {
  return (
    <div style={{
      background: "var(--card, #fff)",
      border: "1px solid var(--border, #e5e7eb)",
      borderRadius: 12,
      padding: "1.25rem 1.5rem",
      display: "flex",
      gap: "1rem",
      alignItems: "flex-start",
      transition: "box-shadow 0.2s",
    }}
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "none"}
    >
      <div style={{ width: 40, height: 40, borderRadius: 9, background: "var(--secondary, #f4f4f5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <BookOpen size={18} style={{ color: "var(--muted-foreground)" }} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 0.2rem" }}>{journal.title}</h3>
        <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", margin: "0 0 0.5rem" }}>{journal.authors}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.5rem" }}>
          {journal.tags.map(tag => (
            <span key={tag} style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.15rem 0.55rem", borderRadius: 999, background: "var(--secondary)", border: "1px solid var(--border)", color: "var(--foreground)" }}>{tag}</span>
          ))}
          <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.15rem 0.55rem", borderRadius: 999, background: "var(--secondary)", border: "1px solid var(--border)", color: "var(--foreground)" }}>{journal.year}</span>
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>
          <strong>Journal:</strong> <span style={{ color: "var(--muted-foreground)" }}>{journal.journal}</span>
          {"  "}·{"  "}
          <strong>Institution:</strong> <span style={{ color: "var(--muted-foreground)" }}>{journal.institution}</span>
        </div>
      </div>

      <div style={{ flexShrink: 0 }}>
        <ActionButtons slug={journal.slug} compact />
      </div>
    </div>
  );
}

// ─── Action Buttons ───────────────────────────────────────────────────────────

function ActionButtons({ slug, compact }: { slug: string; compact?: boolean }) {
  const btnBase: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: compact ? "0.38rem 0.7rem" : "0.42rem 0.9rem",
    borderRadius: 7, fontSize: "0.8rem", fontWeight: 500, cursor: "pointer",
    border: "1.5px solid #d1d5db",
    background: "#fff",
    color: "#374151",
    fontFamily: "inherit", textDecoration: "none",
    transition: "border-color 0.15s, color 0.15s",
    whiteSpace: "nowrap",
  };

  const onEnter = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = "var(--accent, #ea580c)";
    el.style.color = "var(--accent, #ea580c)";
  };
  const onLeave = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = "#d1d5db";
    el.style.color = "#374151";
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
      <a href={`/publications/${slug}.pdf`} style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <FileText size={13} /> PDF
      </a>
      <button style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Eye size={13} /> Abstract
      </button>
      <Link to={`/publications/${slug}`} style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <BookOpen size={13} /> View Article
      </Link>
      <button style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <Quote size={13} /> Cite
      </button>
    </div>
  );
}
