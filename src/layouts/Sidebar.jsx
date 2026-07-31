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
            { id: "subjects", icon: "📚", title: "Subject Registry" },
            { id: "modules", icon: "🧩", title: "Module Registry" },
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
    const [search, setSearch] = useState("");

    const filteredMenu = useMemo(() => {

        if (!search.trim()) return menu;

        return menu
            .map(section => ({
                ...section,
                items: section.items.filter(item =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                )
            }))
            .filter(section => section.items.length > 0);

    }, [search]);

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

            {!collapsed && (

                <div style={{ padding: "12px" }}>

                    <input
                        type="text"
                        placeholder="Search modules..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="enterprise-search"
                    />

                </div>

            )}

            <div className="sidebar-scroll">

                {filteredMenu.map(section => (

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

                            <strong>Current Module</strong>

                        </div>

                        <div>{currentTitle}</div>

                        <br />

                        <div>
                            Modules : {menu.reduce((total, section) => total + section.items.length, 0)}
                        </div>

                        <div>
                            Sections : {menu.length}
                        </div>

                        <br />

                        <div>

                            Enterprise Shell v1.1

                        </div>

                    </>

                )}

            </div>

        </aside>

    );

}