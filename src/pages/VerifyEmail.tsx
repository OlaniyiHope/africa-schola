// src/pages/VerifyEmail.tsx
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, XCircle, Loader } from "lucide-react";
import logo from "@/assets/logo.png";

type Status = "loading" | "success" | "error";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const [status, setStatus]   = useState<Status>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!token || !email) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    fetch(
      `${import.meta.env.VITE_NODE_API_URL}/api/verify-email?token=${token}&email=${encodeURIComponent(email)}`
    )
      .then(res => {
        if (res.ok || res.redirected) {
          setStatus("success");
        } else {
          return res.json().then(data => {
            setStatus("error");
            setMessage(data.message || "Verification failed.");
          });
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Unable to connect. Please try again.");
      });
  }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "2rem 1rem",
      background: "var(--background)",
    }}>
      <div style={{
        width: "100%", maxWidth: 440,
        background: "var(--card, #fff)", border: "1px solid var(--border, #e5e7eb)",
        borderRadius: 20, padding: "2.5rem 2rem",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)", textAlign: "center",
      }}>
        <Link to="/">
          <img src={logo} alt="Afrika Scholar" style={{ height: 44, margin: "0 auto 1.5rem", display: "block" }} />
        </Link>

        {status === "loading" && (
          <>
            <Loader size={48} style={{ color: "#381b92", animation: "spin 1s linear infinite", margin: "0 auto 1rem" }} />
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.5rem" }}>
              Verifying your email...
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div style={{
              width: 68, height: 68, borderRadius: "50%",
              background: "rgba(34,197,94,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}>
              <CheckCircle size={36} style={{ color: "#22c55e" }} />
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.6rem" }}>
              Email <span style={{ color: "#22c55e" }}>Verified!</span>
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: "0 0 2rem", lineHeight: 1.6 }}>
              Your email has been confirmed. You're all set!
            </p>
            <Link
              to="/login"
              style={{
                display: "block", padding: "0.85rem", borderRadius: 10,
                background: "#381b92", color: "#fff",
                fontSize: "0.95rem", fontWeight: 700, textDecoration: "none",
              }}
            >
              Sign In to Your Account
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div style={{
              width: 68, height: 68, borderRadius: "50%",
              background: "rgba(239,68,68,0.08)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}>
              <XCircle size={36} style={{ color: "#ef4444" }} />
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Georgia, serif", color: "var(--foreground)", margin: "0 0 0.6rem" }}>
              Verification Failed
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", margin: "0 0 2rem", lineHeight: 1.6 }}>
              {message || "This link is invalid or has expired."}
            </p>
            <Link
              to="/register"
              style={{
                display: "block", padding: "0.85rem", borderRadius: 10,
                background: "#381b92", color: "#fff",
                fontSize: "0.95rem", fontWeight: 700,
                textDecoration: "none", marginBottom: "0.75rem",
              }}
            >
              Back to Register
            </Link>
            <Link
              to="/login"
              style={{
                display: "block", padding: "0.75rem", borderRadius: 10,
                border: "1.5px solid var(--border, #e5e7eb)",
                fontSize: "0.875rem", fontWeight: 600,
                color: "var(--foreground)", textDecoration: "none",
              }}
            >
              Sign In Instead
            </Link>
          </>
        )}
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}