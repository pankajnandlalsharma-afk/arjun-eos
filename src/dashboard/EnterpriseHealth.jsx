import React from "react";

const health=[

    {
        title:"Database",
        value:"Healthy"
    },

    {
        title:"Storage",
        value:"87%"
    },

    {
        title:"Memory",
        value:"68%"
    },

    {
        title:"CPU",
        value:"24%"
    },

    {
        title:"Workflow Queue",
        value:"12"

    },

    {
        title:"AI Queue",
        value:"42"

    }

];

export default function EnterpriseHealth(){

    return(

        <section className="section">

            <div className="section-title">

                💚 Enterprise Health

            </div>

            <div className="health-grid">

                {

                    health.map((item,index)=>(

                        <div
                            key={index}
                            className="health-item"
                        >

                            <h3>

                                {item.title}

                            </h3>

                            <br/>

                            <strong>

                                {item.value}

                            </strong>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}