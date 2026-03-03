import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Calendar, Tag, ArrowRight, Search, BookOpen,
  ExternalLink, Clock, ChevronRight, Megaphone,
} from "lucide-react";
import { openCalls, isCallExpired, formatDeadline } from "@/data/open-calls-data";
import type { OpenCall } from "@/data/open-calls-data";

// ─── Filters ──────────────────────────────────────────────────────────────────

const statusFilters = ["All", "Open", "Closed"] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function CallsForPapers() {
  const navigate = useNavigate();
  const [search, setSearch]   = useState("");
  const [status, setStatus]   = useState<"All" | "Open" | "Closed">("All");

  const filtered = openCalls.filter(c => {
    const q = search.toLowerCase();
    const matchSearch =
      c.special_issue_title.toLowerCase().includes(q) ||
      c.journal_name.toLowerCase().includes(q) ||
      c.topic_tags.some(t => t.toLowerCase().includes(q)) ||
      c.description.toLowerCase().includes(q);
    const matchStatus =
      status === "All" ||
      (status === "Open"   && c.status === "open"   && !isCallExpired(c.deadline)) ||
      (status === "Closed" && (c.status === "closed" || isCallExpired(c.deadline)));
    return matchSearch && matchStatus;
  });

  const openCount   = openCalls.filter(c => c.status === "open" && !isCallExpired(c.deadline)).length;
  const closedCount = openCalls.filter(c => c.status === "closed" || isCallExpired(c.deadline)).length;

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
{/* ── HERO ──────────────────────────────────────────────────────────── */}
<section className="relative overflow-hidden min-h-[420px]">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-primary" />
  </div>
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="cfp-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-primary-foreground" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#cfp-dots)" />
    </svg>
  </div>

  <div className="container-section relative py-20 md:py-28 text-primary-foreground">
    <div className="flex items-start justify-between flex-wrap gap-8">
      {/* Left — text */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Megaphone size={16} className="text-accent" />
          <p className="text-sm uppercase tracking-wider text-accent font-semibold">
            Open Calls for Papers
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Call for Papers &amp; Special Issues
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-xl">
          Browse active special issue calls across Afrika Scholar journals. Each call is peer-reviewed, indexed, and open access.
        </p>
      </div>

      {/* Right — stats */}
      <div className="flex gap-4 flex-shrink-0 self-center">
        <div className="bg-white/10 border border-white/15 rounded-xl px-6 py-4 text-center">
          <div className="text-4xl font-extrabold text-accent leading-none">{openCount}</div>
          <div className="text-xs font-semibold text-primary-foreground/70 mt-1">Open Calls</div>
        </div>
        <div className="bg-white/10 border border-white/15 rounded-xl px-6 py-4 text-center">
          <div className="text-4xl font-extrabold text-primary-foreground/40 leading-none">{closedCount}</div>
          <div className="text-xs font-semibold text-primary-foreground/40 mt-1">Closed</div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ── Filters ──────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb", position: "sticky", top: 64, zIndex: 40 }}>
        <div className="container-section" style={{ padding: "1rem var(--container-padding, 1.5rem)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", alignItems: "center" }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "1 1 240px", maxWidth: 380 }}>
              <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", pointerEvents: "none" }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search calls, journals, topics..."
                style={{
                  width: "100%", paddingLeft: "2.25rem", paddingRight: "0.875rem",
                  paddingTop: "0.55rem", paddingBottom: "0.55rem",
                  borderRadius: 8, border: "1.5px solid #d1d5db", background: "#fff",
                  fontSize: "0.85rem", color: "#111827", fontFamily: "inherit",
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>
            {/* Status pills */}
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {statusFilters.map(f => (
                <button key={f} onClick={() => setStatus(f)}
                  style={{
                    padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.8rem", fontWeight: 600,
                    cursor: "pointer", border: "1.5px solid",
                    borderColor: status === f ? "var(--accent)" : "#d1d5db",
                    background: status === f ? "var(--accent)" : "#fff",
                    color: status === f ? "#fff" : "#374151",
                    transition: "all 0.15s",
                  }}>
                  {f}
                </button>
              ))}
            </div>
            <span style={{ fontSize: "0.8rem", color: "#9ca3af", marginLeft: "auto" }}>
              {filtered.length} call{filtered.length !== 1 ? "s" : ""} found
            </span>
          </div>
        </div>
      </div>

      {/* ── Cards ────────────────────────────────────────────────────────── */}
      <div className="container-section" style={{ padding: "2rem var(--container-padding, 1.5rem)" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
            <Search size={40} style={{ margin: "0 auto 1rem", color: "#d1d5db" }} />
            <p style={{ fontWeight: 700, color: "#374151" }}>No calls found</p>
            <button onClick={() => { setSearch(""); setStatus("All"); }}
              style={{ marginTop: "0.75rem", color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))", gap: "1.25rem" }}>
            {filtered.map(call => (
              <CallCard key={call.call_id} call={call} />
            ))}
          </div>
        )}
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid #e5e7eb", background: "#f9fafb", padding: "2.5rem 0" }}>
        <div className="container-section" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.95rem", color: "#6b7280", marginBottom: "1rem" }}>
            Want to submit a paper outside a special issue call?
          </p>
          <Button asChild variant="outline">
            <Link to="/publishing/submit">
              General Manuscript Submission <ArrowRight size={15} style={{ marginLeft: 6 }} />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}

// ─── Call Card ────────────────────────────────────────────────────────────────

function CallCard({ call }: { call: OpenCall }) {
  const navigate    = useNavigate();
  const expired     = isCallExpired(call.deadline);
  const isClosed    = call.status === "closed" || expired;
  const daysLeft    = Math.ceil((new Date(call.deadline).getTime() - Date.now()) / 86400000);
  const urgent      = !isClosed && daysLeft <= 30;

  const handleSubmit = () => {
    navigate(`/publishing/submit?call_id=${call.call_id}`);
  };

  return (
    <div style={{
      background: "#fff",
      border: `1.5px solid ${isClosed ? "#e5e7eb" : urgent ? "#f97316" : "#d1d5db"}`,
      borderRadius: 14,
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      opacity: isClosed ? 0.72 : 1,
      transition: "box-shadow 0.2s",
      position: "relative",
      overflow: "hidden",
    }}
      onMouseEnter={e => !isClosed && ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)")}
      onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}
    >
      {/* Urgent ribbon */}
      {urgent && (
        <div style={{ position: "absolute", top: 0, right: 0, background: "var(--accent)", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderBottomLeftRadius: 8 }}>
          CLOSING SOON
        </div>
      )}

      {/* Journal label */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f3f4f6", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <BookOpen size={15} style={{ color: "#6b7280" }} />
        </div>
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6b7280" }}>{call.journal_name}</span>
      </div>

      {/* Special issue title */}
      <div>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#111827", margin: "0 0 0.5rem", lineHeight: 1.35, fontFamily: "Georgia, serif" }}>
          {call.special_issue_title}
        </h3>
        <p style={{ fontSize: "0.83rem", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
          {call.description}
        </p>
      </div>

      {/* Topic tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
        {call.topic_tags.map(tag => (
          <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", fontWeight: 600, padding: "0.2rem 0.65rem", borderRadius: 999, background: "#f3f4f6", color: "#374151", border: "1px solid #e5e7eb" }}>
            <Tag size={10} /> {tag}
          </span>
        ))}
      </div>

      {/* Deadline */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Calendar size={14} style={{ color: isClosed ? "#9ca3af" : urgent ? "var(--accent)" : "#6b7280", flexShrink: 0 }} />
        <span style={{ fontSize: "0.82rem", fontWeight: 600, color: isClosed ? "#9ca3af" : urgent ? "var(--accent)" : "#374151" }}>
          {isClosed
            ? "Call Closed"
            : `Deadline: ${formatDeadline(call.deadline)}${urgent ? ` · ${daysLeft}d left` : ""}`}
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#f3f4f6" }} />

      {/* CTAs */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.625rem" }}>
        {isClosed ? (
          <button disabled style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.55rem 1.25rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 700,
            background: "#f3f4f6", color: "#9ca3af", border: "1.5px solid #e5e7eb", cursor: "not-allowed",
          }}>
            Call Closed
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.55rem 1.25rem", borderRadius: 8, fontSize: "0.85rem", fontWeight: 700,
              background: "var(--accent)", color: "#fff", border: "none", cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Submit to This Call <ArrowRight size={14} />
          </button>
        )}

        {call.guidelines_url && (
          <Link
            to={call.guidelines_url}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", fontWeight: 600, color: "#6b7280", textDecoration: "none" }}
            className="hover:text-accent"
          >
            <ExternalLink size={13} /> View Submission Guidelines
          </Link>
        )}
      </div>
    </div>
  );
}
