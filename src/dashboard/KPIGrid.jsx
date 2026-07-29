import React from "react";
import KPICard from "./KPICard";

export default function KPIGrid() {

    const kpis = [

        {
            title: "Channels",
            value: "100",
            growth: "+12%"
        },

        {
            title: "Videos",
            value: "500000",
            growth: "+18%"
        },

        {
            title: "Revenue",
            value: "₹0",
            growth: "+0%"
        },

        {
            title: "Projects",
            value: "50",
            growth: "+5%"
        },

        {
            title: "AI Agents",
            value: "80",
            growth: "+22%"
        },

        {
            title: "Knowledge Assets",
            value: "1250",
            growth: "+14%"
        },

        {
            title: "Legal Cases",
            value: "32",
            growth: "+6%"
        },

        {
            title: "Quizzes",
            value: "875",
            growth: "+31%"
        }

    ];

    return (

        <div className="kpi-grid">

            {

                kpis.map((item, index) => (

                    <KPICard
                        key={index}
                        title={item.title}
                        value={item.value}
                        growth={item.growth}
                    />

                ))

            }

        </div>

    );

}