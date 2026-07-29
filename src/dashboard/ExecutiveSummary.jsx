import React from "react";

export default function ExecutiveSummary() {

    const today = new Date();

    const hour = today.getHours();

    let greeting = "Good Evening";

    if (hour < 12) {

        greeting = "Good Morning";

    } else if (hour < 17) {

        greeting = "Good Afternoon";

    }

    return (

        <section className="executive-summary">

            <h1>

                🚀 {greeting}, Pankaj

            </h1>

            <p>

                Welcome to the ARJUN Enterprise Operating System.

            </p>

            <br />

            <p>

                Mission:
                Build the world's most powerful Enterprise Operating System
                for Knowledge, Quiz, Legal, Cartoon, Finance,
                Education and AI Automation.

            </p>

        </section>

    );

}