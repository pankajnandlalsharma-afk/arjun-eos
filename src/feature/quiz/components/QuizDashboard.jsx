/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Studio
 * Quiz Dashboard
 * Version 1.1
 * ============================================================
 */

import React, { useState, useCallback } from "react";

import CaptureQuizForm from "./CaptureQuizForm";
import QuizList from "./QuizList";

export default function QuizDashboard() {

    const [refreshKey, setRefreshKey] = useState(0);

    /**
     * Refresh dashboard after a new quiz is created.
     */
    const handleQuizCreated = useCallback(() => {

        setRefreshKey((previousKey) => previousKey + 1);

    }, []);

    return (

        <section className="quiz-dashboard">

            <header className="quiz-dashboard-header">

                <h1>Quiz Studio</h1>

                <p>
                    Create, manage and organize quizzes from one central
                    enterprise dashboard.
                </p>

            </header>

            <CaptureQuizForm
                onQuizCreated={handleQuizCreated}
            />

            <hr />

            <QuizList
                key={refreshKey}
            />

        </section>

    );

}