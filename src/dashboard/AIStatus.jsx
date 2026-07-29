import React from "react";

const agents=[

    {
        name:"Knowledge Agent",
        status:"Running",
        queue:12,
        success:"99%"
    },

    {
        name:"Research Agent",
        status:"Running",
        queue:6,
        success:"98%"
    },

    {
        name:"Quiz Agent",
        status:"Running",
        queue:18,
        success:"97%"
    },

    {
        name:"Video Agent",
        status:"Idle",
        queue:0,
        success:"96%"
    },

    {
        name:"Publishing Agent",
        status:"Running",
        queue:4,
        success:"99%"
    },

    {
        name:"Legal Agent",
        status:"Running",
        queue:2,
        success:"98%"
    },

    {
        name:"Finance Agent",
        status:"Idle",
        queue:0,
        success:"100%"
    }

];

export default function AIStatus(){

    return(

        <section className="section">

            <div className="section-title">

                🤖 AI Agent Status

            </div>

            <div className="ai-grid">

                {

                    agents.map((agent,index)=>(

                        <div
                            key={index}
                            className="ai-card"
                        >

                            <h3>{agent.name}</h3>

                            <br/>

                            <p>

                                Status :
                                <strong> {agent.status}</strong>

                            </p>

                            <p>

                                Queue :
                                <strong> {agent.queue}</strong>

                            </p>

                            <p>

                                Success :
                                <strong> {agent.success}</strong>

                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}