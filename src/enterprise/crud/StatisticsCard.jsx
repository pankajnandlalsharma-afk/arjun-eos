import React from "react";

export default function StatisticsCard({

    title,

    value,

    icon,

    color = "#2563eb"

}) {

    return (

        <div
            style={{
                flex: 1,
                minWidth: 220,
                background: "#fff",
                borderRadius: 12,
                padding: 20,
                borderLeft: `6px solid ${color}`,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}
        >

            <div
                style={{
                    fontSize: 14,
                    color: "#666"
                }}
            >
                {icon} {title}
            </div>

            <div
                style={{
                    marginTop: 12,
                    fontSize: 34,
                    fontWeight: "bold"
                }}
            >
                {value}
            </div>

        </div>

    );

}