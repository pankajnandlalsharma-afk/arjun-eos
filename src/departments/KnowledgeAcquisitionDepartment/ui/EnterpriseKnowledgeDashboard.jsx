import { useState } from "react";

import KnowledgeDashboard from "./ui/KnowledgeDashboard";
import EnterpriseKnowledgeDashboard from "./ui/EnterpriseKnowledgeDashboard";
import EnterpriseResourceExplorer from "./ui/EnterpriseResourceExplorer";
import EnterpriseValidationCenter from "./ui/EnterpriseValidationCenter";
import EnterpriseClassificationCenter from "./ui/EnterpriseClassificationCenter";
import EnterpriseSearchCenter from "./ui/EnterpriseSearchCenter";
import EnterpriseAnalyticsCenter from "./ui/EnterpriseAnalyticsCenter";

import AIKnowledgeExplorer from "../../components/AIKnowledgeExplorer";
import KnowledgeImport from "../../components/KnowledgeImport";

export default function KnowledgeAcquisitionDepartment() {

    const [activeTab, setActiveTab] = useState("KNOWLEDGE");

    function renderContent() {

        switch (activeTab) {

            case "KNOWLEDGE":
                return <EnterpriseKnowledgeDashboard />;

            case "DASHBOARD":
                return <KnowledgeDashboard />;

            case "IMPORT":
                return <KnowledgeImport />;

            case "RESOURCES":
                return <EnterpriseResourceExplorer />;

            case "VALIDATION":
                return <EnterpriseValidationCenter />;

            case "CLASSIFICATION":
                return <EnterpriseClassificationCenter />;

            case "SEARCH":
                return <EnterpriseSearchCenter />;

            case "AI_EXPLORER":
                return <AIKnowledgeExplorer />;

            case "ANALYTICS":
                return <EnterpriseAnalyticsCenter />;

            default:
                return <EnterpriseKnowledgeDashboard />;

        }

    }

    return (

        <div
            style={{
                padding: "20px",
                fontFamily: "Arial"
            }}
        >

            <h1>

                Knowledge Acquisition Department

            </h1>

            <p>

                Enterprise platform for importing,
                validating,
                classifying,
                extracting,
                connecting,
                searching,
                analyzing,
                and exploring organizational knowledge.

            </p>

            <hr />

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "20px"
                }}
            >

                <button
                    onClick={() => setActiveTab("KNOWLEDGE")}
                >
                    Knowledge
                </button>

                <button
                    onClick={() => setActiveTab("DASHBOARD")}
                >
                    Dashboard
                </button>

                <button
                    onClick={() => setActiveTab("IMPORT")}
                >
                    Import
                </button>

                <button
                    onClick={() => setActiveTab("RESOURCES")}
                >
                    Resources
                </button>

                <button
                    onClick={() => setActiveTab("VALIDATION")}
                >
                    Validation
                </button>

                <button
                    onClick={() => setActiveTab("CLASSIFICATION")}
                >
                    Classification
                </button>

                <button
                    onClick={() => setActiveTab("SEARCH")}
                >
                    Search
                </button>

                <button
                    onClick={() => setActiveTab("AI_EXPLORER")}
                >
                    AI Explorer
                </button>

                <button
                    onClick={() => setActiveTab("ANALYTICS")}
                >
                    Analytics
                </button>

            </div>

            <hr />

            {renderContent()}

        </div>

    );

}