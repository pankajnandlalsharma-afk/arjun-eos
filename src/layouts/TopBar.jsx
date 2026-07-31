import React, { useEffect, useState } from "react";

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

    const [now, setNow] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setNow(new Date());

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const title = pageTitles[currentPage] || "Dashboard";

    const date = now.toLocaleDateString("en-IN", {

        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"

    });

    const time = now.toLocaleTimeString("en-IN");

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

                <div className="page-description">

                    Enterprise Operating System Command Center

                </div>

            </div>

            <div className="topbar-center">

                <div className="search-wrapper">

                    <span className="search-icon">🔍</span>

                    <input
                        className="enterprise-search"
                        placeholder="Search modules, projects, knowledge...   (Ctrl + K)"
                    />

                </div>

            </div>

            <div className="topbar-right">

                <div className="system-health">

                    <span className="health-dot"></span>

                    <span>System Healthy</span>

                </div>

                <div className="system-info">

                    <div>CPU 14%</div>
                    <div>RAM 42%</div>
                    <div>Disk 58%</div>

                </div>

                <div className="date-time">

                    <div>{date}</div>

                    <div>{time}</div>

                </div>

                <button
                    className="topbar-button"
                    title="Notifications">

                    🔔

                </button>

                <button
                    className="topbar-button"
                    title="Settings">

                    ⚙️

                </button>

            </div>

        </header>

    );

}