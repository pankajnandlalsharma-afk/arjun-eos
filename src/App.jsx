import React, { useState } from "react";

import AppLayout from "./layouts/AppLayout";

/* ===========================
   DASHBOARD
=========================== */

import Dashboard from "./dashboard/Dashboard";

/* ===========================
   ENTERPRISE MODULES
=========================== */

import AIAgents from "./components/AIAgents";
import SegmentFactory from "./components/SegmentFactory";
import ChannelExplorer from "./components/ChannelExplorer";
import ProductionTracker from "./components/ProductionTracker";
import PromptLibrary from "./components/PromptLibrary";
import SOPLibrary from "./components/SOPLibrary";
import KnowledgeBase from "./components/KnowledgeBase";
import KnowledgeImport from "./components/KnowledgeImport";
import Projects from "./components/Projects";
import MissionControl from "./components/MissionControl";
import LegalDocumentImportStudio from "./studio/LegalDocumentImportStudio";
import QuizStudio from "./feature/quiz/components/QuizStudio";

/* ===================================================
   ARJUN ENTERPRISE OPERATING SYSTEM
=================================================== */

export default function App() {

    const [currentPage, setCurrentPage] = useState("dashboard");

    const pageRegistry = {

        dashboard: <Dashboard />,

        ai: <AIAgents />,

        segment: <SegmentFactory />,

        channels: <ChannelExplorer />,

        production: <ProductionTracker />,

        prompts: <PromptLibrary />,

        sops: <SOPLibrary />,

        knowledge: <KnowledgeBase />,

        "knowledge-import": <KnowledgeImport />,

        projects: <Projects />,

        mission: <MissionControl />,

        legal: <LegalDocumentImportStudio />,

        quiz: <QuizStudio />

    };

    return (

        <AppLayout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        >

            {

                pageRegistry[currentPage]

                ||

                <Dashboard />

            }

        </AppLayout>

    );

}