// import { useState, useEffect } from "react";
// import { useSearchParams, Link, useNavigate } from "react-router-dom";
// import {
//   ArrowLeft, CreditCard, ShieldCheck, BookOpen,
//   CheckCircle, Loader2, Lock, User, Mail,
// } from "lucide-react";
// import { Layout } from "@/components/layout";
// import { publications } from "@/data/publications";
// import { useAuth } from "@/context/AuthContext";

// // ─── Load Paystack inline script ─────────────────────────────────────────────

// function loadPaystack(): Promise<void> {
//   return new Promise((resolve, reject) => {
//     if ((window as any).PaystackPop) { resolve(); return; }
//     if (document.getElementById("paystack-js")) { resolve(); return; }
//     const s = document.createElement("script");
//     s.id  = "paystack-js";
//     s.src = "https://js.paystack.co/v1/inline.js";
//     s.onload  = () => resolve();
//     s.onerror = () => reject(new Error("Could not load Paystack"));
//     document.body.appendChild(s);
//   });
// }

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function CheckoutPage() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { user }  = useAuth();

//   const pubId = searchParams.get("id");
//   const publication = publications.find((p) => p.id === pubId) || publications[0];

//   const [step,    setStep]    = useState<"review" | "paying" | "success" | "error">("review");
//   const [errMsg,  setErrMsg]  = useState("");

//   // Guard: must be logged in
//   useEffect(() => {
//     if (!user) {
//       navigate(`/login?redirect=${encodeURIComponent(`/checkout?id=${pubId}`)}`);
//     }
//   }, [user]);

//   // ── Launch Paystack popup ──────────────────────────────────────────────────
// const handlePay = async () => {
//   if (!user) return;
//   try {
//     setStep("paying");
//     setErrMsg("");

//     await loadPaystack();

//     // 1. Initialize on backend
//     const initRes = await fetch("/api/sch-initialize", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("as_token")}`,
//       },
//       body: JSON.stringify({
//         email: user.email,
//         articleId: publication.id,
//         articleTitle: publication.title,
//       }),
//     });

//     const initData = await initRes.json();

//     if (!initData.success) {
//       if (initData.alreadyPaid) { setStep("success"); return; }
//       throw new Error(initData.message || "Initialization failed");
//     }

//     // 2. Open Paystack popup
//     const handler = (window as any).PaystackPop.setup({
//       key:      import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
//       email:    user.email,
//       amount:   150000, // ₦1,500 in kobo
//       currency: "NGN",
//       ref:      initData.data.reference,
//       metadata: { articleId: publication.id, articleTitle: publication.title },

//       onClose: () => {
//         setStep("review");
//       },

//       // ✅ NOT async — use .then() instead of await
//       callback: (response: { reference: string }) => {
//         fetch(`/api/sch/verify/${response.reference}`)
//           .then(r => r.json())
//           .then(verData => {
//             if (verData.success) {
//               setStep("success");
//             } else {
//               setErrMsg(verData.message || "Verification failed");
//               setStep("error");
//             }
//           })
//           .catch(() => {
//             setErrMsg("Could not verify payment. Please refresh.");
//             setStep("error");
//           });
//       },
//     });

//     handler.openIframe();

//   } catch (e: any) {
//     setErrMsg(e.message || "Something went wrong");
//     setStep("error");
//   }
// };

//   // ─── Success screen ──────────────────────────────────────────────────────

//   if (step === "success") {
//     return (
//       <Layout>
//         <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
//           <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
//             <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#f0fdf4", border: "2px solid #bbf7d0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
//               <CheckCircle size={36} style={{ color: "#16a34a" }} />
//             </div>
//             <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", fontFamily: "Georgia, serif", margin: "0 0 0.5rem" }}>
//               Payment Successful!
//             </h1>
//             <p style={{ color: "#6b7280", marginBottom: "0.5rem", fontSize: "0.95rem" }}>
//               You now have full access to:
//             </p>
//             <p style={{ fontWeight: 700, color: "#111827", fontSize: "1rem", marginBottom: "2rem", lineHeight: 1.5 }}>
//               {publication.title}
//             </p>

//             <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//               <Link
//                 to={`/article-preview?id=${pubId}`}
//                 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#381b92", color: "#fff", borderRadius: 10, padding: "0.875rem 1.5rem", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "opacity 0.15s" }}
//                 onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
//                 onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
//               >
//                 <BookOpen size={18} /> Read Full Article
//               </Link>
//               <Link
//                 to="/publications"
//                 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#fff", color: "#374151", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "0.875rem 1.5rem", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}
//               >
//                 Back to Publications
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   // ─── Main checkout page ──────────────────────────────────────────────────

//   return (
//     <Layout>
//       <div style={{ background: "#f9fafb", minHeight: "calc(100vh - 64px)", padding: "2.5rem 1rem" }}>
//         <div style={{ maxWidth: 760, margin: "0 auto" }}>

//           {/* Back link */}
//           <Link
//             to={`/article-preview?id=${pubId}`}
//             style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: 600, color: "#374151", textDecoration: "none", marginBottom: "1.75rem" }}
//           >
//             <ArrowLeft size={15} /> Back to Article
//           </Link>

//           <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", fontFamily: "Georgia, serif", marginBottom: "1.75rem" }}>
//             Complete Your Purchase
//           </h1>

//           <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "1.5rem", alignItems: "start" }}>

//             {/* ── Left: account + payment ─────────────────────────────── */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

//               {/* Account info */}
//               <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.5rem" }}>
//                 <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
//                   <User size={15} style={{ color: "#381b92" }} /> Account
//                 </h2>
//                 <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
//                   <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#381b92", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
//                     {user?.username?.slice(0, 2).toUpperCase() || "??"}
//                   </div>
//                   <div>
//                     <p style={{ fontWeight: 700, color: "#111827", margin: 0, fontSize: "0.9rem" }}>{user?.username}</p>
//                     <p style={{ color: "#6b7280", margin: 0, fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
//                       <Mail size={11} /> {user?.email}
//                     </p>
//                   </div>
//                   <Link to="/login" style={{ marginLeft: "auto", fontSize: "0.75rem", color: "#ea580c", fontWeight: 600, textDecoration: "none" }}>
//                     Not you?
//                   </Link>
//                 </div>
//               </div>

//               {/* Payment method */}
//               <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.5rem" }}>
//                 <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", margin: "0 0 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
//                   <CreditCard size={15} style={{ color: "#381b92" }} /> Payment
//                 </h2>
//                 <div style={{ background: "#f9fafb", border: "1.5px dashed #d1d5db", borderRadius: 10, padding: "1.25rem", textAlign: "center", color: "#6b7280", fontSize: "0.85rem" }}>
//                   <Lock size={18} style={{ margin: "0 auto 0.5rem", display: "block", color: "#9ca3af" }} />
//                   Paystack secure checkout — card, bank transfer & mobile money accepted
//                 </div>
//               </div>

//               {/* Error box */}
//               {step === "error" && (
//                 <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "0.875rem 1rem", fontSize: "0.83rem", color: "#dc2626" }}>
//                   ⚠️ {errMsg || "Payment failed. Please try again."}
//                 </div>
//               )}

//               {/* Pay button */}
//               <button
//                 onClick={handlePay}
//                 disabled={step === "paying"}
//                 style={{ width: "100%", padding: "1rem", borderRadius: 12, border: "none", background: step === "paying" ? "#e5e7eb" : "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)", color: step === "paying" ? "#9ca3af" : "#fff", fontSize: "1rem", fontWeight: 800, cursor: step === "paying" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", boxShadow: step === "paying" ? "none" : "0 4px 20px rgba(234,88,12,0.35)", transition: "opacity 0.15s" }}
//                 onMouseEnter={e => { if (step !== "paying") e.currentTarget.style.opacity = "0.9"; }}
//                 onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
//               >
//                 {step === "paying"
//                   ? <><Loader2 size={18} style={{ animation: "spin 0.8s linear infinite" }} /> Opening secure payment...</>
//                   : <><Lock size={18} /> Pay ₦100 Securely</>
//                 }
//               </button>

//               <p style={{ textAlign: "center", fontSize: "0.72rem", color: "#9ca3af", margin: "-0.5rem 0 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem" }}>
//                 <ShieldCheck size={12} /> 256-bit SSL encryption · Powered by Paystack
//               </p>
//             </div>

//             {/* ── Right: order summary ─────────────────────────────────── */}
//             <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.5rem", position: "sticky", top: "1.5rem" }}>
//               <h2 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 1rem" }}>
//                 Order Summary
//               </h2>

//               {/* Article */}
//               <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", paddingBottom: "1rem", borderBottom: "1px solid #f3f4f6", marginBottom: "1rem" }}>
//                 <div style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(56,27,146,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                   <BookOpen size={18} style={{ color: "#381b92" }} />
//                 </div>
//                 <div style={{ flex: 1, minWidth: 0 }}>
//                   <p style={{ fontSize: "0.83rem", fontWeight: 700, color: "#111827", margin: "0 0 0.2rem", lineHeight: 1.4 }}>{publication.title}</p>
//                   <p style={{ fontSize: "0.72rem", color: "#6b7280", margin: 0 }}>{publication.authors?.join(", ")}</p>
//                 </div>
//               </div>

//               {/* Line items */}
//               {[
//                 { label: "Article access", value: "₦100" },
//                 { label: "Tax",            value: "₦0.00" },
//               ].map(({ label, value }) => (
//                 <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.83rem", color: "#6b7280", marginBottom: "0.5rem" }}>
//                   <span>{label}</span><span>{value}</span>
//                 </div>
//               ))}

//               <div style={{ borderTop: "1.5px solid #e5e7eb", marginTop: "0.75rem", paddingTop: "0.75rem", display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "1rem", color: "#111827" }}>
//                 <span>Total</span><span style={{ color: "#ea580c" }}>₦100</span>
//               </div>

//               {/* What you get */}
//               <div style={{ marginTop: "1.25rem", background: "#f9fafb", borderRadius: 10, padding: "0.875rem" }}>
//                 <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#9ca3af", margin: "0 0 0.625rem" }}>
//                   What's included
//                 </p>
//                 {[
//                   "Full article access",
//                   "PDF download",
//                   "Cite & reference tools",
//                   "Permanent access",
//                 ].map(item => (
//                   <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", fontSize: "0.8rem", color: "#374151" }}>
//                     <CheckCircle size={13} style={{ color: "#16a34a", flexShrink: 0 }} /> {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
//     </Layout>
//   );
// // }
// import { useState, useEffect } from "react";
// import { useSearchParams, Link, useNavigate } from "react-router-dom";
// import {
//   ArrowLeft, CreditCard, ShieldCheck, BookOpen,
//   CheckCircle, Loader2, Lock, User, Mail,
// } from "lucide-react";
// import { Layout } from "@/components/layout";
// import { publications } from "@/data/publications";
// import { useAuth } from "@/context/AuthContext";

// // ─── Load Paystack inline script ─────────────────────────────────────────────

// function loadPaystack(): Promise<void> {
//   return new Promise((resolve, reject) => {
//     if ((window as any).PaystackPop) { resolve(); return; }
//     if (document.getElementById("paystack-js")) { resolve(); return; }
//     const s = document.createElement("script");
//     s.id  = "paystack-js";
//     s.src = "https://js.paystack.co/v1/inline.js";
//     s.onload  = () => resolve();
//     s.onerror = () => reject(new Error("Could not load Paystack"));
//     document.body.appendChild(s);
//   });
// }

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function CheckoutPage() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { user }  = useAuth();

//   const pubId = searchParams.get("id");
//   const publication = publications.find((p) => p.id === pubId) || publications[0];

//   const [step,    setStep]    = useState<"review" | "paying" | "success" | "error">("review");
//   const [errMsg,  setErrMsg]  = useState("");

//   useEffect(() => {
//     if (!user) {
//       navigate(`/login?redirect=${encodeURIComponent(`/checkout?id=${pubId}`)}`);
//     }
//   }, [user]);

//   // ── Launch Paystack popup ──────────────────────────────────────────────────
//  const handlePay = async () => {
//   if (!user) return;
//   try {
//     setStep("paying");
//     setErrMsg("");

//     const initRes = await fetch("/api/sch-initialize", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("as_token")}`,
//       },
//       body: JSON.stringify({
//         email: user.email,
//         articleId: publication.id,
//         articleTitle: publication.title,
//       }),
//     });

//     const initData = await initRes.json();

//     if (!initData.success) {
//       if (initData.alreadyPaid) { setStep("success"); return; }
//       throw new Error(initData.message || "Initialization failed");
//     }

//     const { reference, authorizationUrl } = initData.data;

//     // ✅ Open Paystack checkout in a centered popup window
//     const width  = 500;
//     const height = 600;
//     const left   = window.screenX + (window.innerWidth  - width)  / 2;
//     const top    = window.screenY + (window.innerHeight - height) / 2;

//     const popup = window.open(
//       authorizationUrl,
//       "paystack-checkout",
//       `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
//     );

//     if (!popup) {
//       // Popup was blocked — fall back to same-tab redirect
//       window.location.href = authorizationUrl;
//       return;
//     }

//     // ✅ Poll for popup closure then verify payment
//     const pollTimer = setInterval(async () => {
//       if (popup.closed) {
//         clearInterval(pollTimer);
//         setStep("paying"); // show loading while verifying

//         try {
//           const verRes  = await fetch(`/api/sch/verify/${reference}`);
//           const verData = await verRes.json();

//           if (verData.success) {
//             setStep("success");
//           } else {
//             // Popup was closed without paying — go back to review
//             setStep("review");
//           }
//         } catch {
//           setStep("review");
//         }
//       }
//     }, 800);

//   } catch (e: any) {
//     setErrMsg(e.message || "Something went wrong");
//     setStep("error");
//   }
// };
//   // ─── Success screen ──────────────────────────────────────────────────────

//   if (step === "success") {
//     return (
//       <Layout>
//         <style>{`
//           @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
//         `}</style>
//         <div className="co-success-wrap">
//           <div className="co-success-inner">
//             <div className="co-success-icon">
//               <CheckCircle size={36} style={{ color: "#16a34a" }} />
//             </div>
//             <h1 className="co-success-title">Payment Successful!</h1>
//             <p className="co-success-sub">You now have full access to:</p>
//             <p className="co-success-pub">{publication.title}</p>
//             <div className="co-success-actions">
//               <Link
//                 to={`/article-preview?id=${pubId}`}
//                 className="co-btn-primary"
//               >
//                 <BookOpen size={18} /> Read Full Article
//               </Link>
//               <Link
//                 to="/publications"
//                 className="co-btn-secondary"
//               >
//                 Back to Publications
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   // ─── Main checkout page ──────────────────────────────────────────────────

//   return (
//     <Layout>
//       <style>{`
//         @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }

//         .co-page {
//           background: #f9fafb;
//           min-height: calc(100vh - 64px);
//           padding: 2rem 1rem;
//           box-sizing: border-box;
//         }
//         .co-container {
//           max-width: 800px;
//           margin: 0 auto;
//         }
//         .co-back {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.4rem;
//           font-size: 0.85rem;
//           font-weight: 600;
//           color: #374151;
//           text-decoration: none;
//           margin-bottom: 1.5rem;
//         }
//         .co-back:hover { color: #111827; }

//         .co-heading {
//           font-size: clamp(1.2rem, 4vw, 1.5rem);
//           font-weight: 800;
//           color: #111827;
//           font-family: Georgia, serif;
//           margin: 0 0 1.5rem;
//         }

//         /* Two-column on desktop, single-column on mobile */
//         .co-grid {
//           display: grid;
//           grid-template-columns: minmax(0, 1fr) 300px;
//           gap: 1.25rem;
//           align-items: start;
//         }
//         @media (max-width: 680px) {
//           .co-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* On mobile, order summary moves below the payment section */
//         .co-summary {
//           position: sticky;
//           top: 1.5rem;
//         }
//         @media (max-width: 680px) {
//           .co-summary {
//             position: static;
//             order: 2;
//           }
//           .co-left {
//             order: 1;
//           }
//         }

//         .co-left {
//           display: flex;
//           flex-direction: column;
//           gap: 1.1rem;
//         }

//         /* Card */
//         .co-card {
//           background: #fff;
//           border: 1px solid #e5e7eb;
//           border-radius: 14px;
//           padding: 1.25rem;
//         }
//         .co-card-title {
//           font-size: 0.88rem;
//           font-weight: 700;
//           color: #1f2937;
//           margin: 0 0 0.875rem;
//           display: flex;
//           align-items: center;
//           gap: 0.45rem;
//         }

//         /* Account row */
//         .co-account-row {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           flex-wrap: wrap;
//         }
//         .co-avatar {
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           background: #381b92;
//           color: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 800;
//           font-size: 1rem;
//           flex-shrink: 0;
//         }
//         .co-account-info { flex: 1; min-width: 0; }
//         .co-account-name {
//           font-weight: 700;
//           color: #111827;
//           margin: 0;
//           font-size: 0.88rem;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//         .co-account-email {
//           color: #6b7280;
//           margin: 0;
//           font-size: 0.8rem;
//           display: flex;
//           align-items: center;
//           gap: 0.3rem;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//         .co-not-you {
//           font-size: 0.75rem;
//           color: #ea580c;
//           font-weight: 600;
//           text-decoration: none;
//           white-space: nowrap;
//           margin-left: auto;
//         }

//         /* Payment box */
//         .co-payment-box {
//           background: #f9fafb;
//           border: 1.5px dashed #d1d5db;
//           border-radius: 10px;
//           padding: 1.1rem;
//           text-align: center;
//           color: #6b7280;
//           font-size: 0.83rem;
//           line-height: 1.5;
//         }

//         /* Error */
//         .co-error {
//           background: #fef2f2;
//           border: 1px solid #fecaca;
//           border-radius: 10px;
//           padding: 0.875rem 1rem;
//           font-size: 0.83rem;
//           color: #dc2626;
//         }

//         /* Pay button */
//         .co-pay-btn {
//           width: 100%;
//           padding: 1rem;
//           border-radius: 12px;
//           border: none;
//           font-size: 1rem;
//           font-weight: 800;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.6rem;
//           transition: opacity 0.15s;
//           min-height: 52px; /* touch-friendly */
//         }
//         .co-pay-btn.active {
//           background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
//           color: #fff;
//           box-shadow: 0 4px 20px rgba(234,88,12,0.35);
//         }
//         .co-pay-btn.active:hover { opacity: 0.9; }
//         .co-pay-btn.loading {
//           background: #e5e7eb;
//           color: #9ca3af;
//           cursor: not-allowed;
//         }

//         .co-ssl-note {
//           text-align: center;
//           font-size: 0.72rem;
//           color: #9ca3af;
//           margin: -0.25rem 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.35rem;
//         }

//         /* Order summary card */
//         .co-summary-card {
//           background: #fff;
//           border: 1px solid #e5e7eb;
//           border-radius: 14px;
//           padding: 1.25rem;
//         }
//         .co-summary-label {
//           font-size: 0.72rem;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.07em;
//           color: #9ca3af;
//           margin: 0 0 0.875rem;
//         }
//         .co-article-row {
//           display: flex;
//           gap: 0.75rem;
//           align-items: flex-start;
//           padding-bottom: 0.875rem;
//           border-bottom: 1px solid #f3f4f6;
//           margin-bottom: 0.875rem;
//         }
//         .co-article-icon {
//           width: 38px;
//           height: 38px;
//           border-radius: 8px;
//           background: rgba(56,27,146,0.08);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }
//         .co-article-title {
//           font-size: 0.82rem;
//           font-weight: 700;
//           color: #111827;
//           margin: 0 0 0.2rem;
//           line-height: 1.4;
//         }
//         .co-article-authors {
//           font-size: 0.72rem;
//           color: #6b7280;
//           margin: 0;
//         }
//         .co-line-item {
//           display: flex;
//           justify-content: space-between;
//           font-size: 0.82rem;
//           color: #6b7280;
//           margin-bottom: 0.4rem;
//         }
//         .co-total-row {
//           border-top: 1.5px solid #e5e7eb;
//           margin-top: 0.75rem;
//           padding-top: 0.75rem;
//           display: flex;
//           justify-content: space-between;
//           font-weight: 800;
//           font-size: 1rem;
//           color: #111827;
//         }
//         .co-total-amount { color: #ea580c; }
//         .co-whats-included {
//           margin-top: 1.1rem;
//           background: #f9fafb;
//           border-radius: 10px;
//           padding: 0.875rem;
//         }
//         .co-included-label {
//           font-size: 0.7rem;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 0.07em;
//           color: #9ca3af;
//           margin: 0 0 0.55rem;
//         }
//         .co-included-item {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           margin-bottom: 0.4rem;
//           font-size: 0.8rem;
//           color: #374151;
//         }

//         /* Success screen */
//         .co-success-wrap {
//           min-height: 60vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 2rem 1rem;
//           box-sizing: border-box;
//         }
//         .co-success-inner {
//           max-width: 480px;
//           width: 100%;
//           text-align: center;
//         }
//         .co-success-icon {
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           background: #f0fdf4;
//           border: 2px solid #bbf7d0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 1.5rem;
//         }
//         .co-success-title {
//           font-size: clamp(1.3rem, 5vw, 1.75rem);
//           font-weight: 800;
//           color: #111827;
//           font-family: Georgia, serif;
//           margin: 0 0 0.5rem;
//         }
//         .co-success-sub {
//           color: #6b7280;
//           margin-bottom: 0.5rem;
//           font-size: 0.95rem;
//         }
//         .co-success-pub {
//           font-weight: 700;
//           color: #111827;
//           font-size: 1rem;
//           margin-bottom: 2rem;
//           line-height: 1.5;
//           padding: 0 0.5rem;
//         }
//         .co-success-actions {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }
//         .co-btn-primary {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           background: #381b92;
//           color: #fff;
//           border-radius: 10px;
//           padding: 0.875rem 1.5rem;
//           font-weight: 700;
//           font-size: 0.95rem;
//           text-decoration: none;
//           transition: opacity 0.15s;
//           min-height: 48px;
//         }
//         .co-btn-primary:hover { opacity: 0.88; }
//         .co-btn-secondary {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           background: #fff;
//           color: #374151;
//           border: 1.5px solid #e5e7eb;
//           border-radius: 10px;
//           padding: 0.875rem 1.5rem;
//           font-weight: 600;
//           font-size: 0.95rem;
//           text-decoration: none;
//           min-height: 48px;
//         }
//       `}</style>

//       <div className="co-page">
//         <div className="co-container">

//           {/* Back link */}
//           <Link to={`/article-preview?id=${pubId}`} className="co-back">
//             <ArrowLeft size={15} /> Back to Article
//           </Link>

//           <h1 className="co-heading">Complete Your Purchase</h1>

//           <div className="co-grid">

//             {/* ── Left: account + payment ───────────────────────────── */}
//             <div className="co-left">

//               {/* Account info */}
//               <div className="co-card">
//                 <h2 className="co-card-title">
//                   <User size={15} style={{ color: "#381b92" }} /> Account
//                 </h2>
//                 <div className="co-account-row">
//                   <div className="co-avatar">
//                     {user?.username?.slice(0, 2).toUpperCase() || "??"}
//                   </div>
//                   <div className="co-account-info">
//                     <p className="co-account-name">{user?.username}</p>
//                     <p className="co-account-email">
//                       <Mail size={11} /> {user?.email}
//                     </p>
//                   </div>
//                   <Link to="/login" className="co-not-you">Not you?</Link>
//                 </div>
//               </div>

//               {/* Payment method */}
//               <div className="co-card">
//                 <h2 className="co-card-title">
//                   <CreditCard size={15} style={{ color: "#381b92" }} /> Payment
//                 </h2>
//                 <div className="co-payment-box">
//                   <Lock size={18} style={{ margin: "0 auto 0.5rem", display: "block", color: "#9ca3af" }} />
//                   Paystack secure checkout — card, bank transfer &amp; mobile money accepted
//                 </div>
//               </div>

//               {/* Error box */}
//               {step === "error" && (
//                 <div className="co-error">
//                   ⚠️ {errMsg || "Payment failed. Please try again."}
//                 </div>
//               )}

//               {/* Pay button */}
//               <button
//                 onClick={handlePay}
//                 disabled={step === "paying"}
//                 className={`co-pay-btn ${step === "paying" ? "loading" : "active"}`}
//               >
//                 {step === "paying"
//                   ? <><Loader2 size={18} style={{ animation: "spin 0.8s linear infinite" }} /> Opening secure payment...</>
//                   : <><Lock size={18} /> Pay ₦100 Securely</>
//                 }
//               </button>

//               <p className="co-ssl-note">
//                 <ShieldCheck size={12} /> 256-bit SSL encryption · Powered by Paystack
//               </p>
//             </div>

//             {/* ── Right: order summary ──────────────────────────────── */}
//             <div className="co-summary">
//               <div className="co-summary-card">
//                 <p className="co-summary-label">Order Summary</p>

//                 {/* Article */}
//                 <div className="co-article-row">
//                   <div className="co-article-icon">
//                     <BookOpen size={18} style={{ color: "#381b92" }} />
//                   </div>
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <p className="co-article-title">{publication.title}</p>
//                     <p className="co-article-authors">{publication.authors?.join(", ")}</p>
//                   </div>
//                 </div>

//                 {/* Line items */}
//                 {[
//                   { label: "Article access", value: "₦100" },
//                   { label: "Tax",            value: "₦0.00" },
//                 ].map(({ label, value }) => (
//                   <div key={label} className="co-line-item">
//                     <span>{label}</span><span>{value}</span>
//                   </div>
//                 ))}

//                 <div className="co-total-row">
//                   <span>Total</span>
//                   <span className="co-total-amount">₦100</span>
//                 </div>

//                 {/* What's included */}
//                 <div className="co-whats-included">
//                   <p className="co-included-label">What's included</p>
//                   {[
//                     "Full article access",
//                     "PDF download",
//                     "Cite & reference tools",
//                     "Permanent access",
//                   ].map(item => (
//                     <div key={item} className="co-included-item">
//                       <CheckCircle size={13} style={{ color: "#16a34a", flexShrink: 0 }} /> {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { BookOpen, CheckCircle, Loader2, Lock, ShieldCheck, X } from "lucide-react";
import { publications } from "@/data/publications";
import { useAuth } from "@/context/AuthContext";
import { usePurchasedArticles } from "@/hooks/use-purchased-articles";

function loadPaystack(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).PaystackPop) { resolve(); return; }
    if (document.getElementById("paystack-js")) { resolve(); return; }
    const s = document.createElement("script");
    s.id = "paystack-js";
    s.src = "https://js.paystack.co/v1/inline.js";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Could not load Paystack"));
    document.body.appendChild(s);
  });
}

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addPurchased } = usePurchasedArticles();

  const pubId = searchParams.get("id");
  const publication = publications.find((p) => p.id === pubId) || publications[0];

  const [step, setStep] = useState<"review" | "paying" | "success" | "error">("review");
  const [errMsg, setErrMsg] = useState("");

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent(`/checkout?id=${pubId}`)}`);
    }
  }, [user]);

  const handleClose = () => navigate(`/article?id=${pubId}`);

  const handlePay = async () => {
    if (!user) return;
    try {
      setStep("paying");
      setErrMsg("");

      // const initRes = await fetch("/api/sch-initialize", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("as_token")}`,
      //   },
      //   body: JSON.stringify({
      //     email: user.email,
      //     articleId: publication.id,
      //     articleTitle: publication.title,
      //   }),
      // });


      const initRes = await fetch(
  `${import.meta.env.VITE_NODE_API_URL}/api/sch-initialize`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("as_token")}`,
    },
    body: JSON.stringify({
      email: user.email,
      articleId: publication.id,
      articleTitle: publication.title,
    }),
  }
);
      const initData = await initRes.json();

      if (!initData.success) {
        if (initData.alreadyPaid) { setStep("success"); return; }
        throw new Error(initData.message || "Initialization failed");
      }

      const { reference, authorizationUrl } = initData.data;

      const width = 500, height = 600;
      const left = window.screenX + (window.innerWidth - width) / 2;
      const top = window.screenY + (window.innerHeight - height) / 2;

      const popup = window.open(
        authorizationUrl,
        "paystack-checkout",
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes`
      );

      if (!popup) { window.location.href = authorizationUrl; return; }

      const pollTimer = setInterval(async () => {
        if (popup.closed) {
          clearInterval(pollTimer);
          setStep("paying");
          try {
           const verRes = await fetch(
  `${import.meta.env.VITE_NODE_API_URL}/api/sch/verify/${reference}`
);
            const verData = await verRes.json();
            if (verData.success) {
              addPurchased(publication.id); // ← mark as purchased
              setStep("success");
            } else {
              setStep("review");
            }
          } catch {
            setStep("review");
          }
        }
      }, 800);

    } catch (e: any) {
      setErrMsg(e.message || "Something went wrong");
      setStep("error");
    }
  };

  const initials = user?.username?.slice(0, 2).toUpperCase() || "??";

  return (
    // Full-screen overlay
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div style={{
        background: "var(--color-background-primary, #fff)",
        borderRadius: "16px",
        border: "0.5px solid rgba(0,0,0,0.1)",
        width: "100%", maxWidth: "520px",
        maxHeight: "90vh", overflowY: "auto",
      }}>

        {/* ── Header ── */}
        <div style={{
          padding: "1.25rem 1.5rem",
          borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <p style={{ fontSize: 11, color: "#9ca3af", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Complete purchase
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, margin: 0, color: "#111827" }}>
              {step === "success" ? "Payment Successful" : "Full Article Access"}
            </p>
          </div>
          {step !== "success" && (
            <button
              onClick={handleClose}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                border: "0.5px solid rgba(0,0,0,0.15)",
                background: "transparent", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, color: "#6b7280",
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div style={{ padding: "1.25rem 1.5rem" }}>

          {step === "success" ? (
            /* ── Success state ── */
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "#f0fdf4", border: "1.5px solid #bbf7d0",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}>
                <CheckCircle size={28} style={{ color: "#16a34a" }} />
              </div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", margin: "0 0 6px" }}>
                You now have full access to:
              </p>
              <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 1.5rem", lineHeight: 1.5 }}>
                {publication.title}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link
                  to={`/article?id=${pubId}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "#381b92", color: "#fff",
                    borderRadius: 10, padding: "0.8rem 1.5rem",
                    fontWeight: 600, fontSize: 14, textDecoration: "none",
                  }}
                >
                  <BookOpen size={16} /> Read Full Article
                </Link>
                <Link
                  to="/publications"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "transparent", color: "#374151",
                    border: "0.5px solid rgba(0,0,0,0.15)",
                    borderRadius: 10, padding: "0.8rem 1.5rem",
                    fontWeight: 500, fontSize: 14, textDecoration: "none",
                  }}
                >
                  Back to Publications
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* ── Article summary ── */}
              <div style={{
                background: "#f9fafb", borderRadius: 12,
                padding: "0.875rem 1rem", marginBottom: "1.25rem",
                display: "flex", gap: 10, alignItems: "flex-start",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: "rgba(56,27,146,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <BookOpen size={16} style={{ color: "#381b92" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 2px", lineHeight: 1.4 }}>
                    {publication.title}
                  </p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>
                    {publication.authors?.slice(0, 2).join(", ")}
                    {publication.authors?.length > 2 && ` +${publication.authors.length - 2} more`}
                  </p>
                </div>
              </div>

              {/* ── Account ── */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "0.875rem 0",
                borderTop: "0.5px solid rgba(0,0,0,0.07)",
                borderBottom: "0.5px solid rgba(0,0,0,0.07)",
                marginBottom: "1rem",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "#381b92", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, flexShrink: 0,
                }}>
                  {initials}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: 0 }}>{user?.username}</p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{user?.email}</p>
                </div>
                <Link to="/login" style={{ marginLeft: "auto", fontSize: 12, color: "#ea580c", fontWeight: 600, textDecoration: "none" }}>
                  Not you?
                </Link>
              </div>

              {/* ── Line items ── */}
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                  <span>Article access</span><span>₦100</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6b7280", marginBottom: 10 }}>
                  <span>Tax</span><span>₦0.00</span>
                </div>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontSize: 15, fontWeight: 700, color: "#111827",
                  borderTop: "0.5px solid rgba(0,0,0,0.08)", paddingTop: 10,
                }}>
                  <span>Total</span>
                  <span style={{ color: "#ea580c" }}>₦100</span>
                </div>
              </div>

              {/* ── Error ── */}
              {step === "error" && (
                <div style={{
                  background: "#fef2f2", border: "0.5px solid #fecaca",
                  borderRadius: 8, padding: "0.75rem 1rem",
                  fontSize: 13, color: "#dc2626", marginBottom: "1rem",
                }}>
                  ⚠️ {errMsg || "Payment failed. Please try again."}
                </div>
              )}

              {/* ── Pay button ── */}
              <button
                onClick={handlePay}
                disabled={step === "paying"}
                style={{
                  width: "100%", padding: "0.875rem",
                  borderRadius: 10, border: "none",
                  background: step === "paying" ? "#e5e7eb" : "#381b92",
                  color: step === "paying" ? "#9ca3af" : "#fff",
                  fontSize: 15, fontWeight: 700, cursor: step === "paying" ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  marginBottom: 10,
                }}
              >
                {step === "paying"
                  ? <><Loader2 size={16} style={{ animation: "spin 0.8s linear infinite" }} /> Opening secure payment...</>
                  : <><Lock size={16} /> Pay ₦100 Securely</>
                }
              </button>

              <p style={{
                textAlign: "center", fontSize: 11, color: "#9ca3af",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 4, margin: 0,
              }}>
                <ShieldCheck size={12} /> 256-bit SSL encryption · Powered by Paystack
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}