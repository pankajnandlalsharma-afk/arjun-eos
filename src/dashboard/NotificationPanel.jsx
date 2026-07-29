import React from "react";

const notifications = [

    "Knowledge imported successfully",

    "Quiz generated successfully",

    "Video rendering completed",

    "Publishing completed",

    "Mission completed",

    "Research report generated"

];

export default function NotificationPanel() {

    return (

        <section className="section">

            <div className="section-title">

                🔔 Notifications

            </div>

            {

                notifications.map((item,index)=>(

                    <div
                        key={index}
                        className="notification"
                    >

                        ✓ {item}

                    </div>

                ))

            }

        </section>

    );

}