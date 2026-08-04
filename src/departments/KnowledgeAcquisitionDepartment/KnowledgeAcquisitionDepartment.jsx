import { useState } from "react";

import KnowledgeDashboard from "./ui/KnowledgeDashboard";
import EnterpriseResourceExplorer from "./ui/EnterpriseResourceExplorer";

import KnowledgeImport from "../../components/KnowledgeImport";

export default function KnowledgeAcquisitionDepartment() {

    const [activeTab, setActiveTab] = useState("DASHBOARD");

    function renderContent() {

        switch (activeTab) {

            case "DASHBOARD":
                return <KnowledgeDashboard />;

            case "IMPORT":
                return <KnowledgeImport />;

            case "RESOURCES":
                return <EnterpriseResourceExplorer />;

            case "VALIDATION":
                return (
                    <div>

                        <h2>
                            Enterprise Validation Center
                        </h2>

                        <p>
                            Coming Soon...
                        </p>

                    </div>
                );

            case "SEARCH":
                return (
                    <div>

                        <h2>
                            Enterprise Search
                        </h2>

                        <p>
                            Coming Soon...
                        </p>

                    </div>
                );

            case "ANALYTICS":
                return (
                    <div>

                        <h2>
                            Knowledge Analytics
                        </h2>

                        <p>
                            Coming Soon...
                        </p>

                    </div>
                );

            default:
                return <KnowledgeDashboard />;

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

                Enterprise gateway for acquiring,
                validating,
                classifying,
                searching
                and managing knowledge resources.

            </p>

            <hr />

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "20px"
                }}
            >

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
                    onClick={() => setActiveTab("SEARCH")}
                >
                    Search
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