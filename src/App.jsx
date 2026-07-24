import { useState } from "react";

import Header from "./Header";

import Dashboard from "./components/Dashboard";
import AIAgents from "./components/AIAgents";
import SegmentFactory from "./components/SegmentFactory";
import ChannelExplorer from "./components/ChannelExplorer";
import ProductionTracker from "./components/ProductionTracker";
import PromptLibrary from "./components/PromptLibrary";
import SOPLibrary from "./components/SOPLibrary";
import KnowledgeBase from "./components/KnowledgeBase";
import Projects from "./components/Projects";
import KnowledgeImport from "./components/KnowledgeImport";

import LegalDocumentImportStudio from "./studio/LegalDocumentImportStudio";

// Quiz Studio
import QuizStudio from "./feature/quiz/components/QuizStudio";

export default function App() {

    const [currentPage, setCurrentPage] = useState("dashboard");

    return (
        <>
            <Header />

            <button onClick={() => setCurrentPage("dashboard")}>
                Dashboard
            </button>

            <button onClick={() => setCurrentPage("aiagents")}>
                AI Agents
            </button>

            <button onClick={() => setCurrentPage("segments")}>
                Segment Factory
            </button>

            <button onClick={() => setCurrentPage("channels")}>
                Channel Explorer
            </button>

            <button onClick={() => setCurrentPage("production")}>
                Production Tracker
            </button>

            <button onClick={() => setCurrentPage("prompts")}>
                Prompt Library
            </button>

            <button onClick={() => setCurrentPage("sop")}>
                SOP Library
            </button>

            <button onClick={() => setCurrentPage("knowledge")}>
                Knowledge Base
            </button>

            <button onClick={() => setCurrentPage("projects")}>
                Projects
            </button>

            <button onClick={() => setCurrentPage("knowledgeimport")}>
                Knowledge Import
            </button>

            <button onClick={() => setCurrentPage("legalstudio")}>
                ⚖️ Legal Studio
            </button>

            <button onClick={() => setCurrentPage("quizstudio")}>
                📝 Quiz Studio
            </button>

            <hr />

            {currentPage === "dashboard" && <Dashboard />}

            {currentPage === "aiagents" && <AIAgents />}

            {currentPage === "segments" && <SegmentFactory />}

            {currentPage === "channels" && <ChannelExplorer />}

            {currentPage === "production" && <ProductionTracker />}

            {currentPage === "prompts" && <PromptLibrary />}

            {currentPage === "sop" && <SOPLibrary />}

            {currentPage === "knowledge" && <KnowledgeBase />}

            {currentPage === "projects" && <Projects />}

            {currentPage === "knowledgeimport" && <KnowledgeImport />}

            {currentPage === "legalstudio" && <LegalDocumentImportStudio />}

            {currentPage === "quizstudio" && <QuizStudio />}
        </>
    );

}