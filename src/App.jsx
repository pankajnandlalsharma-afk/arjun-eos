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
import Projects from "./components/Projects";
import MissionControl from "./components/MissionControl";

import KnowledgeAcquisitionDepartment
    from "./departments/KnowledgeAcquisitionDepartment/KnowledgeAcquisitionDepartment";

import LegalDocumentImportStudio
    from "./studio/LegalDocumentImportStudio";

import QuizStudio
    from "./feature/quiz/components/QuizStudio";

/* ===========================
   REGISTRIES
=========================== */

import SubjectRegistry from "./components/SubjectRegistry";
import ModuleRegistry from "./components/ModuleRegistry";

/* ===========================
   FOUNDER MEMORY
=========================== */

import FounderMemoryDashboard
    from "./founder/pages/FounderMemoryDashboard";

/* ===================================================
   ARJUN ENTERPRISE OPERATING SYSTEM
=================================================== */

export default function App() {

    const [currentPage, setCurrentPage] = useState("dashboard");

    const pageRegistry = {

        /* ===========================
           Dashboard
        =========================== */

        dashboard: <Dashboard />,

        /* ===========================
           Enterprise
        =========================== */

        mission: <MissionControl />,

        founderMemory: <FounderMemoryDashboard />,

        /* ===========================
           Knowledge
        =========================== */

        knowledge: <KnowledgeBase />,

        "knowledge-import":
            <KnowledgeAcquisitionDepartment />,

        subjects: <SubjectRegistry />,

        modules: <ModuleRegistry />,

        projects: <Projects />,

        /* ===========================
           Quiz Ecosystem
        =========================== */

        quiz: <QuizStudio />,

        segment: <SegmentFactory />,

        channels: <ChannelExplorer />,

        production: <ProductionTracker />,

        /* ===========================
           AI
        =========================== */

        ai: <AIAgents />,

        prompts: <PromptLibrary />,

        sops: <SOPLibrary />,

        /* ===========================
           Legal
        =========================== */

        legal: <LegalDocumentImportStudio />

    };

    return (

        <AppLayout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        >

            {pageRegistry[currentPage] || <Dashboard />}

        </AppLayout>

    );

}