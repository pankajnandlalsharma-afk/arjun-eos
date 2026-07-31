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

/* ===========================
   SUBJECT REGISTRY
=========================== */

import SubjectRegistry from "./components/SubjectRegistry";

/* ===========================
   FOUNDER MEMORY
=========================== */

import FounderMemoryDashboard from "./founder/pages/FounderMemoryDashboard";

/* ===================================================
   ARJUN ENTERPRISE OPERATING SYSTEM
=================================================== */

export default function App() {

    const [currentPage, setCurrentPage] = useState("dashboard");

    /*
    ==================================================
    ENTERPRISE PAGE REGISTRY
    ==================================================
    */

    const pageRegistry = {

        /* Dashboard */

        dashboard: <Dashboard />,

        /* Enterprise */

        mission: <MissionControl />,
        founderMemory: <FounderMemoryDashboard />,

        /* Knowledge */

        knowledge: <KnowledgeBase />,
        "knowledge-import": <KnowledgeImport />,
        subjects: <SubjectRegistry />,
        projects: <Projects />,

        /* Quiz Ecosystem */

        quiz: <QuizStudio />,
        segment: <SegmentFactory />,
        channels: <ChannelExplorer />,
        production: <ProductionTracker />,

        /* AI */

        ai: <AIAgents />,
        prompts: <PromptLibrary />,
        sops: <SOPLibrary />,

        /* Legal */

        legal: <LegalDocumentImportStudio />

    };

    const CurrentComponent =
        pageRegistry[currentPage] || <Dashboard />;

    return (

        <AppLayout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        >

            {CurrentComponent}

        </AppLayout>

    );

}