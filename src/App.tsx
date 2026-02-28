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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
            <JournalProvider>


      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publeesh" element={<Publeesh />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/network/apply" element={<NetworkApplicationPage />} />
          <Route path="/advisory" element={<AdvisoryPage />} />
          <Route path="/advisory/request" element={<AdvisoryRequestPage />} />
          <Route
            path="/advisory/transcripts"
            element={<TranscriptAdvisoryPage />}
          />
          <Route path="/advisory/degrees" element={<DegreeProgramsPage />} />
          <Route
            path="/advisory/study-in-africa"
            element={<StudyInAfricaPage />}
          />
          <Route path="/publishing/calls" element={<CallForPapersPage />} />
          <Route path="/publishing/submit" element={<SubmitManuscriptPage />} />
          <Route path="/submit-form" element={<SubmitForm />} />
          <Route path="/start-publishing" element={<Start />} />
          <Route path="/propose" element={<Propose />} />
          <Route path="/governance" element={<Gov />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/framework/author-guidelines" element={<AuthorGuidelinesPage />} />
          <Route path="/framework/peer-review" element={<PeerReviewPage />} />
          <Route path="/framework/editorial-independence" element={<EditorialIndependencePage />} />
          <Route path="/framework/ethics" element={<EthicsPage />} />
          <Route
            path="/publishing/start-journal"
            element={<StartJournalPage />}
          />
          <Route path="/article" element={<ArticlePreviewPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
                  </JournalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
