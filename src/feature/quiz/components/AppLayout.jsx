/**
 * ====================================================
 * ARJUN EOS
 * App Layout
 *
 * Description:
 * Enterprise application shell.
 *
 * Layer:
 * React Component
 * ====================================================
 */

import React from "react";

const sidebarStyle = {
    width: "240px",
    background: "#1f2937",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box"
};

const headerStyle = {
    height: "64px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    fontSize: "20px",
    fontWeight: "bold",
    background: "#ffffff"
};

const contentStyle = {
    padding: "24px",
    flex: 1,
    overflow: "auto"
};

export default function AppLayout({ children }) {

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh"
            }}
        >

            <aside style={sidebarStyle}>

                <h2>ARJUN EOS</h2>

                <hr />

                <p>🏠 Dashboard</p>

                <p>🚀 Missions</p>

                <p>📚 Knowledge</p>

                <p>🔬 Research</p>

                <p>⚖️ Legal</p>

                <p>🎬 Production</p>

                <p>💰 Finance</p>

                <p>🤖 AI Agents</p>

            </aside>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                }}
            >

                <header style={headerStyle}>
                    ARJUN EOS Enterprise Platform
                </header>

                <main style={contentStyle}>
                    {children}
                </main>

            </div>

        </div>

    );

}