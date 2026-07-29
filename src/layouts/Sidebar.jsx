import React from "react";

const menu = [
    { id: "dashboard", title: "🏠 Dashboard" },
    { id: "aiagents", title: "🤖 AI Agents" },
    { id: "segments", title: "🏭 Segment Factory" },
    { id: "channels", title: "📺 Channel Explorer" },
    { id: "production", title: "🎬 Production Tracker" },
    { id: "prompts", title: "🧠 Prompt Library" },
    { id: "sop", title: "📚 SOP Library" },
    { id: "knowledge", title: "📖 Knowledge Base" },
    { id: "knowledgeimport", title: "📥 Knowledge Import" },
    { id: "projects", title: "📁 Projects" },
    { id: "mission", title: "🎯 Mission Control" },
    { id: "legalstudio", title: "⚖️ Legal Studio" },
    { id: "quizstudio", title: "📝 Quiz Studio" }
];

export default function Sidebar({
    currentPage,
    setCurrentPage
}) {

    return (
        <aside className="sidebar">

            <div className="sidebar-header">

                <div className="sidebar-title">
                    ARJUN EOS
                </div>

                <div className="sidebar-subtitle">
                    Enterprise Operating System
                </div>

            </div>

            <div className="sidebar-menu">

                {
                    menu.map(item => (

                        <button
                            key={item.id}
                            className={
                                currentPage === item.id
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setCurrentPage(item.id)
                            }
                        >
                            {item.title}
                        </button>

                    ))
                }

            </div>

            <div className="sidebar-footer">

                Version 1.0

            </div>

        </aside>
    );
}