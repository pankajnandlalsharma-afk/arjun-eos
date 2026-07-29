import React from "react";

export default function TopBar({ currentPage }) {
    const pageTitles = {
        dashboard: "Dashboard",
        aiagents: "AI Agents",
        segments: "Segment Factory",
        channels: "Channel Explorer",
        production: "Production Tracker",
        prompts: "Prompt Library",
        sop: "SOP Library",
        knowledge: "Knowledge Base",
        knowledgeimport: "Knowledge Import",
        projects: "Projects",
        mission: "Mission Control",
        legalstudio: "Legal Studio",
        quizstudio: "Quiz Studio"
    };

    return (
        <header className="topbar">

            <div className="topbar-left">
                <h2>{pageTitles[currentPage]}</h2>

                <p>
                    ARJUN Enterprise Operating System
                </p>
            </div>

            <div className="topbar-right">

                <div className="status">
                    ● System Online
                </div>

            </div>

        </header>
    );
}