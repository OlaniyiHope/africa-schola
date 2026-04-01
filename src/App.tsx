
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
import Dashboard from "./pages/Dashboard";
import MyPublications from "./pages/MyPublications";
import SettingsPage from "./pages/Setting";
import Onboarding from "./pages/Onboarding";
import PublesshDash from "./pages/PubleeshDash";
import GeneratePaper from "./pages/Generate";
import CheckoutPage from "./pages/CheckoutPage";
import ResearcherDashboard from "./pages/ResearcherDashboard";
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

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

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

              {/* ── Public-only routes (redirect to dashboard if logged in) ── */}
              <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<Register />} />

              {/* ── Onboarding (auth required, but no role yet) ── */}
              <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />

              {/* ── Protected dashboard routes ── */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/dashboard/researcher" element={<ProtectedRoute><ResearcherDashboard /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/papers" element={<ProtectedRoute><MyPapers /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><ResearchProjectsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/reading-list" element={<ProtectedRoute><ReadingListsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><DatasetExplorer /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><SavedPapers /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><PaperSetupWizard /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><PaperWorkspace /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/pro-tips" element={<ProtectedRoute><ProTip /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><DatasetAnalyzer /></ProtectedRoute>} />
              <Route path="/dashboard/academic/intelligence/explorer" element={<ProtectedRoute><IntelligenceHub /></ProtectedRoute>} />
              <Route path="/dashboard/academic/publishing" element={<ProtectedRoute><PublishingOverview /></ProtectedRoute>} />
              <Route path="/dashboard/academic/publishing/submit" element={<ProtectedRoute><SubmitManuscript /></ProtectedRoute>} />
              <Route path="/dashboard/academic/publishing/submissions" element={<ProtectedRoute><TrackSubmissions /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><EditorialWorkflow /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><JournalManagement /></ProtectedRoute>} />
              <Route path="/dashboard/academic/publishing/reviews" element={<ProtectedRoute><PeerReviewsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><ReviewerAssignmentPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><InstrumentStudio /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><MyInstruments /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><AISlideBuilder /></ProtectedRoute>} />
              <Route path="/dashboard/academic/community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/community/discussions" element={<ProtectedRoute><CommunityDiscussionsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/community/researchers" element={<ProtectedRoute><CommunityResearchersPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/community/collaborations" element={<ProtectedRoute><CommunityCollaborationsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/community/activity" element={<ProtectedRoute><CommunityMyActivityPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/billing" element={<ProtectedRoute><BillingPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/billing/credits" element={<ProtectedRoute><BillingCreditsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/billing/usage" element={<ProtectedRoute><BillingUsagePage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/billing/payment-methods" element={<ProtectedRoute><PaymentMethodsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/billing/invoices" element={<ProtectedRoute><BillingInvoicesPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/message" element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/library" element={<ProtectedRoute><LibraryPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/network" element={<ProtectedRoute><NetworkOverviewPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/network/opportunities" element={<ProtectedRoute><OpportunitiesPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/network/applications" element={<ProtectedRoute><NetworkApplicationsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/network/directory" element={<ProtectedRoute><DirectoryPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/network/engagements" element={<ProtectedRoute><NetworkEngagementsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><NetworkContractsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><EarningsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><InvoiceDetailsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/account/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><ResearcherProfilePage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><InstitutionRequestsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions" element={<ProtectedRoute><InstitutionalPartnershipsOverview /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions/partnerships" element={<ProtectedRoute><PartnershipRequestsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions/lecturer-requests" element={<ProtectedRoute><LecturerRequestsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions/collaboration" element={<ProtectedRoute><ResearchCollaborationPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions/curriculum" element={<ProtectedRoute><CurriculumValidationPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions/advisory" element={<ProtectedRoute><AdvisorySupportPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/institutions/my-requests" element={<ProtectedRoute><MyInstitutionalRequestsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><InstitutionalContractsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><AdvisoryOverviewPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><TranscriptRequestsPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><DegreeAdvisoryPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><AcademicPathwaysPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><MyCasesPage /></ProtectedRoute>} />
              <Route path="/dashboard/academic/research/projects" element={<ProtectedRoute><DocumentUploadsPage /></ProtectedRoute>} />

              <Route path="/dashboard/academic" element={<ProtectedRoute><AcademicDashboard /></ProtectedRoute>} />
              <Route path="/dashboard/professional" element={<ProtectedRoute><ProfessionalDashboard /></ProtectedRoute>} />
              <Route path="/dashboard/submissions" element={<ProtectedRoute><Submissions /></ProtectedRoute>} />
              <Route path="/dashboard/publications" element={<ProtectedRoute><MyPublications /></ProtectedRoute>} />
              <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/dashboard/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
              <Route path="/dashboard/publeesh" element={<ProtectedRoute><PublesshDash /></ProtectedRoute>} />
              <Route path="/dashboard/generate" element={<ProtectedRoute><GeneratePaper /></ProtectedRoute>} />

              {/* ── Public routes ── */}
              <Route path="/request-submitted" element={<Thanks />} />
              <Route path="/publeesh-ai" element={<Publeesh />} />
              <Route path="/schedule-a-call" element={<Schedule />} />
              <Route path="/schedule-a-call/confirm" element={<Confirm />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/network" element={<NetworkPage />} />
              <Route path="/network/apply" element={<NetworkApplicationPage />} />
              <Route path="/instituition/apply" element={<InstituitionApply />} />
              <Route path="/advisory" element={<AdvisoryPage />} />
              <Route path="/advisory/request" element={<AdvisoryRequestPage />} />
              <Route path="/instituition" element={<Institution />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/advisory/transcripts" element={<TranscriptAdvisoryPage />} />
              <Route path="/advisory/degrees" element={<DegreeProgramsPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/framework/academic-integrity" element={<AcademicIntegrityPage />} />
              <Route path="/framework/governance" element={<GovernancePage />} />
              <Route path="/advisory/study-in-africa" element={<StudyInAfricaPage />} />
              <Route path="/publishing/calls" element={<CallForPapersPage />} />
              <Route path="/publish-research" element={<PubleeshResearch />} />
              <Route path="/publishing/submit" element={<SubmitManuscriptPage />} />
              <Route path="/submit-form" element={<SubmitForm />} />
              <Route path="/start-publishing" element={<Start />} />
              <Route path="/calls-for-paper" element={<CallsForPapers />} />
              <Route path="/instituitional-access" element={<InstitutionAccess />} />
              <Route path="/propose" element={<Propose />} />
              <Route path="/governance" element={<Gov />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/standards" element={<Standards />} />
              <Route path="/framework/author-guidelines" element={<AuthorGuidelinesPage />} />
              <Route path="/framework/peer-review" element={<PeerReviewPage />} />
              <Route path="/framework/editorial-independence" element={<EditorialIndependencePage />} />
              <Route path="/framework/ethics" element={<EthicsPage />} />
              <Route path="/framework/open-access" element={<OpenAccessPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/framework/retraction-policy" element={<RetractionPolicyPage />} />
              <Route path="/publishing/start-journal" element={<StartJournalPage />} />
              <Route path="/article" element={<ArticlePreviewPage />} />
              <Route path="/existing-journals" element={<ExistingJournal />} />
              <Route path="/submit-journal" element={<SubmitJournal />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </BrowserRouter>
        </JournalProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
