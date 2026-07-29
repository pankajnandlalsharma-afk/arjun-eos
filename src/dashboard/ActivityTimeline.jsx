import React from "react";

const activity=[

    {
        time:"09:30",
        event:"Quiz Generated"
    },

    {
        time:"09:10",
        event:"Knowledge Imported"
    },

    {
        time:"08:55",
        event:"Mission Completed"
    },

    {
        time:"08:40",
        event:"Video Published"
    },

    {
        time:"08:15",
        event:"Legal PDF Imported"
    }

];

export default function ActivityTimeline(){

    return(

        <section className="section">

            <div className="section-title">

                📅 Recent Activity

            </div>

            {

                activity.map((item,index)=>(

                    <div
                        key={index}
                        className="activity-item"
                    >

                        <strong>

                            {item.time}

                        </strong>

                        <span>

                            {item.event}

                        </span>

                    </div>

                ))

            }

        </section>

    );

}