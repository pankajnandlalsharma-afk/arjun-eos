import React from "react";

const menu = [
    { id: "dashboard", title: "🏠 Dashboard" },

    { id: "mission", title: "🎯 Mission Control" },

    { id: "founderMemory", title: "🧠 Founder Memory" },

    { id: "knowledge", title: "📖 Knowledge Base" },

    { id: "knowledge-import", title: "📥 Knowledge Import" },

    { id: "projects", title: "📁 Projects" },

    { id: "quiz", title: "📝 Quiz Studio" },

    { id: "legal", title: "⚖️ Legal Studio" },

    { id: "ai", title: "🤖 AI Agents" },

    { id: "segment", title: "🏭 Segment Factory" },

    { id: "channels", title: "📺 Channel Explorer" },

    { id: "production", title: "🎬 Production Tracker" },

    { id: "prompts", title: "🧠 Prompt Library" },

    { id: "sops", title: "📚 SOP Library" }
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