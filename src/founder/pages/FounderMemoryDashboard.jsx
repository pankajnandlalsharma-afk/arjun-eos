import React, { useEffect, useMemo, useState } from "react";

import StatisticsCard from "../../enterprise/crud/StatisticsCard";
import ContentCard from "../../enterprise/layout/ContentCard";

import CaptureIdeaForm from "../components/CaptureIdeaForm";
import IdeaList from "../components/IdeaList";
import IdeaSearch from "../components/IdeaSearch";

import founderMemoryEngine from "../engine/FounderMemoryEngine";

import {
    eventBus,
    EventTypes
} from "../../enterprise/events";

export default function FounderMemoryDashboard() {

    const [ideas, setIdeas] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {

        const refreshIdeas = () => {

            setIdeas([...founderMemoryEngine.getIdeas()]);

        };

        refreshIdeas();

        eventBus.subscribe(
            EventTypes.IDEA_CREATED,
            refreshIdeas
        );

        eventBus.subscribe(
            EventTypes.MEMORY_CLEARED,
            refreshIdeas
        );

        return () => {

            eventBus.unsubscribe(
                EventTypes.IDEA_CREATED,
                refreshIdeas
            );

            eventBus.unsubscribe(
                EventTypes.MEMORY_CLEARED,
                refreshIdeas
            );

        };

    }, []);

    const filteredIdeas = useMemo(() => {

        const search = searchText.trim().toLowerCase();

        if (search === "") {

            return ideas;

        }

        return ideas.filter((idea) => {

            const title = (idea.title || "").toLowerCase();

            const description = (idea.description || "").toLowerCase();

            return (

                title.includes(search) ||

                description.includes(search)

            );

        });

    }, [ideas, searchText]);

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
                    title="Filtered"
                    value={filteredIdeas.length}
                    icon="🔍"
                    color="#0f766e"
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
                    <li>✅ Persistent Storage</li>
                    <li>✅ Live Search</li>

                </ul>

            </ContentCard>

            {/* ==========================================
                CAPTURE IDEA
            =========================================== */}

            <ContentCard title="Capture New Idea">

                <CaptureIdeaForm />

            </ContentCard>

            {/* ==========================================
                SEARCH
            =========================================== */}

            <ContentCard title="Search Ideas">

                <IdeaSearch

                    value={searchText}

                    onChange={setSearchText}

                />

            </ContentCard>

            {/* ==========================================
                IDEA LIST
            =========================================== */}

            <ContentCard title="Captured Ideas">

                <IdeaList ideas={filteredIdeas} />

            </ContentCard>

        </div>

    );

}