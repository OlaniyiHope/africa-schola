// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Layout } from "@/components/layout";
// import { LayoutGrid, List, FileText, Eye, BookOpen, Quote, Search, Filter } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// // ─── Mock Data ────────────────────────────────────────────────────────────────

// const journals = [
//   {
//     id: 1,
//     title: "Climate Change Adaptation Strategies in West Africa",
//     authors: "A. Mensah, B. Diallo",
//     tags: ["Environmental Science", "Original Research"],
//     year: "2026",
//     journal: "African Journal of Applied Mathematics",
//     institution: "University of Ghana, Université Cheikh Anta Diop",
//     slug: "climate-change-adaptation-west-africa",
//   },
//   {
//     id: 2,
//     title: "Digital Transformation of African Universities",
//     authors: "C. Ndlovu, D. Kamau",
//     tags: ["Education Technology", "Review Article"],
//     year: "2026",
//     journal: "African Studies in Digital Innovation",
//     institution: "University of Cape Town, University of Nairobi",
//     slug: "digital-transformation-african-universities",
//   },
//   {
//     id: 3,
//     title: "Public Health Interventions in East Africa: A Systematic Review",
//     authors: "D. Kamau, F. Mwangi, G. Ochieng",
//     tags: ["Public Health", "Systematic Review"],
//     year: "2025",
//     journal: "Journal of African Public Health Research",
//     institution: "Kenyatta University, Makerere University",
//     slug: "public-health-interventions-east-africa",
//   },
//   {
//     id: 4,
//     title: "Fintech Adoption and Financial Inclusion in Nigerian Markets",
//     authors: "E. Adesanya, H. Balogun",
//     tags: ["Finance & Economics", "Original Research"],
//     year: "2025",
//     journal: "African Journal of Applied Mathematics",
//     institution: "University of Lagos, Covenant University",
//     slug: "fintech-adoption-financial-inclusion-nigeria",
//   },
//   {
//     id: 5,
//     title: "Artificial Intelligence in African Healthcare Systems",
//     authors: "I. Osei, J. Asante",
//     tags: ["Health Informatics", "Original Research"],
//     year: "2026",
//     journal: "Journal of Digital Health in Africa",
//     institution: "University of Ghana, Kwame Nkrumah University",
//     slug: "ai-african-healthcare-systems",
//   },
//   {
//     id: 6,
//     title: "Sustainable Agriculture and Food Security in Sub-Saharan Africa",
//     authors: "K. Mwamba, L. Banda",
//     tags: ["Agricultural Science", "Policy Review"],
//     year: "2025",
//     journal: "African Journal of Agricultural Research",
//     institution: "University of Zambia, University of Zimbabwe",
//     slug: "sustainable-agriculture-food-security-africa",
//   },
// ];

// const allTags = ["All", "Environmental Science", "Education Technology", "Public Health", "Finance & Economics", "Health Informatics", "Agricultural Science"];

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function ExistingJournals() {
//   const [view, setView]                   = useState<"cards" | "list">("cards");
//   const [search, setSearch]               = useState("");
//   const [activeTag, setActiveTag]         = useState("All");

//   const filtered = journals.filter(j => {
//     const matchSearch =
//       j.title.toLowerCase().includes(search.toLowerCase()) ||
//       j.authors.toLowerCase().includes(search.toLowerCase()) ||
//       j.journal.toLowerCase().includes(search.toLowerCase());
//     const matchTag = activeTag === "All" || j.tags.includes(activeTag);
//     return matchSearch && matchTag;
//   });

//   return (
//     <Layout>
//       {/* ── Page Header ──────────────────────────────────────────────────── */}
//       <div style={{ borderBottom: "1px solid var(--border)", background: "var(--background)", padding: "2.5rem 0 0" }}>
//         <div className="container-section">
//           <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingBottom: "1.5rem" }}>
//             <div>
//               <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.4rem" }}>
//                 Existing Journals &amp; Publications
//               </h1>
//               <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", margin: 0 }}>
//                 Browse published articles on the Afrika Scholar platform.
//               </p>
//             </div>

//             {/* Cards / List toggle */}
//             <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
//               <button
//                 onClick={() => setView("cards")}
//                 style={{
//                   display: "flex", alignItems: "center", gap: "0.4rem",
//                   padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
//                   border: "1.5px solid var(--border)",
//                   background: view === "cards" ? "var(--primary)" : "var(--background)",
//                   color: view === "cards" ? "var(--primary-foreground)" : "var(--foreground)",
//                   transition: "all 0.15s",
//                 }}
//               >
//                 <LayoutGrid size={15} /> Cards
//               </button>
//               <button
//                 onClick={() => setView("list")}
//                 style={{
//                   display: "flex", alignItems: "center", gap: "0.4rem",
//                   padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
//                   border: "1.5px solid var(--border)",
//                   background: view === "list" ? "var(--primary)" : "var(--background)",
//                   color: view === "list" ? "var(--primary-foreground)" : "var(--foreground)",
//                   transition: "all 0.15s",
//                 }}
//               >
//                 <List size={15} /> List
//               </button>
//             </div>
//           </div>

//           {/* Search + tag filters */}
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", paddingBottom: "1rem" }}>
//             <div style={{ position: "relative", minWidth: 220, flex: "1 1 220px", maxWidth: 360 }}>
//               <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", pointerEvents: "none" }} />
//               <input
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//                 placeholder="Search journals, authors..."
//                 style={{
//                   width: "100%", paddingLeft: "2.25rem", paddingRight: "0.875rem", paddingTop: "0.55rem", paddingBottom: "0.55rem",
//                   borderRadius: 8, border: "1.5px solid var(--border)", background: "var(--background)",
//                   fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "inherit", outline: "none", boxSizing: "border-box",
//                 }}
//               />
//             </div>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
//               {allTags.map(tag => (
//                 <button
//                   key={tag}
//                   onClick={() => setActiveTag(tag)}
//                   style={{
//                     padding: "0.35rem 0.85rem", borderRadius: 999, fontSize: "0.78rem", fontWeight: 600, cursor: "pointer",
//                     border: "1.5px solid",
//                     borderColor: activeTag === tag ? "var(--accent)" : "var(--border)",
//                     background: activeTag === tag ? "var(--accent)" : "var(--background)",
//                     color: activeTag === tag ? "var(--accent-foreground, #fff)" : "var(--muted-foreground)",
//                     transition: "all 0.15s",
//                   }}
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Results ──────────────────────────────────────────────────────── */}
//       <div className="container-section" style={{ padding: "2rem var(--container-padding, 1rem)" }}>

//         {filtered.length === 0 && (
//           <div style={{ textAlign: "center", padding: "5rem 1rem", color: "var(--muted-foreground)" }}>
//             <Search size={40} style={{ margin: "0 auto 1rem", opacity: 0.2 }} />
//             <p style={{ fontWeight: 600 }}>No journals found</p>
//             <button onClick={() => { setSearch(""); setActiveTag("All"); }} style={{ marginTop: "0.75rem", color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}>
//               Clear filters
//             </button>
//           </div>
//         )}

//         {/* CARDS view */}
//         {view === "cards" && filtered.length > 0 && (
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))", gap: "1.25rem" }}>
//             {filtered.map(j => (
//               <JournalCard key={j.id} journal={j} />
//             ))}
//           </div>
//         )}

//         {/* LIST view */}
//         {view === "list" && filtered.length > 0 && (
//           <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//             {filtered.map(j => (
//               <JournalListRow key={j.id} journal={j} />
//             ))}
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// // ─── Journal Card ─────────────────────────────────────────────────────────────

// function JournalCard({ journal }: { journal: typeof journals[0] }) {
//   return (
//     <div style={{
//       background: "#fff",
//       border: "1.5px solid #d1d5db",
//       borderRadius: 12,
//       padding: "1.5rem",
//       display: "flex",
//       flexDirection: "column",
//       gap: "0.875rem",
//       transition: "box-shadow 0.2s",
//     }}
//       onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 18px rgba(0,0,0,0.08)"}
//       onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "none"}
//     >
//       {/* Icon + title row */}
//       <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
//         <div style={{ width: 44, height: 44, borderRadius: 10, background: "#f3f4f6", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//           <BookOpen size={20} style={{ color: "#6b7280" }} />
//         </div>
//         <div>
//           <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 0.2rem", lineHeight: 1.4 }}>
//             {journal.title}
//           </h3>
//           <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0 }}>{journal.authors}</p>
//         </div>
//       </div>

//       {/* Tags + year */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center" }}>
//         {journal.tags.map(tag => (
//           <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 6, background: "#f9fafb", color: "#374151", border: "1px solid #d1d5db" }}>
//             {tag}
//           </span>
//         ))}
//         <span style={{ fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 6, background: "#f9fafb", color: "#374151", border: "1px solid #d1d5db" }}>
//           {journal.year}
//         </span>
//       </div>

//       {/* Journal + institution */}
//       <div style={{ fontSize: "0.83rem", color: "#111827", lineHeight: 1.7 }}>
//         <div><strong>Journal:</strong> <span style={{ color: "#4b5563", fontWeight: 400 }}>{journal.journal}</span></div>
//         <div><strong>Institution:</strong> <span style={{ color: "#4b5563", fontWeight: 400 }}>{journal.institution}</span></div>
//       </div>

//       {/* Action buttons */}
//       <ActionButtons slug={journal.slug} />
//     </div>
//   );
// }

// // ─── Journal List Row ─────────────────────────────────────────────────────────

// function JournalListRow({ journal }: { journal: typeof journals[0] }) {
//   return (
//     <div style={{
//       background: "var(--card, #fff)",
//       border: "1px solid var(--border, #e5e7eb)",
//       borderRadius: 12,
//       padding: "1.25rem 1.5rem",
//       display: "flex",
//       gap: "1rem",
//       alignItems: "flex-start",
//       transition: "box-shadow 0.2s",
//     }}
//       onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"}
//       onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "none"}
//     >
//       <div style={{ width: 40, height: 40, borderRadius: 9, background: "var(--secondary, #f4f4f5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//         <BookOpen size={18} style={{ color: "var(--muted-foreground)" }} />
//       </div>

//       <div style={{ flex: 1, minWidth: 0 }}>
//         <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 0.2rem" }}>{journal.title}</h3>
//         <p style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", margin: "0 0 0.5rem" }}>{journal.authors}</p>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.5rem" }}>
//           {journal.tags.map(tag => (
//             <span key={tag} style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.15rem 0.55rem", borderRadius: 999, background: "var(--secondary)", border: "1px solid var(--border)", color: "var(--foreground)" }}>{tag}</span>
//           ))}
//           <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.15rem 0.55rem", borderRadius: 999, background: "var(--secondary)", border: "1px solid var(--border)", color: "var(--foreground)" }}>{journal.year}</span>
//         </div>
//         <div style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>
//           <strong>Journal:</strong> <span style={{ color: "var(--muted-foreground)" }}>{journal.journal}</span>
//           {"  "}·{"  "}
//           <strong>Institution:</strong> <span style={{ color: "var(--muted-foreground)" }}>{journal.institution}</span>
//         </div>
//       </div>

//       <div style={{ flexShrink: 0 }}>
//         <ActionButtons slug={journal.slug} compact />
//       </div>
//     </div>
//   );
// }

// // ─── Action Buttons ───────────────────────────────────────────────────────────

// function ActionButtons({ slug, compact }: { slug: string; compact?: boolean }) {
//   const btnBase: React.CSSProperties = {
//     display: "inline-flex", alignItems: "center", gap: "0.4rem",
//     padding: compact ? "0.38rem 0.7rem" : "0.42rem 0.9rem",
//     borderRadius: 7, fontSize: "0.8rem", fontWeight: 500, cursor: "pointer",
//     border: "1.5px solid #d1d5db",
//     background: "#fff",
//     color: "#374151",
//     fontFamily: "inherit", textDecoration: "none",
//     transition: "border-color 0.15s, color 0.15s",
//     whiteSpace: "nowrap",
//   };

//   const onEnter = (e: React.MouseEvent) => {
//     const el = e.currentTarget as HTMLElement;
//     el.style.borderColor = "var(--accent, #ea580c)";
//     el.style.color = "var(--accent, #ea580c)";
//   };
//   const onLeave = (e: React.MouseEvent) => {
//     const el = e.currentTarget as HTMLElement;
//     el.style.borderColor = "#d1d5db";
//     el.style.color = "#374151";
//   };

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
//       <a href={`/publications/${slug}.pdf`} style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
//         <FileText size={13} /> PDF
//       </a>
//       <button style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
//         <Eye size={13} /> Abstract
//       </button>
//       <Link to={`/publications/${slug}`} style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
//         <BookOpen size={13} /> View Article
//       </Link>
//       <button style={btnBase} onMouseEnter={onEnter} onMouseLeave={onLeave}>
//         <Quote size={13} /> Cite
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import {
  LayoutGrid, List, FileText, Eye, BookOpen, Quote,
  Search, X, Download, Building2, Calendar, Tag,
} from "lucide-react";

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
    abstract: "This study investigates the multifaceted approaches to climate change adaptation across West African nations. We analyze policy frameworks, community-based strategies, and institutional responses across five countries. Our findings reveal that locally-driven adaptation methods significantly outperform top-down approaches, particularly in rural agricultural communities. The research draws on mixed-methods data from 1,200 households and 45 institutional interviews conducted between 2024 and 2025. We propose a new framework for integrating indigenous knowledge systems with modern climate science to enhance resilience in the region.",
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
    abstract: "This review examines the state of digital transformation across 120 African universities, mapping technological adoption against institutional outcomes. We identify key enablers and barriers to digital infrastructure deployment, with particular focus on learning management systems, research data management, and administrative digitization. Our analysis reveals a significant digital divide both between and within institutions, strongly correlated with funding structures and leadership commitment.",
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
    abstract: "This systematic review synthesises evidence from 87 peer-reviewed studies on community health interventions across East African nations. We evaluate intervention effectiveness across malaria prevention, maternal health, and nutritional programmes. Results indicate that community health worker programmes yield the highest return on investment when supported by robust supply chains and digital reporting tools. Policy recommendations are provided for scaling evidence-based interventions across the region.",
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
    abstract: "This paper examines the drivers and barriers of fintech adoption among unbanked and underbanked populations in Nigeria. Drawing on survey data from 3,400 respondents across six geopolitical zones, we model adoption behaviour using a modified Technology Acceptance Model. Key findings suggest that mobile literacy, trust in digital platforms, and agent network density are the strongest predictors of sustained fintech use. We discuss implications for regulatory frameworks and product design.",
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
    abstract: "This study evaluates the deployment of artificial intelligence tools across 34 healthcare facilities in Ghana, examining diagnostic accuracy, workflow integration, and clinician acceptance. AI-assisted diagnostic systems demonstrated a 23% improvement in early disease detection rates compared to standard care. Barriers to adoption included limited digital infrastructure, data privacy concerns, and insufficient training. We present a roadmap for responsible AI integration tailored to low-resource health systems.",
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
    abstract: "This policy review analyses sustainable agricultural practices and their impact on food security across Sub-Saharan Africa. We evaluate evidence from 15 countries, focusing on conservation farming, agroforestry, and climate-smart techniques. Results show that integrated soil fertility management can increase yields by up to 40% in smallholder contexts. We identify critical policy gaps and propose a continental agricultural resilience framework aligned with the Malabo Declaration targets.",
  },
];

type Journal = typeof journals[0];

const allTags = ["All", "Environmental Science", "Education Technology", "Public Health", "Finance & Economics", "Health Informatics", "Agricultural Science"];

// ─── Abstract Modal ───────────────────────────────────────────────────────────

function AbstractModal({ journal, onClose }: { journal: Journal; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)",
          zIndex: 100, backdropFilter: "blur(3px)",
          animation: "fadeIn 0.15s ease",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(720px, calc(100vw - 2rem))",
        maxHeight: "calc(100vh - 4rem)",
        background: "#fff", borderRadius: 16,
        boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
        zIndex: 101, display: "flex", flexDirection: "column",
        animation: "slideUp 0.2s ease",
        overflow: "hidden",
      }}>

        {/* Modal header */}
        <div style={{ padding: "1.5rem 1.75rem 1.25rem", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111827", fontFamily: "Georgia, serif", margin: 0, lineHeight: 1.4, flex: 1 }}>
              {journal.title}
            </h2>
            <button
              onClick={onClose}
              style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, color: "#6b7280", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f3f4f6"; e.currentTarget.style.borderColor = "#d1d5db"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
            >
              <X size={15} />
            </button>
          </div>

          {/* Authors · Journal · Year */}
          <p style={{ fontSize: "0.83rem", color: "#6b7280", margin: "0.5rem 0 0.875rem" }}>
            {journal.authors}
            <span style={{ margin: "0 0.35rem", color: "#d1d5db" }}>·</span>
            {journal.journal}
            <span style={{ margin: "0 0.35rem", color: "#d1d5db" }}>·</span>
            {journal.year}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {journal.tags.map(tag => (
              <span key={tag} style={{ fontSize: "0.72rem", fontWeight: 600, padding: "0.2rem 0.65rem", borderRadius: 999, background: "#f3f4f6", border: "1px solid #e5e7eb", color: "#374151" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal body — scrollable */}
        <div style={{ padding: "1.5rem 1.75rem", overflowY: "auto", flex: 1 }}>

          {/* Institution */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "1.25rem" }}>
            <Building2 size={15} style={{ color: "#9ca3af", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#9ca3af", margin: "0 0 0.2rem" }}>Institution</p>
              <p style={{ fontSize: "0.875rem", color: "#374151", margin: 0, fontWeight: 500 }}>{journal.institution}</p>
            </div>
          </div>

          {/* Abstract */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#9ca3af", margin: "0 0 0.625rem" }}>Abstract</p>
            <p style={{ fontSize: "0.9rem", color: "#1f2937", lineHeight: 1.75, margin: 0 }}>
              {journal.abstract}
            </p>
          </div>
        </div>

        {/* Modal footer */}
        <div style={{ padding: "1rem 1.75rem", borderTop: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap", flexShrink: 0, background: "#fafafa" }}>
          <a
            href={`/publications/${journal.slug}.pdf`}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.125rem", borderRadius: 8, background: "#381b92", color: "#fff", fontSize: "0.83rem", fontWeight: 700, textDecoration: "none", border: "none", cursor: "pointer", transition: "opacity 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <Download size={14} /> Download PDF
          </a>
          <Link
            to={`/publications/${journal.slug}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.125rem", borderRadius: 8, background: "#fff", color: "#374151", fontSize: "0.83rem", fontWeight: 600, textDecoration: "none", border: "1.5px solid #e5e7eb", cursor: "pointer", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#381b92")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
          >
            <BookOpen size={14} /> View Full Article
          </Link>
          <button
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.6rem 1.125rem", borderRadius: 8, background: "#fff", color: "#374151", fontSize: "0.83rem", fontWeight: 600, border: "1.5px solid #e5e7eb", cursor: "pointer", transition: "border-color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#381b92")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
          >
            <Quote size={14} /> Cite
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%, calc(-50% + 16px)); } to { opacity: 1; transform: translate(-50%, -50%); } }
      `}</style>
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ExistingJournals() {
  const [view,        setView]        = useState<"cards" | "list">("cards");
  const [search,      setSearch]      = useState("");
  const [activeTag,   setActiveTag]   = useState("All");
  const [modalJournal, setModalJournal] = useState<Journal | null>(null);

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
      {/* Abstract modal */}
      {modalJournal && (
        <AbstractModal journal={modalJournal} onClose={() => setModalJournal(null)} />
      )}

      {/* ── Page Header ──────────────────────────────────────────────── */}
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
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {(["cards", "list"] as const).map(v => (
                <button key={v} onClick={() => setView(v)} style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", border: "1.5px solid var(--border)", background: view === v ? "var(--primary)" : "var(--background)", color: view === v ? "var(--primary-foreground)" : "var(--foreground)", transition: "all 0.15s" }}>
                  {v === "cards" ? <><LayoutGrid size={15} /> Cards</> : <><List size={15} /> List</>}
                </button>
              ))}
            </div>
          </div>

          {/* Search + filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", paddingBottom: "1rem" }}>
            <div style={{ position: "relative", minWidth: 220, flex: "1 1 220px", maxWidth: 360 }}>
              <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", pointerEvents: "none" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search journals, authors..."
                style={{ width: "100%", paddingLeft: "2.25rem", paddingRight: "0.875rem", paddingTop: "0.55rem", paddingBottom: "0.55rem", borderRadius: 8, border: "1.5px solid var(--border)", background: "var(--background)", fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
              />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {allTags.map(tag => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  style={{ padding: "0.35rem 0.85rem", borderRadius: 999, fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", border: "1.5px solid", borderColor: activeTag === tag ? "var(--accent)" : "var(--border)", background: activeTag === tag ? "var(--accent)" : "var(--background)", color: activeTag === tag ? "#fff" : "var(--muted-foreground)", transition: "all 0.15s" }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Results ──────────────────────────────────────────────────── */}
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

        {view === "cards" && filtered.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))", gap: "1.25rem" }}>
            {filtered.map(j => <JournalCard key={j.id} journal={j} onOpenModal={() => setModalJournal(j)} />)}
          </div>
        )}

        {view === "list" && filtered.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {filtered.map(j => <JournalListRow key={j.id} journal={j} onOpenModal={() => setModalJournal(j)} />)}
          </div>
        )}
      </div>
    </Layout>
  );
}

// ─── Journal Card ─────────────────────────────────────────────────────────────

function JournalCard({ journal, onOpenModal }: { journal: Journal; onOpenModal: () => void }) {
  return (
    <div
      style={{ background: "#fff", border: "1.5px solid #d1d5db", borderRadius: 12, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem", transition: "box-shadow 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.08)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#f3f4f6", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <BookOpen size={20} style={{ color: "#6b7280" }} />
        </div>
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", margin: "0 0 0.2rem", lineHeight: 1.4 }}>{journal.title}</h3>
          <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0 }}>{journal.authors}</p>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center" }}>
        {journal.tags.map(tag => (
          <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 6, background: "#f9fafb", color: "#374151", border: "1px solid #d1d5db" }}>{tag}</span>
        ))}
        <span style={{ fontSize: "0.75rem", fontWeight: 500, padding: "0.25rem 0.7rem", borderRadius: 6, background: "#f9fafb", color: "#374151", border: "1px solid #d1d5db" }}>{journal.year}</span>
      </div>

      <div style={{ fontSize: "0.83rem", color: "#111827", lineHeight: 1.7 }}>
        <div><strong>Journal:</strong> <span style={{ color: "#4b5563", fontWeight: 400 }}>{journal.journal}</span></div>
        <div><strong>Institution:</strong> <span style={{ color: "#4b5563", fontWeight: 400 }}>{journal.institution}</span></div>
      </div>

      <ActionButtons slug={journal.slug} onOpenModal={onOpenModal} />
    </div>
  );
}

// ─── Journal List Row ─────────────────────────────────────────────────────────

function JournalListRow({ journal, onOpenModal }: { journal: Journal; onOpenModal: () => void }) {
  return (
    <div
      style={{ background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)", borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start", transition: "box-shadow 0.2s" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
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
          {"  ·  "}
          <strong>Institution:</strong> <span style={{ color: "var(--muted-foreground)" }}>{journal.institution}</span>
        </div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <ActionButtons slug={journal.slug} onOpenModal={onOpenModal} compact />
      </div>
    </div>
  );
}

// ─── Action Buttons ───────────────────────────────────────────────────────────

function ActionButtons({ slug, compact, onOpenModal }: { slug: string; compact?: boolean; onOpenModal: () => void }) {
  const btn: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: compact ? "0.38rem 0.7rem" : "0.42rem 0.9rem",
    borderRadius: 7, fontSize: "0.8rem", fontWeight: 500, cursor: "pointer",
    border: "1.5px solid #d1d5db", background: "#fff", color: "#374151",
    fontFamily: "inherit", textDecoration: "none", transition: "border-color 0.15s, color 0.15s",
    whiteSpace: "nowrap",
  };

  const hover = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent, #ea580c)";
    (e.currentTarget as HTMLElement).style.color = "var(--accent, #ea580c)";
  };
  const unhover = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.borderColor = "#d1d5db";
    (e.currentTarget as HTMLElement).style.color = "#374151";
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.25rem" }}>
      <a href={`/publications/${slug}.pdf`} style={btn} onMouseEnter={hover} onMouseLeave={unhover}>
        <FileText size={13} /> PDF
      </a>
      {/* Abstract — opens modal */}
      <button style={btn} onMouseEnter={hover} onMouseLeave={unhover} onClick={onOpenModal}>
        <Eye size={13} /> Abstract
      </button>
      {/* View Article — also opens modal (same as in screenshot) */}
      <button style={btn} onMouseEnter={hover} onMouseLeave={unhover} onClick={onOpenModal}>
        <BookOpen size={13} /> View Article
      </button>
      <button style={btn} onMouseEnter={hover} onMouseLeave={unhover}>
        <Quote size={13} /> Cite
      </button>
    </div>
  );
}
