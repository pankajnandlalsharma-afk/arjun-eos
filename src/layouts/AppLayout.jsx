import React from "react";

import "./layout.css";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppLayout({
    currentPage,
    setCurrentPage,
    children
}) {

    return (

        <div className="enterprise-layout">

            <Sidebar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <div className="main-content">

                <TopBar
                    currentPage={currentPage}
                />

                <main className="workspace">

                    {children}

                </main>

            </div>

        </div>

    );

}