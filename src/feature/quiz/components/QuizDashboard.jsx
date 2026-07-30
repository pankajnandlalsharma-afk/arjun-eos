/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz Dashboard
 * Version 1.0
 * ============================================================
 */

import React, { useState } from "react";

import CaptureQuizForm from "./CaptureQuizForm";
import QuizList from "./QuizList";

export default function QuizDashboard() {

    const [refreshKey, setRefreshKey] = useState(0);

    function refreshDashboard() {

        setRefreshKey((previousKey) => previousKey + 1);

    }

    return (

        <div className="quiz-dashboard">

            <h1>Quiz Studio</h1>

            <CaptureQuizForm
                onQuizCreated={refreshDashboard}
            />

            <hr />

            <QuizList
                key={refreshKey}
            />

        </div>

    );

}