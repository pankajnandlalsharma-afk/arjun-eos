import React, { useMemo, useState } from "react";

const menu = [
    {
        section: "ENTERPRISE",
        items: [
            { id: "dashboard", icon: "🏠", title: "Dashboard" },
            { id: "mission", icon: "🎯", title: "Mission Control" },
            { id: "founderMemory", icon: "🧠", title: "Founder Memory" }
        ]
    },
    {
        section: "KNOWLEDGE",
        items: [
            { id: "knowledge", icon: "📖", title: "Knowledge Base" },
            { id: "knowledge-import", icon: "📥", title: "Knowledge Import" },
            { id: "projects", icon: "📁", title: "Projects" }
        ]
    },
    {
        section: "QUIZ ECOSYSTEM",
        items: [
            { id: "quiz", icon: "📝", title: "Quiz Studio" },
            { id: "segment", icon: "🏭", title: "Segment Factory" },
            { id: "channels", icon: "📺", title: "Channel Explorer" },
            { id: "production", icon: "🎬", title: "Production Tracker" }
        ]
    },
    {
        section: "AI & AUTOMATION",
        items: [
            { id: "ai", icon: "🤖", title: "AI Agents" },
            { id: "prompts", icon: "💡", title: "Prompt Library" },
            { id: "sops", icon: "📚", title: "SOP Library" }
        ]
    },
    {
        section: "LEGAL",
        items: [
            { id: "legal", icon: "⚖️", title: "Legal Studio" }
        ]
    }
];

export default function Sidebar({
    currentPage,
    setCurrentPage
}) {

    const [collapsed, setCollapsed] = useState(false);

    const currentTitle = useMemo(() => {
        for (const group of menu) {
            const page = group.items.find(i => i.id === currentPage);
            if (page) return page.title;
        }
        return "Dashboard";
    }, [currentPage]);

    return (

        <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>

            <div className="sidebar-header">

                <div>

                    <div className="sidebar-title">

                        {collapsed ? "AE" : "ARJUN EOS"}

                    </div>

                    {!collapsed && (

                        <div className="sidebar-subtitle">

                            Enterprise Operating System

                        </div>

                    )}

                </div>

                <button
                    className="collapse-btn"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? "»" : "«"}
                </button>

            </div>

            <div className="sidebar-scroll">

                {menu.map(section => (

                    <div
                        key={section.section}
                        className="sidebar-section"
                    >

                        {!collapsed && (

                            <div className="sidebar-section-title">

                                {section.section}

                            </div>

                        )}

                        {section.items.map(item => (

                            <button
                                key={item.id}
                                className={
                                    currentPage === item.id
                                        ? "menu-item active"
                                        : "menu-item"
                                }
                                onClick={() =>
                                    setCurrentPage(item.id)
                                }
                            >

                                <span className="menu-icon">

                                    {item.icon}

                                </span>

                                {!collapsed && (

                                    <span>

                                        {item.title}

                                    </span>

                                )}

                            </button>

                        ))}

                    </div>

                ))}

            </div>

            <div className="sidebar-footer">

                {!collapsed && (

                    <>
                        <div>

                            <strong>Current</strong>

                        </div>

                        <div>{currentTitle}</div>

                        <br />

                        <div>

                            Enterprise Shell v1.0

                        </div>

                    </>

                )}

            </div>

        </aside>

    );

}