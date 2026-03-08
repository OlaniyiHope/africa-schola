import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const queryClient = new QueryClient();

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
          <Route path="/" element={<HomePage />} />
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
          <Route path="/dashboard/generate" element={<GeneratePaper />} />
          <Route path="/instituition" element={<Institution />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/submissions" element={<Submissions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/publeesh" element={<PublesshDash />} />
          <Route path="/dashboard/publications" element={<MyPublications />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/submit-journal" element={<SubmitJournal />} />
          <Route
            path="/advisory/transcripts"
            element={<TranscriptAdvisoryPage />}
          />
          <Route path="/advisory/degrees" element={<DegreeProgramsPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/framework/academic-integrity" element={<AcademicIntegrityPage />} />
          <Route path="/framework/governance" element={<GovernancePage />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route
            path="/advisory/study-in-africa"
            element={<StudyInAfricaPage />}
          />
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
          <Route
            path="/publishing/start-journal"
            element={<StartJournalPage />}
          />
          <Route path="/article" element={<ArticlePreviewPage />} />
          <Route path="/existing-journals" element={<ExistingJournal />} />
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
