
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PublicationsPage from "./pages/PublicationsPage";
import NetworkPage from "./pages/NetworkPage";
import NetworkApplicationPage from "./pages/NetworkApplicationPage";
import AdvisoryPage from "./pages/AdvisoryPage";
import AdvisoryRequestPage from "./pages/AdvisoryRequestPage";
import TranscriptAdvisoryPage from "./pages/TranscriptAdvisoryPage";
import DegreeProgramsPage from "./pages/DegreeProgramsPage";
import StudyInAfricaPage from "./pages/StudyInAfricaPage";
import CallForPapersPage from "./pages/CallForPapersPage";
import SubmitManuscriptPage from "./pages/SubmitManuscriptPage";
import StartJournalPage from "./pages/StartJournalPage";
import ArticlePreviewPage from "./pages/ArticlePreviewPage";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";
import SubmitForm from "./pages/SubmitForm";
import Start from "./pages/Start";
import Propose from "./pages/Propose";
import { JournalProvider } from "./context/JournalContext";
import Gov from "./pages/Gov";
import Standards from "./pages/Standards";
import AuthorGuidelinesPage from "./pages/AuthorGuidelinesPage";
import Publeesh from "./pages/Publeesh";
import PeerReviewPage from "./pages/PeerReview";
import EditorialIndependencePage from "./pages/EditorialIndependence";
import EthicsPage from "./pages/Ethics";
import OpenAccessPage from "./pages/OpenAccess";
import RetractionPolicyPage from "./pages/RetractionPolicy";
import CompliancePage from "./pages/Compliance";
import AcademicIntegrityPage from "./pages/AcademicIntegrity";
import GovernancePage from "./pages/Governance";
import PubleeshResearch from "./pages/PubleeshResearch";
import Institution from "./pages/Instituition";
import Thanks from "./pages/Thanks";
import Schedule from "./pages/Schedule";
import Confirm from "./pages/Confirm";
import InstituitionApply from "./pages/InstituitionApply";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ExistingJournal from "./pages/ExistingJournal";
import InstitutionAccess from "./pages/InstituitionAccess";
import CallsForPapers from "./pages/CallsForPapers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Policies from "./pages/Policies";
import SubmitJournal from "./pages/SubmitJournal";
import Submissions from "./pages/Submissions";
import Profile from "./pages/Profile";

import MyPublications from "./pages/MyPublications";
import SettingsPage from "./pages/Setting";
import Onboarding from "./pages/Onboarding";
import PublesshDash from "./pages/PubleeshDash";
import GeneratePaper from "./pages/Generate";
import CheckoutPage from "./pages/CheckoutPage";

import AcademicDashboard from "./pages/AcademicDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import MyPapers from "./pages/dashboard/MyPapers";
import ResearchProjectsPage from "./pages/dashboard/ResearchProjectsPage";
import ReadingListsPage from "./pages/dashboard/ReadingListsPage";
import DatasetExplorer from "./pages/dashboard/DatasetExplorer";
import SavedPapers from "./pages/dashboard/ai-paper-generator/SavedPapers";
import PaperSetupWizard from "./pages/dashboard/ai-paper-generator/PaperSetupWizard";
import PaperWorkspace from "./pages/dashboard/ai-paper-generator/PaperWorkspace";
import ProTip from "./pages/dashboard/ProTip";
import DatasetAnalyzer from "./pages/dashboard/DatasetAnalyzer";
import IntelligenceHub from "./pages/dashboard/IntelligenceHub";
import PublishingOverview from "./pages/dashboard/PublishingOverview";
import SubmitManuscript from "./pages/dashboard/SubmitManuscript";
import TrackSubmissions from "./pages/dashboard/TrackSubmissions";
import EditorialWorkflow from "./pages/dashboard/EditorialWorkflow";
import JournalManagement from "./pages/dashboard/JournalManagement";
import PeerReviewsPage from "./pages/dashboard/PeerReviewsPage";
import ReviewerAssignmentPage from "./pages/dashboard/ReviewerAssignmentPage";
import InstrumentStudio from "./pages/dashboard/InstrumentStudio";
import MyInstruments from "./pages/dashboard/MyInstruments";
import AISlideBuilder from "./pages/dashboard/AISlideBuilder";
import CommunityPage from "./pages/dashboard/CommunityPage";
import CommunityDiscussionsPage from "./pages/dashboard/community/CommunityDiscussionsPage";
import CommunityResearchersPage from "./pages/dashboard/community/CommunityResearchersPage";
import CommunityCollaborationsPage from "./pages/dashboard/community/CommunityCollaborationsPage";
import CommunityMyActivityPage from "./pages/dashboard/community/CommunityMyActivityPage";
import BillingPage from "./pages/dashboard/BillingPage";
import BillingCreditsPage from "./pages/dashboard/billing/BillingCreditsPage";
import BillingUsagePage from "./pages/dashboard/billing/BillingUsagePage";
import PaymentMethodsPage from "./pages/dashboard/billing/PaymentMethodsPage";
import BillingInvoicesPage from "./pages/dashboard/billing/BillingInvoicesPage";
import MessagesPage from "./pages/dashboard/MessagesPage";
import LibraryPage from "./pages/dashboard/LibraryPage";
import NetworkOverviewPage from "./pages/dashboard/network/NetworkOverviewPage";
import OpportunitiesPage from "./pages/dashboard/network/OpportunitiesPage";
import NetworkApplicationsPage from "./pages/dashboard/network/NetworkApplicationsPage";
import DirectoryPage from "./pages/dashboard/network/DirectoryPage";
import NetworkEngagementsPage from "./pages/dashboard/network/NetworkEngagementsPage";
import NetworkContractsPage from "./pages/dashboard/network/NetworkContractsPage";
import EarningsPage from "./pages/dashboard/EarningsPage";
import InvoiceDetailsPage from "./pages/dashboard/InvoiceDetailsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import ResearcherProfilePage from "./pages/dashboard/ResearcherProfilePage";
import InstitutionRequestsPage from "./pages/dashboard/InstitutionRequestsPage";
import InstitutionalPartnershipsOverview from "./pages/dashboard/institutional/InstitutionalPartnershipsOverview";
import PartnershipRequestsPage from "./pages/dashboard/institutional/PartnershipRequestsPage";
import LecturerRequestsPage from "./pages/dashboard/institutional/LecturerRequestsPage";
import ResearchCollaborationPage from "./pages/dashboard/institutional/ResearchCollaborationPage";
import CurriculumValidationPage from "./pages/dashboard/institutional/CurriculumValidationPage";
import AdvisorySupportPage from "./pages/dashboard/institutional/AdvisorySupportPage";
import MyInstitutionalRequestsPage from "./pages/dashboard/institutional/MyInstitutionalRequestsPage";
import InstitutionalContractsPage from "./pages/dashboard/institutional/InstitutionalContractsPage";
import AdvisoryOverviewPage from "./pages/dashboard/advisory/AdvisoryOverviewPage";
import TranscriptRequestsPage from "./pages/dashboard/advisory/TranscriptRequestsPage";
import DegreeAdvisoryPage from "./pages/dashboard/advisory/DegreeAdvisoryPage";
import AcademicPathwaysPage from "./pages/dashboard/advisory/AcademicPathwaysPage";
import MyCasesPage from "./pages/dashboard/advisory/MyCasesPage";
import DocumentUploadsPage from "./pages/dashboard/advisory/DocumentUploadsPage";
import ResearcherDashboard from "./pages/home/ResearcherDashboard";
import Dashboards from "./pages/Dashboards";
import GeneratePapers from "./pages/dashboard/GeneratePapers";
import PricingPage from "./pages/Pricing";
import EditorialAnalyticsPage from "./pages/dashboard/EditorialAnalyticsPage";
import SubscriptionPage from "./pages/dashboard/Subscription";
import Settings from "./pages/dashboard/Settings";
import NotificationsPage from "./pages/dashboard/NotificationsPage";
import NetworkOverview from "./pages/dashboard/Professional/NetworkOverview";
import Opportunities from "./pages/dashboard/Professional/network/Opportunities";
import Application from "./pages/dashboard/Professional/network/Application";
import Directory from "./pages/dashboard/Professional/network/Directory";
import Engagement from "./pages/dashboard/Professional/network/Engagement";

const queryClient = new QueryClient();

// ── PublicRoute: redirects logged-in users to their dashboard ──────────────
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  if (isLoading) return null;
  if (isAuthenticated && user?.role && user?.profileComplete) {
    const roleMap: Record<string, string> = {
      researcher:   "/dashboard/researcher",
      academic:     "/dashboard/academic",
      professional: "/dashboard/professional",
    };
    return <Navigate to={roleMap[user.role] ?? "/dashboard"} replace />;
  }
  if (isAuthenticated && (!user?.role || !user?.profileComplete)) {
    return <Navigate to="/onboarding" replace />;
  }
  return <>{children}</>;
}

// ── ProtectedRoute: redirects logged-out users to login ───────────────────
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

// ── Helper: wrap in ProtectedRoute ────────────────────────────────────────
const P = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <JournalProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>

              {/* ── Public-only routes ── */}
              <Route path="/" element={<HomePage />} />
              <Route path="/publeesh/pricing" element={<PricingPage />} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/register" element={<Register />} />

              {/* ── Onboarding ── */}
              <Route path="/onboarding" element={<P><Onboarding /></P>} />

              {/* ── Root dashboard ── */}
              <Route path="/dashboard" element={<P><Dashboards /></P>} />

              {/* ════════════════════════════════════════════════
                  RESEARCHER ROUTES
              ════════════════════════════════════════════════ */}
              <Route path="/dashboard/researcher" element={<P><Dashboards /></P>} />

              {/* My Research */}
              <Route path="/dashboard/researcher/research/papers"       element={<P><MyPapers /></P>} />
              <Route path="/dashboard/researcher/research/projects"     element={<P><ResearchProjectsPage /></P>} />
              <Route path="/dashboard/researcher/research/reading-list" element={<P><ReadingListsPage /></P>} />
              <Route path="/dashboard/researcher/research/pro-tips"     element={<P><ProTip /></P>} />
              <Route path="/dashboard/researcher/settings"     element={<P><Settings /></P>} />

              {/* Publishing */}
              <Route path="/dashboard/researcher/publishing"             element={<P><PublishingOverview /></P>} />
              <Route path="/dashboard/researcher/publishing/submit"      element={<P><SubmitManuscript /></P>} />
              <Route path="/dashboard/researcher/publishing/submissions" element={<P><TrackSubmissions /></P>} />
              <Route path="/dashboard/researcher/publishing/reviews"     element={<P><PeerReviewsPage /></P>} />


<Route path="/dashboard/researcher/publishing/journals"             element={<P><JournalManagement/></P>} />
<Route path="/dashboard/researcher/publishing/workflow"             element={<P><EditorialWorkflow /></P>} />
<Route path="/dashboard/researcher/publishing/reviewer-assignment"  element={<P><ReviewerAssignmentPage /></P>} />
<Route path="/dashboard/researcher/publishing/editorial-analytics"  element={<P><EditorialAnalyticsPage /></P>} />
<Route path="/dashboard/researcher/notifications"  element={<P><NotificationsPage /></P>} />

              {/* Library */}
              <Route path="/dashboard/researcher/library"                element={<P><LibraryPage /></P>} />
              
          {/* Intelligence */}
<Route path="/dashboard/researcher/intelligence/generate-paper" element={<P><GeneratePapers /></P>} />
<Route path="/dashboard/researcher/intelligence/explorer"       element={<P><DatasetExplorer /></P>} />
<Route path="/dashboard/researcher/intelligence/analyzer"       element={<P><DatasetAnalyzer /></P>} />
<Route path="/dashboard/researcher/intelligence/hub"            element={<P><IntelligenceHub /></P>} />


<Route path="/dashboard/researcher/publishing/subscription"            element={<P><SubscriptionPage /></P>} />
              {/* Network */}
              <Route path="/dashboard/researcher/network"                element={<P><NetworkOverviewPage /></P>} />
              <Route path="/dashboard/researcher/network/opportunities"  element={<P><OpportunitiesPage /></P>} />
              <Route path="/dashboard/researcher/network/applications"   element={<P><NetworkApplicationsPage /></P>} />
              <Route path="/dashboard/researcher/network/directory"      element={<P><DirectoryPage /></P>} />
              <Route path="/dashboard/researcher/network/engagements"    element={<P><NetworkEngagementsPage /></P>} />

              {/* Community */}
              <Route path="/dashboard/researcher/community"                    element={<P><CommunityPage /></P>} />
              <Route path="/dashboard/researcher/community/discussions"        element={<P><CommunityDiscussionsPage /></P>} />
              <Route path="/dashboard/researcher/community/researchers"        element={<P><CommunityResearchersPage /></P>} />
              <Route path="/dashboard/researcher/community/collaborations"     element={<P><CommunityCollaborationsPage /></P>} />
              <Route path="/dashboard/researcher/community/activity"           element={<P><CommunityMyActivityPage /></P>} />

              {/* Billing */}
              <Route path="/dashboard/researcher/billing"                element={<P><BillingPage /></P>} />
              <Route path="/dashboard/researcher/billing/credits"        element={<P><BillingCreditsPage /></P>} />
              <Route path="/dashboard/researcher/billing/usage"          element={<P><BillingUsagePage /></P>} />
              <Route path="/dashboard/researcher/billing/payment-methods" element={<P><PaymentMethodsPage /></P>} />
              <Route path="/dashboard/researcher/billing/invoices"       element={<P><BillingInvoicesPage /></P>} />

              {/* Account */}
              <Route path="/dashboard/researcher/account/profile"        element={<P><ProfilePage /></P>} />
              <Route path="/dashboard/researcher/settings"       element={<P><Settings /></P>} />

              {/* ════════════════════════════════════════════════
                  ACADEMIC ROUTES
              ════════════════════════════════════════════════ */}
              <Route path="/dashboard/academic" element={<P><AcademicDashboard /></P>} />

              {/* My Research */}
              <Route path="/dashboard/academic/research/papers"       element={<P><MyPapers /></P>} />
              <Route path="/dashboard/academic/research/projects"     element={<P><ResearchProjectsPage /></P>} />
              <Route path="/dashboard/academic/research/reading-list" element={<P><ReadingListsPage /></P>} />
              <Route path="/dashboard/academic/research/pro-tips"     element={<P><ProTip /></P>} />

              {/* Publishing */}
              <Route path="/dashboard/academic/publishing"             element={<P><PublishingOverview /></P>} />
              <Route path="/dashboard/academic/publishing/submit"      element={<P><SubmitManuscript /></P>} />
              <Route path="/dashboard/academic/publishing/submissions" element={<P><TrackSubmissions /></P>} />
              <Route path="/dashboard/academic/publishing/reviews"     element={<P><PeerReviewsPage /></P>} />



<Route path="/dashboard/academic/publishing/journals"             element={<P><JournalManagement/></P>} />
<Route path="/dashboard/academic/publishing/workflow"             element={<P><EditorialWorkflow /></P>} />
<Route path="/dashboard/academic/publishing/reviewer-assignment"  element={<P><ReviewerAssignmentPage /></P>} />
<Route path="/dashboard/academic/publishing/editorial-analytics"  element={<P><EditorialAnalyticsPage /></P>} />
<Route path="/dashboard/academic/notifications"  element={<P><NotificationsPage /></P>} />

              {/* Library — single page, tabs driven by ?tab= */}
              <Route path="/dashboard/academic/library" element={<P><LibraryPage /></P>} />

<Route path="/dashboard/academic/publishing/subscription"            element={<P><SubscriptionPage /></P>} />
              {/* Intelligence */}
              <Route path="/dashboard/academic/intelligence/explorer"  element={<P><DatasetExplorer /></P>} />
              <Route path="/dashboard/academic/intelligence/analyzer"  element={<P><DatasetAnalyzer /></P>} />
              <Route path="/dashboard/academic/intelligence/hub"       element={<P><IntelligenceHub /></P>} />

{/* Instrument Studio */}
<Route path="/dashboard/academic/instrument-studio"                         element={<P><InstrumentStudio /></P>} />
<Route path="/dashboard/academic/instrument-studio/create"                  element={<P><InstrumentStudio /></P>} />
<Route path="/dashboard/academic/instrument-studio/paper-generator"         element={<P><SavedPapers /></P>} />
<Route path="/dashboard/academic/instrument-studio/slide-builder"           element={<P><AISlideBuilder /></P>} />
              {/* Network */}
              <Route path="/dashboard/academic/network"                element={<P><NetworkOverviewPage /></P>} />
              <Route path="/dashboard/academic/network/opportunities"  element={<P><OpportunitiesPage /></P>} />
              <Route path="/dashboard/academic/network/applications"   element={<P><NetworkApplicationsPage /></P>} />
              <Route path="/dashboard/academic/network/directory"      element={<P><DirectoryPage /></P>} />
              <Route path="/dashboard/academic/network/engagements"    element={<P><NetworkEngagementsPage /></P>} />

              {/* Institutions */}
              <Route path="/dashboard/academic/institutions"                        element={<P><InstitutionalPartnershipsOverview /></P>} />
              <Route path="/dashboard/academic/institutions/partnerships"           element={<P><PartnershipRequestsPage /></P>} />
              <Route path="/dashboard/academic/institutions/lecturer-requests"      element={<P><LecturerRequestsPage /></P>} />
              <Route path="/dashboard/academic/institutions/collaboration"          element={<P><ResearchCollaborationPage /></P>} />
              <Route path="/dashboard/academic/institutions/curriculum"             element={<P><CurriculumValidationPage /></P>} />
              <Route path="/dashboard/academic/institutions/advisory"               element={<P><AdvisorySupportPage /></P>} />
              <Route path="/dashboard/academic/institutions/my-requests"            element={<P><MyInstitutionalRequestsPage /></P>} />

              {/* Community */}
              <Route path="/dashboard/academic/community"                    element={<P><CommunityPage /></P>} />
              <Route path="/dashboard/academic/community/discussions"        element={<P><CommunityDiscussionsPage /></P>} />
              <Route path="/dashboard/academic/community/researchers"        element={<P><CommunityResearchersPage /></P>} />
              <Route path="/dashboard/academic/community/collaborations"     element={<P><CommunityCollaborationsPage /></P>} />
              <Route path="/dashboard/academic/community/activity"           element={<P><CommunityMyActivityPage /></P>} />

              {/* Billing */}
              <Route path="/dashboard/academic/billing"                 element={<P><BillingPage /></P>} />
              <Route path="/dashboard/academic/billing/credits"         element={<P><BillingCreditsPage /></P>} />
              <Route path="/dashboard/academic/billing/usage"           element={<P><BillingUsagePage /></P>} />
              <Route path="/dashboard/academic/billing/payment-methods" element={<P><PaymentMethodsPage /></P>} />
              <Route path="/dashboard/academic/billing/invoices"        element={<P><BillingInvoicesPage /></P>} />

              {/* Account */}
              <Route path="/dashboard/academic/account/profile"         element={<P><ProfilePage /></P>} />
              <Route path="/dashboard/academic/settings"        element={<P><Settings /></P>} />
              <Route path="/dashboard/academic/message"                 element={<P><MessagesPage /></P>} />

              {/* ════════════════════════════════════════════════
                  PROFESSIONAL ROUTES
              ════════════════════════════════════════════════ */}
              {/* <Route path="/dashboard/professional" element={<P><ProfessionalDashboard /></P>} /> */}
   <Route path="/dashboard/professional" element={<P><Dashboards /></P>} />
              {/* Network */}
              <Route path="/dashboard/professional/network-overview"                element={<P><NetworkOverview /></P>} />
              <Route path="/dashboard/professional/network/opportunities"  element={<P><Opportunities /></P>} />
              <Route path="/dashboard/professional/network/applications"   element={<P><Application /></P>} />
              <Route path="/dashboard/professional/network/directory"      element={<P><Directory /></P>} />
              <Route path="/dashboard/professional/network/engagements"    element={<P><Engagement /></P>} />

              {/* Institutions */}
              <Route path="/dashboard/professional/institutions"                    element={<P><InstitutionalPartnershipsOverview /></P>} />
              <Route path="/dashboard/professional/institutions/partnerships"       element={<P><PartnershipRequestsPage /></P>} />
              <Route path="/dashboard/professional/institutions/collaboration"      element={<P><ResearchCollaborationPage /></P>} />
              <Route path="/dashboard/professional/institutions/advisory"           element={<P><AdvisorySupportPage /></P>} />
              <Route path="/dashboard/professional/institutions/my-requests"        element={<P><MyInstitutionalRequestsPage /></P>} />

              {/* Library */}
              <Route path="/dashboard/professional/library" element={<P><LibraryPage /></P>} />

<Route path="/dashboard/professional/publishing/subscription"            element={<P><SubscriptionPage /></P>} />
              {/* Community */}
              <Route path="/dashboard/professional/community"                element={<P><CommunityPage /></P>} />
              <Route path="/dashboard/professional/community/discussions"    element={<P><CommunityDiscussionsPage /></P>} />
              <Route path="/dashboard/professional/community/collaborations" element={<P><CommunityCollaborationsPage /></P>} />
              <Route path="/dashboard/professional/community/activity"       element={<P><CommunityMyActivityPage /></P>} />

              {/* Academic Advisory */}
              <Route path="/dashboard/professional/advisory"                 element={<P><AdvisoryOverviewPage /></P>} />
              <Route path="/dashboard/professional/advisory/transcripts"     element={<P><TranscriptRequestsPage /></P>} />
              <Route path="/dashboard/professional/advisory/degree"          element={<P><DegreeAdvisoryPage /></P>} />
              <Route path="/dashboard/professional/advisory/study-africa"    element={<P><StudyInAfricaPage /></P>} />
              <Route path="/dashboard/professional/advisory/pathways"        element={<P><AcademicPathwaysPage /></P>} />
              <Route path="/dashboard/professional/advisory/cases"           element={<P><MyCasesPage /></P>} />
              <Route path="/dashboard/professional/advisory/documents"       element={<P><DocumentUploadsPage /></P>} />

              {/* Intelligence */}
              <Route path="/dashboard/professional/intelligence/explorer"    element={<P><DatasetExplorer /></P>} />
              <Route path="/dashboard/professional/intelligence/analyzer"    element={<P><DatasetAnalyzer /></P>} />
              <Route path="/dashboard/professional/intelligence/hub"         element={<P><IntelligenceHub /></P>} />
<Route path="/dashboard/professional/instrument-studio"                         element={<P><InstrumentStudio /></P>} />
<Route path="/dashboard/professional/instrument-studio/create"                  element={<P><InstrumentStudio /></P>} />
<Route path="/dashboard/professional/instrument-studio/paper-generator"         element={<P><SavedPapers /></P>} />
<Route path="/dashboard/professional/instrument-studio/slide-builder"           element={<P><AISlideBuilder /></P>} />
              {/* Billing */}
              <Route path="/dashboard/professional/billing"                  element={<P><BillingPage /></P>} />
              <Route path="/dashboard/professional/billing/credits"          element={<P><BillingCreditsPage /></P>} />
              <Route path="/dashboard/professional/billing/usage"            element={<P><BillingUsagePage /></P>} />
              <Route path="/dashboard/professional/billing/payment-methods"  element={<P><PaymentMethodsPage /></P>} />
              <Route path="/dashboard/professional/billing/invoices"         element={<P><BillingInvoicesPage /></P>} />

              {/* Account */}
              <Route path="/dashboard/professional/account/profile"          element={<P><ProfilePage /></P>} />
              <Route path="/dashboard/professional/settings"         element={<P><Settings /></P>} />
              <Route path="/dashboard/professional/notifications"  element={<P><NotificationsPage /></P>} />

              {/* ── Legacy / shared dashboard routes ── */}
              <Route path="/dashboard/submissions"  element={<P><Submissions /></P>} />
              <Route path="/dashboard/publications" element={<P><MyPublications /></P>} />
              <Route path="/dashboard/profile"      element={<P><Profile /></P>} />
              <Route path="/dashboard/settings"     element={<P><SettingsPage /></P>} />
              <Route path="/dashboard/publeesh"     element={<P><PublesshDash /></P>} />
              <Route path="/dashboard/generate"     element={<P><GeneratePaper /></P>} />

              {/* ── Public routes ── */}
              <Route path="/request-submitted"                  element={<Thanks />} />
              <Route path="/publeesh-ai"                        element={<Publeesh />} />
              <Route path="/schedule-a-call"                    element={<Schedule />} />
              <Route path="/schedule-a-call/confirm"            element={<Confirm />} />
              <Route path="/about"                              element={<AboutPage />} />
              <Route path="/privacy"                            element={<Privacy />} />
              <Route path="/publications"                       element={<PublicationsPage />} />
              <Route path="/network"                            element={<NetworkPage />} />
              <Route path="/network/apply"                      element={<NetworkApplicationPage />} />
              <Route path="/instituition/apply"                 element={<InstituitionApply />} />
              <Route path="/advisory"                           element={<AdvisoryPage />} />
              <Route path="/advisory/request"                   element={<AdvisoryRequestPage />} />
              <Route path="/instituition"                       element={<Institution />} />
              <Route path="/terms"                              element={<Terms />} />
              <Route path="/advisory/transcripts"               element={<TranscriptAdvisoryPage />} />
              <Route path="/advisory/degrees"                   element={<DegreeProgramsPage />} />
              <Route path="/compliance"                         element={<CompliancePage />} />
              <Route path="/framework/academic-integrity"       element={<AcademicIntegrityPage />} />
              <Route path="/framework/governance"               element={<GovernancePage />} />
              <Route path="/advisory/study-in-africa"           element={<StudyInAfricaPage />} />
              <Route path="/publishing/calls"                   element={<CallForPapersPage />} />
              <Route path="/publish-research"                   element={<PubleeshResearch />} />
              <Route path="/publishing/submit"                  element={<SubmitManuscriptPage />} />
              <Route path="/submit-form"                        element={<SubmitForm />} />
              <Route path="/start-publishing"                   element={<Start />} />
              <Route path="/calls-for-paper"                    element={<CallsForPapers />} />
              <Route path="/instituitional-access"              element={<InstitutionAccess />} />
              <Route path="/propose"                            element={<Propose />} />
              <Route path="/governance"                         element={<Gov />} />
              <Route path="/policies"                           element={<Policies />} />
              <Route path="/standards"                          element={<Standards />} />
              <Route path="/framework/author-guidelines"        element={<AuthorGuidelinesPage />} />
              <Route path="/framework/peer-review"              element={<PeerReviewPage />} />
              <Route path="/framework/editorial-independence"   element={<EditorialIndependencePage />} />
              <Route path="/framework/ethics"                   element={<EthicsPage />} />
              <Route path="/framework/open-access"              element={<OpenAccessPage />} />
              <Route path="/checkout"                           element={<CheckoutPage />} />
              <Route path="/framework/retraction-policy"        element={<RetractionPolicyPage />} />
              <Route path="/publishing/start-journal"           element={<StartJournalPage />} />
              <Route path="/article"                            element={<ArticlePreviewPage />} />
              <Route path="/existing-journals"                  element={<ExistingJournal />} />
              <Route path="/submit-journal"                     element={<SubmitJournal />} />
              <Route path="/blog"                               element={<BlogPage />} />
              <Route path="/blog/:slug"                         element={<BlogDetailPage />} />
              <Route path="*"                                   element={<NotFound />} />

            </Routes>
          </BrowserRouter>
        </JournalProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
