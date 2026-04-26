// src/pages/PublicationsAccess.tsx
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Loader, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

type Status = "verifying" | "success" | "failed" | "already";

export default function PublicationsAccess() {
  const [searchParams]  = useSearchParams();
  const navigate        = useNavigate();
  const [status,         setStatus]        = useState<Status>("verifying");
  const [articleId,      setArticleId]      = useState("");
  const [articleTitle,   setArticleTitle]   = useState("");
  const [errorMsg,       setErrorMsg]       = useState("");

  useEffect(() => {
    const ref = searchParams.get("ref") || searchParams.get("reference") || searchParams.get("trxref");
    if (!ref) { setStatus("failed"); setErrorMsg("No payment reference found."); return; }

    fetch(`${import.meta.env.VITE_NODE_API_URL}/api/sch/verify/${ref}`)
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          setArticleId(data.articleId);
          setArticleTitle(data.articleTitle || "");
          setStatus(data.alreadyVerified ? "already" : "success");

          // ✅ Store access in localStorage so article page knows instantly
          const accessKey = `article_access_${data.articleId}`;
          localStorage.setItem(accessKey, JSON.stringify({ ref, grantedAt: new Date().toISOString() }));
        } else {
          setStatus("failed");
          setErrorMsg(data.message || "Payment could not be verified.");
        }
      })
      .catch(() => { setStatus("failed"); setErrorMsg("Unable to connect. Please contact support."); });
  }, []);

  return (
    <Layout>
      <div style={{
        minHeight: "70vh", display: "flex", alignItems: "center",
        justifyContent: "center", padding: "2rem 1rem",
      }}>
        <div style={{
          width: "100%", maxWidth: 480, textAlign: "center",
          background: "#fff", border: "1px solid #e5e7eb",
          borderRadius: 20, padding: "3rem 2rem",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        }}>

          {status === "verifying" && (
            <>
              <Loader size={48} style={{ color: "#381b92", animation: "spin 1s linear infinite", margin: "0 auto 1.5rem" }} />
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "Georgia, serif", marginBottom: "0.5rem" }}>
                Verifying your payment...
              </h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Please wait, do not close this page.</p>
            </>
          )}

          {(status === "success" || status === "already") && (
            <>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <CheckCircle size={38} style={{ color: "#22c55e" }} />
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Georgia, serif", marginBottom: "0.6rem" }}>
                {status === "already" ? "Access Already Granted!" : "Payment Confirmed!"}
              </h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                You now have full access to:
              </p>
              {articleTitle && (
                <p style={{ fontWeight: 700, color: "#1f2937", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: 1.5 }}>
                  {articleTitle}
                </p>
              )}
              <Button
                onClick={() => navigate(`/article?id=${articleId}`)}
                style={{ background: "#381b92", color: "#fff", width: "100%", padding: "0.875rem", borderRadius: 10, fontWeight: 700, fontSize: "0.95rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", border: "none", cursor: "pointer" }}
              >
                Read Full Article <ArrowRight size={17} />
              </Button>
            </>
          )}

          {status === "failed" && (
            <>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(239,68,68,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <XCircle size={38} style={{ color: "#ef4444" }} />
              </div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Georgia, serif", marginBottom: "0.6rem" }}>
                Payment Not Verified
              </h2>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "2rem", lineHeight: 1.6 }}>
                {errorMsg}
              </p>
              <Button variant="outline" onClick={() => navigate("/publications")} style={{ width: "100%" }}>
                Back to Publications
              </Button>
            </>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </Layout>
  );
}