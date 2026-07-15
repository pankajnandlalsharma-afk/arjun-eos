import { useState } from "react";

export default function ExecutionDashboard() {

    const [workflow] = useState({

        project: "ARJUN",

        status: "Running",

        currentStage: "Business Intelligence",

        progress: 0

    });

    const [agents] = useState([

        "Business Agent",

        "Research Agent",

        "Knowledge Agent",

        "Quiz Agent",

        "Shorts Agent",

        "Publishing Agent",

        "Analytics Agent"

    ]);

    return (

        <div style={{ padding: "30px", fontFamily: "Arial" }}>

            <h1>ARJUN Mission Control</h1>

            <hr/>

            <h2>Workflow</h2>

            <p><strong>Project :</strong> {workflow.project}</p>

            <p><strong>Status :</strong> {workflow.status}</p>

            <p><strong>Current Stage :</strong> {workflow.currentStage}</p>

            <p><strong>Progress :</strong> {workflow.progress}%</p>

            <hr/>

            <h2>AI Agents</h2>

            <ul>

                {

                    agents.map(agent => (

                        <li key={agent}>

                            {agent}

                        </li>

                    ))

                }

            </ul>

            <hr/>

            <h2>Execution Timeline</h2>

            <p>No execution started.</p>

            <hr/>

            <h2>Production Queue</h2>

            <p>0 Jobs</p>

            <hr/>

            <h2>Publishing Queue</h2>

            <p>0 Jobs</p>

            <hr/>

            <h2>Analytics</h2>

            <p>Waiting for published content...</p>

        </div>

    );

}
