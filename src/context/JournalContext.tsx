import React, { createContext, useContext, useState, ReactNode } from "react";

export interface BoardMember {
  name: string;
  title: string;
  affiliation: string;
}

export interface JournalProposalData {
  title: string;
  discipline: string;
  subDiscipline: string;
  scope: string;
  institution: string;
  country: string;
  website: string;
  institutionBacked: boolean;
  editorName: string;
  editorTitle: string;
  editorAffiliation: string;
  boardMembers: BoardMember[];
  contactEmail: string;
  frequency: string;
  languages: string;
  commitPeerReview: boolean;
  commitEthics: boolean;
  commitNoPredatory: boolean;
}

// ✅ New: matches what Policies.tsx saves
export interface JournalPoliciesData {
  reviewType: string;
  license: string;
  embargo: string;
  refStyle: string;
  plagiarismTool: boolean;
  aiDisclosure: boolean;
  dataSharing: boolean;
  retractReasons: string[];
  authorGuidelines: string;
  ethicsStatement: string;
}

export interface JournalState {
  proposal: JournalProposalData;
  governanceComplete: boolean;
  policiesAccepted: boolean;
  policiesComplete: boolean;        // ✅ added
  policies: JournalPoliciesData;    // ✅ added
  technicalSetupComplete: boolean;
  reviewStatus: "under-review" | "feedback-required" | "approved";
  launchChecklist: {
    editorialBoard: boolean;
    submissionSystem: boolean;
    callForPapers: boolean;
    publiclyListed: boolean;
  };
  launched: boolean;
  submitted: boolean;               // ✅ added
  submissionId: string;             // ✅ added
}

const defaultProposal: JournalProposalData = {
  title: "", discipline: "", subDiscipline: "", scope: "",
  institution: "", country: "", website: "", institutionBacked: false,
  editorName: "", editorTitle: "", editorAffiliation: "",
  boardMembers: [
    { name: "", title: "", affiliation: "" },
    { name: "", title: "", affiliation: "" },
    { name: "", title: "", affiliation: "" },
  ],
  contactEmail: "", frequency: "continuous", languages: "English",
  commitPeerReview: false, commitEthics: false, commitNoPredatory: false,
};

const defaultPolicies: JournalPoliciesData = {
  reviewType: "double-blind",
  license: "cc-by",
  embargo: "No Embargo",
  refStyle: "APA 7th",
  plagiarismTool: true,
  aiDisclosure: true,
  dataSharing: false,
  retractReasons: ["Data fabrication or falsification", "Plagiarism"],
  authorGuidelines: "",
  ethicsStatement: "",
};

const defaultState: JournalState = {
  proposal: defaultProposal,
  governanceComplete: false,
  policiesAccepted: false,
  policiesComplete: false,          // ✅
  policies: defaultPolicies,        // ✅
  technicalSetupComplete: false,
  reviewStatus: "under-review",
  launchChecklist: {
    editorialBoard: false,
    submissionSystem: false,
    callForPapers: false,
    publiclyListed: false,
  },
  launched: false,
  submitted: false,                 // ✅
  submissionId: "",                 // ✅
};

interface JournalContextType {
  state: JournalState;
  setState: React.Dispatch<React.SetStateAction<JournalState>>;
  updateProposal: (data: Partial<JournalProposalData>) => void;
  updatePolicies: (data: Partial<JournalPoliciesData>) => void; // ✅
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export function JournalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<JournalState>(defaultState);

  const updateProposal = (data: Partial<JournalProposalData>) => {
    setState(prev => ({ ...prev, proposal: { ...prev.proposal, ...data } }));
  };

  const updatePolicies = (data: Partial<JournalPoliciesData>) => {
    setState(prev => ({ ...prev, policies: { ...prev.policies, ...data } }));
  };

  return (
    <JournalContext.Provider value={{ state, setState, updateProposal, updatePolicies }}>
      {children}
    </JournalContext.Provider>
  );
}

export function useJournal() {
  const ctx = useContext(JournalContext);
  if (!ctx) throw new Error("useJournal must be used within JournalProvider");
  return ctx;
}