import React from "react";

const pipeline = [

    "Research",

    "Knowledge",

    "Script",

    "Voice",

    "Video",

    "Publishing",

    "Analytics"

];

export default function Pipeline() {

    return (

        <section className="section">

            <div className="section-title">

                🚀 Production Pipeline

            </div>

            <div className="pipeline">

                {

                    pipeline.map((step,index)=>(

                        <div
                            key={index}
                            className="pipeline-step"
                        >

                            {step}

                        </div>

                    ))

                }

            </div>

        </section>

    );

}