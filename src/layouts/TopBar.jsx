import React from "react";

const pageTitles = {
    dashboard: "Dashboard",
    ai: "AI Agents",
    segment: "Segment Factory",
    channels: "Channel Explorer",
    production: "Production Tracker",
    prompts: "Prompt Library",
    sops: "SOP Library",
    knowledge: "Knowledge Base",
    "knowledge-import": "Knowledge Import",
    projects: "Projects",
    mission: "Mission Control",
    legal: "Legal Studio",
    quiz: "Quiz Studio",
    founderMemory: "Founder Memory"
};

export default function TopBar({ currentPage }) {

    const title = pageTitles[currentPage] || "Dashboard";

    return (

        <header className="topbar">

            <div className="topbar-left">

                <div className="breadcrumb">

                    ARJUN EOS
                    <span className="separator"> / </span>

                    Enterprise
                    <span className="separator"> / </span>

                    <strong>{title}</strong>

                </div>

                <h2>{title}</h2>

            </div>

            <div className="topbar-center">

                <input
                    className="enterprise-search"
                    placeholder="Search modules..."
                />

            </div>

            <div className="topbar-right">

                <div className="status online">

                    ● System Healthy

                </div>

            </div>

        </header>

    );

}