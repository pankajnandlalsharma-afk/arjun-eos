import React, { useEffect, useState } from "react";

import StatisticsCard from "../../enterprise/crud/StatisticsCard";
import ContentCard from "../../enterprise/layout/ContentCard";

import CaptureIdeaForm from "../components/CaptureIdeaForm";
import IdeaList from "../components/IdeaList";

import founderMemoryEngine from "../engine/FounderMemoryEngine";
import eventBus from "../../enterprise/events/EventBus";

export default function FounderMemoryDashboard() {

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {

        const refreshIdeas = () => {

            setIdeas([...founderMemoryEngine.getIdeas()]);

        };

        refreshIdeas();

        eventBus.subscribe("idea.created", refreshIdeas);
        eventBus.subscribe("memory.cleared", refreshIdeas);

        return () => {

            eventBus.unsubscribe("idea.created", refreshIdeas);
            eventBus.unsubscribe("memory.cleared", refreshIdeas);

        };

    }, []);

    return (

        <div
            style={{
                padding: "30px",
                maxWidth: "1200px",
                margin: "0 auto"
            }}
        >

            {/* ==========================================
                PAGE HEADER
            =========================================== */}

            <h1
                style={{
                    marginBottom: "5px"
                }}
            >
                🧠 Founder Memory
            </h1>

            <p
                style={{
                    color: "#666",
                    marginBottom: "30px"
                }}
            >
                Enterprise Knowledge Repository for ARJUN EOS
            </p>

            {/* ==========================================
                ENTERPRISE STATISTICS
            =========================================== */}

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "30px",
                    flexWrap: "wrap"
                }}
            >

                <StatisticsCard
                    title="Ideas"
                    value={ideas.length}
                    icon="💡"
                    color="#2563eb"
                />

                <StatisticsCard
                    title="Decisions"
                    value={0}
                    icon="📜"
                    color="#16a34a"
                />

                <StatisticsCard
                    title="Knowledge Assets"
                    value={ideas.length}
                    icon="📚"
                    color="#9333ea"
                />

            </div>

            {/* ==========================================
                ARCHITECTURE STATUS
            =========================================== */}

            <ContentCard title="Architecture Status">

                <ul>

                    <li>✅ Domain Models</li>
                    <li>✅ Repository Layer</li>
                    <li>✅ Service Layer</li>
                    <li>✅ Controller Layer</li>
                    <li>✅ Engine Layer</li>
                    <li>✅ Enterprise Event Bus</li>

                </ul>

            </ContentCard>

            {/* ==========================================
                CAPTURE IDEA
            =========================================== */}

            <ContentCard title="Capture New Idea">

                <CaptureIdeaForm />

            </ContentCard>

            {/* ==========================================
                IDEA LIST
            =========================================== */}

            <ContentCard title="Captured Ideas">

                <IdeaList ideas={ideas} />

            </ContentCard>

        </div>

    );

}