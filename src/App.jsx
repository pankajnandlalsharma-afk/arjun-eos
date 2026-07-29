import { useState } from "react";

import Header from "./Header";
import AppLayout from "./layouts/AppLayout";

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
import MissionControl from "./components/MissionControl";

import LegalDocumentImportStudio from "./studio/LegalDocumentImportStudio";

import QuizStudio from "./feature/quiz/components/QuizStudio";

export default function App() {

    const [currentPage, setCurrentPage] = useState("dashboard");

    const renderPage = () => {

        switch (currentPage) {

            case "dashboard":
                return <Dashboard />;

            case "aiagents":
                return <AIAgents />;

            case "segments":
                return <SegmentFactory />;

            case "channels":
                return <ChannelExplorer />;

            case "production":
                return <ProductionTracker />;

            case "prompts":
                return <PromptLibrary />;

            case "sop":
                return <SOPLibrary />;

            case "knowledge":
                return <KnowledgeBase />;

            case "knowledgeimport":
                return <KnowledgeImport />;

            case "projects":
                return <Projects />;

            case "mission":
                return <MissionControl />;

            case "legalstudio":
                return <LegalDocumentImportStudio />;

            case "quizstudio":
                return <QuizStudio />;

            default:
                return <Dashboard />;

        }

    };

    return (

        <AppLayout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        >

            <Header />

            {renderPage()}

        </AppLayout>

    );

}