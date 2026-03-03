import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { 
  ArrowRight, ArrowLeft, Upload, CheckCircle, ChevronRight,
  User, GraduationCap, BookOpen, FileText, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout";
import { toast } from "@/hooks/use-toast";
import transcriptHero from "@/assets/about-conference.jpg";

const painPoints = [
  "Accreditation requirements demanding qualified lecturers",
  "Urgent program expansion without faculty capacity",
  "EdTech licensing needing named academic leads",
  "Inconsistent teaching quality across modules",
  "Research capacity gaps",
  "Curriculum requiring validation or redesign",
];




const engagementSteps = [
  "Submit Your Academic Requirement",
  "Define Scope, Duration & Expertise Needed",
  "We Match Verified Academic Partners",
  "Structured Coordination & Engagement",
  "Ongoing Oversight & Quality Assurance",
];

const audiences = [
  "Universities and Higher Education Institutions",
  "EdTech Platforms & Online Universities",
  "Professional & Certification Bodies",
  "Research & Policy Organizations",
  "International Institutions operating in Africa"
];

const orgTypes = [
  "University", "EdTech Platform", "Online University",
  "Professional/Certification Body", "Research Organization",
  "Corporate Training Division", "Policy/Government Institution", "Other",
];

const supportTypes = [
  "Teaching & Academic Delivery",     "Online / Blended Teaching Support",
  "Short-Term Academic Delivery",       "Research & Scholarly Engagement",
  "Peer Review & Editorial Support",    "Academic Validation / Quality Assurance",
  "Curriculum & Content Development",   "Accreditation / Licensing Support",
  "Ongoing Academic Advisory",          "Other (Specify)",
];

const expertiseLevels = [
  "Lecturer", "Senior Lecturer", "Associate Professor", "Professor",
  "Research Fellow", "Subject-Matter Expert", "Multiple Levels Required",
];

const academicsNeeded = ["1", "2–3", "4–6", "7+"];

const engagementTypes = [
  "Short-Term (<3 months)", "Part-Time (Ongoing)", "Project-Based",
  "Advisory/Validation Only", "Long-Term Structured Engagement",
];

const engagementModes = ["Fully Remote", "Hybrid", "In-Person", "Flexible"];

const budgetRanges = ["Under ₦500", "₦500–₦2,000", "₦2,000–₦5,000", "₦5,000+", "Prefer to discuss"];

const nextSteps = [
  "Schedule Introductory Call", "Receive Proposal via Email", "Urgent—Contact Immediately",
];


const demoData = {
  orgName: "Pan-African Digital University",
  orgType: "Online University",
  country: "Kenya",
  website: "https://www.padu.ac.ke",
  contactPerson: "Dr. Amara Okonkwo",
  title: "Vice Chancellor — Academic Affairs",
  email: "a.okonkwo@padu.ac.ke",
  phone: "+254 700 123 456",
  supportTypes: ["Teaching & Faculty Deployment", "Curriculum & Program Development"],
  discipline: "Data Science & Artificial Intelligence",
  expertiseLevel: "Senior Lecturer",
  academicsNeeded: "2–3",
  engagementType: "Part-Time (Ongoing)",
  engagementMode: "Fully Remote",
  startDate: "2026-04-15",
  duration: "6 months (renewable)",
  accreditationLinked: "Yes",
  regulatoryBody: "Commission for University Education (CUE)",
  namedLeads: "Yes",
  backgroundDocs: "Yes",
  description:
    "We are launching a new BSc in Data Science and require two senior lecturers to deliver core modules in machine learning and statistical analysis. The program must meet CUE accreditation standards and includes a blended delivery model.",
  budget: "$2,000–$5,000",
  nextStep: "Schedule Introductory Call",
  hearAbout: "Referred by the Association of African Universities",
};

// ─── SHARED FIELD STYLES ─────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40";
const labelCls = "block text-sm font-semibold text-foreground mb-1.5";

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  border: "1.5px solid var(--border, #e5e7eb)",
  background: "var(--background, #fff)",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  color: "var(--foreground)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  appearance: "auto",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: "600",
  color: "var(--foreground)",
  marginBottom: "0.375rem",
};
const formSchema = z.object({
  // Personal Info
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  country: z.string().min(1, "Please select your country"),
  
  // Academic Background
  highestDegree: z.string().min(1, "Please select your highest degree"),
  institution: z.string().min(2, "Please enter your institution"),
  fieldOfStudy: z.string().min(2, "Please enter your field of study"),
  graduationYear: z.string().min(4, "Please enter graduation year"),
  
  // Areas of Interest
  teachingInterest: z.boolean().default(false),
  researchInterest: z.boolean().default(false),
  peerReviewInterest: z.boolean().default(false),
  curriculumInterest: z.boolean().default(false),
  disciplines: z.string().min(2, "Please enter your disciplines"),
  
  // Research Experience
  hasPublications: z.string().min(1, "Please select an option"),
  researchAreas: z.string().optional(),
  
  // Statement
  motivation: z.string().min(50, "Please provide at least 50 characters"),
  
  // Consent
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept the terms"),
  dataConsent: z.boolean().refine((val) => val === true, "You must consent to data processing"),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Academic Background", icon: GraduationCap },
  { id: 3, title: "Areas of Interest", icon: BookOpen },
  { id: 4, title: "Experience & Statement", icon: FileText },
];

const countries = [
  "Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco", 
  "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Cameroon", "Senegal", "Other"
];

const degrees = [
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree (PhD)",
  "Professional Degree (MD, JD, etc.)",
];
function FormSection({
  num, title, children,
}: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--card, #ffffff)",
        border: "1px solid var(--border, #e5e7eb)",
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "0",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border, #e5e7eb)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            color: "var(--accent-foreground, #fff)",
            fontSize: "0.75rem",
            fontWeight: "700",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {num}
        </span>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "var(--foreground)",
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

// Responsive 2-column grid that collapses to 1 column below 600px
function FGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
      gap: "1rem",
    }}>
      {children}
    </div>
  );
}

// Individual field with label
function FField({ label, required, span2, children }: {
  label: string; required?: boolean; span2?: boolean; children: React.ReactNode
}) {
  return (
    <div style={span2 ? { gridColumn: "1 / -1" } : {}}>
      <label style={{
        display: "block", fontSize: "0.8rem", fontWeight: "600",
        color: "var(--foreground)", marginBottom: "0.375rem",
      }}>
        {label}
        {required && <span style={{ color: "var(--accent)", marginLeft: "2px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}
export default function InstituitionApply() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [autoFill, setAutoFill] = useState(true);
  const [formData, setFormData] = useState<Record<string, any>>(
    autoFill ? { ...demoData } : {}
  );
  const [selectedSupport, setSelectedSupport] = useState<string[]>(
    autoFill ? demoData.supportTypes : []
  );
const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  border: "1.5px solid #d1d5db",
  background: "#ffffff",
  padding: "0.65rem 0.875rem",
  fontSize: "0.875rem",
  color: "var(--foreground)",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  appearance: "auto",
};
  const handleAutoFillToggle = () => {
    const next = !autoFill;
    setAutoFill(next);
    if (next) { setFormData({ ...demoData }); setSelectedSupport(demoData.supportTypes); }
    else      { setFormData({});              setSelectedSupport([]); }
  };

  const handleChange = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const toggleSupport = (val: string) =>
    setSelectedSupport(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );

  const scrollToForm = (prefill?: string) => {
    if (prefill)
      setSelectedSupport(prev => prev.includes(prefill) ? prev : [...prev, prefill]);
    document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      highestDegree: "",
      institution: "",
      fieldOfStudy: "",
      graduationYear: "",
      teachingInterest: false,
      researchInterest: false,
      peerReviewInterest: false,
      curriculumInterest: false,
      disciplines: "",
      hasPublications: "",
      researchAreas: "",
      motivation: "",
      termsAccepted: false,
      dataConsent: false,
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ["firstName", "lastName", "email", "phone", "country"];
        break;
      case 2:
        fieldsToValidate = ["highestDegree", "institution", "fieldOfStudy", "graduationYear"];
        break;
      case 3:
        fieldsToValidate = ["disciplines"];
        break;
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container-section section-padding">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="py-12">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for applying to join the Afrika Scholar Academic Network. 
                Our team will review your application and contact you within 5-7 business days.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link to="/network">Back to Network</Link>
                </Button>
                <Button asChild>
                  <Link to="/">Go to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b">
        <div className="container-section py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/instituition" className="hover:text-foreground">Instituition</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Apply</span>
          </nav>
        </div>
      </div>

<section className="relative overflow-hidden min-h-[400px]">
  <div className="absolute inset-0">
    <img
      src={transcriptHero}
      alt="Transcript Advisory"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-primary/85" />
  </div>
  <div className="absolute inset-0 opacity-10">
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="transcript-grid"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="1"
            cy="1"
            r="0.4"
            fill="currentColor"
            className="text-primary-foreground"
          />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#transcript-grid)" />
    </svg>
  </div>
  <div className="container-section relative section-padding">
    <div className="max-w-3xl mx-auto text-center text-primary-foreground">
      <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
Request Academic Deployment
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
Request Academic Deployment
      </h1>
      <p className="text-xl text-primary-foreground/80">
If you require lecturers, researchers, reviewers, or academic validation support, complete the request form below.
      </p>
    </div>
  </div>
</section>
<div style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem 1rem" }}>
    <form
             onSubmit={(e) => { e.preventDefault(); window.location.href = "/university-enablement/request-submitted"; }}
             style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
           >
 
             {/* 1 — Organization Information */}
             <FormSection num={1} title="Organization Information">
               <FGrid>
                 <FField label="Organization Name">
                   <input style={inputStyle} value={formData.orgName || ""} onChange={e => handleChange("orgName", e.target.value)} required placeholder="e.g. University of Lagos" />
                 </FField>
                 <FField label="Organization Type" >
                   <select style={inputStyle} value={formData.orgType || ""} onChange={e => handleChange("orgType", e.target.value)} required>
                     <option value="">Select type...</option>
                     {orgTypes.map(t => <option key={t} value={t}>{t}</option>)}
                   </select>
                 </FField>
                 <FField label="Country of Operation" >
                   <select style={inputStyle} value={formData.country || ""} onChange={e => handleChange("country", e.target.value)} required>
                     <option value="">Select country...</option>
                     {countries.map(c => <option key={c} value={c}>{c}</option>)}
                   </select>
                 </FField>
                 <FField label="Organization Website Url">
                   <input style={inputStyle} type="url" value={formData.website || ""} onChange={e => handleChange("website", e.target.value)} placeholder="https://..." />
                 </FField>
                 <FField label="Contact Person Name" >
                   <input style={inputStyle} value={formData.contactPerson || ""} onChange={e => handleChange("contactPerson", e.target.value)} required placeholder="Full name" />
                 </FField>
                 <FField label="Title / Position">
                   <input style={inputStyle} value={formData.title || ""} onChange={e => handleChange("title", e.target.value)} placeholder="e.g. Academic Registrar" />
                 </FField>
                 <FField label="Official Email Address" >
                   <input style={inputStyle} type="email" value={formData.email || ""} onChange={e => handleChange("email", e.target.value)} required placeholder="you@institution.ac" />
                 </FField>
                 <FField label="Phone Number">
                   <input style={inputStyle} type="tel" value={formData.phone || ""} onChange={e => handleChange("phone", e.target.value)} placeholder="+234 800 000 0000" />
                 </FField>
               </FGrid>
             </FormSection>
 
             {/* 2 — Type of Support Required */}
             <FormSection num={2} title="Type of Support Required">
               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                 {supportTypes.map(s => (
                   <label
                     key={s}
                     style={{
                       display: "flex", alignItems: "center", gap: "0.625rem",
                       background: selectedSupport.includes(s) ? "var(--accent-light, rgba(234,88,12,0.06))" : "var(--background, #fff)",
                       border: `1.5px solid ${selectedSupport.includes(s) ? "var(--accent)" : "var(--border, #e5e7eb)"}`,
                       borderRadius: "8px", padding: "0.75rem", cursor: "pointer",
                       transition: "border-color 0.15s, background 0.15s",
                     }}
                   >
                     <input
                       type="checkbox"
                       checked={selectedSupport.includes(s)}
                       onChange={() => toggleSupport(s)}
                       style={{ width: "16px", height: "16px", flexShrink: 0, accentColor: "var(--accent)" }}
                     />
                     <span style={{ fontSize: "0.8rem", color: "var(--foreground)" }}>{s}</span>
                   </label>
                 ))}
               </div>
             </FormSection>
 
             {/* 3 — Discipline & Expertise */}
             <FormSection num={3} title="Discipline & Expertise Requirements">
               <FGrid>
                 <FField label="Primary Discipline / Field Required" span2>
                   <input style={inputStyle} value={formData.discipline || ""} onChange={e => handleChange("discipline", e.target.value)} placeholder="e.g. Data Science, Public Health, Law" />
                 </FField>
                 <FField label="Level of Expertise Required">
                   <select style={inputStyle} value={formData.expertiseLevel || ""} onChange={e => handleChange("expertiseLevel", e.target.value)}>
                     <option value="">Select level...</option>
                     {expertiseLevels.map(l => <option key={l} value={l}>{l}</option>)}
                   </select>
                 </FField>
                 <FField label="Number of Academics Required">
                   <select style={inputStyle} value={formData.academicsNeeded || ""} onChange={e => handleChange("academicsNeeded", e.target.value)}>
                     <option value="">Select range...</option>
                     {academicsNeeded.map(n => <option key={n} value={n}>{n}</option>)}
                   </select>
                 </FField>
               </FGrid>
             </FormSection>
 
             {/* 4 — Engagement Structure */}
             <FormSection num={4} title="Engagement Structure">
               <FGrid>
                 <FField label="Engagement Type">
                   <select style={inputStyle} value={formData.engagementType || ""} onChange={e => handleChange("engagementType", e.target.value)}>
                     <option value="">Select type...</option>
                     {engagementTypes.map(t => <option key={t} value={t}>{t}</option>)}
                   </select>
                 </FField>
                 <FField label="Mode of Engagement">
                   <select style={inputStyle} value={formData.engagementMode || ""} onChange={e => handleChange("engagementMode", e.target.value)}>
                     <option value="">Select mode...</option>
                     {engagementModes.map(m => <option key={m} value={m}>{m}</option>)}
                   </select>
                 </FField>
                 <FField label="Expected Start Date">
                   <input style={inputStyle} type="date" value={formData.startDate || ""} onChange={e => handleChange("startDate", e.target.value)} />
                 </FField>
                 <FField label="Estimated Duration">
                   <input style={inputStyle} value={formData.duration || ""} onChange={e => handleChange("duration", e.target.value)} placeholder="e.g. 6 months" />
                 </FField>
               </FGrid>
             </FormSection>
 
             {/* 5 — Governance & Compliance */}
             <FormSection num={5} title="Governance & Compliance Context">
               <FGrid>
                 <FField label="Is this Linked to accreditation/licensing?">
                   <select style={inputStyle} value={formData.accreditationLinked || ""} onChange={e => handleChange("accreditationLinked", e.target.value)}>
                     <option value="">Select...</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                   </select>
                 </FField>
                 <FField label="Any Regulatory Body Involved?">
                   <input style={inputStyle} value={formData.regulatoryBody || ""} onChange={e => handleChange("regulatoryBody", e.target.value)} placeholder="e.g. NUC, CUE, HEQSF" />
                 </FField>
                 <FField label="Named academic leads required?">
                   <select style={inputStyle} value={formData.namedLeads || ""} onChange={e => handleChange("namedLeads", e.target.value)}>
                     <option value="">Select...</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                     <option value="Unsure">Unsure</option>
                   </select>
                 </FField>
                 <FField label="Background verification docs required?">
                   <select style={inputStyle} value={formData.backgroundDocs || ""} onChange={e => handleChange("backgroundDocs", e.target.value)}>
                     <option value="">Select...</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                   </select>
                 </FField>
               </FGrid>
             </FormSection>
 
             {/* 6 — Scope & Budget */}
             <FormSection num={6} title="Scope & Budget Context">
               <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                 <FField label="Brief Description of Requirements">
                   <textarea
                     style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                     rows={5}
                     value={formData.description || ""}
                     onChange={e => handleChange("description", e.target.value)}
                     placeholder="Describe the academic need, program context, expected outcomes, and any constraints..."
                   />
                 </FField>
                 <FField label="Budget Range">
                   <select style={inputStyle} value={formData.budget || ""} onChange={e => handleChange("budget", e.target.value)}>
                     <option value="">Select budget range...</option>
                     {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                   </select>
                 </FField>
               </div>
             </FormSection>
 
             {/* 7 — Next Steps */}
             <FormSection num={7} title="Next Steps">
               <FGrid>
                 <FField label="Preferred Next Step">
                   <select style={inputStyle} value={formData.nextStep || ""} onChange={e => handleChange("nextStep", e.target.value)}>
                     <option value="">Select...</option>
                     {nextSteps.map(n => <option key={n} value={n}>{n}</option>)}
                   </select>
                 </FField>
                 <FField label="How did you hear about Afrika Scholar?">
                   <input style={inputStyle} value={formData.hearAbout || ""} onChange={e => handleChange("hearAbout", e.target.value)} placeholder="Referral, event, search..." />
                 </FField>
               </FGrid>
 
               {/* Declarations */}
               <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border, #e5e7eb)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                 <p style={{ fontSize: "0.7rem", fontWeight: "700", color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                   Declarations
                 </p>
                 {[
                   "I confirm the information provided is accurate and complete.",
                   "I understand availability is not guaranteed until engagement is formally confirmed.",
                   "I consent to being contacted by the Afrika Scholar coordination team.",
                 ].map((text, i) => (
                   <label key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                     <input
                       type="checkbox"
                       required
                       style={{ width: "16px", height: "16px", marginTop: "2px", flexShrink: 0, accentColor: "var(--accent)" }}
                     />
                     <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{text}</span>
                   </label>
                 ))}
               </div>
             </FormSection>
 
             {/* Submit */}
             <div style={{ textAlign: "center", paddingTop: "1rem" }}>
 
                       <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
               <Link to="/request-submitted">
                Submit Academic Support Request 
                 <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
            
               <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "0.75rem" }}>
                 Our coordination team will respond within 24–48 hours.
               </p>
             </div>
 
           </form>

</div>

    </Layout>
  );
}
