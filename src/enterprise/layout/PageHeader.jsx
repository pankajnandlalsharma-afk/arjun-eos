import React from "react";

export default function PageHeader({
    title,
    subtitle,
    icon = "📋",
    actions = null
}) {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
                flexWrap: "wrap",
                gap: "20px"
            }}
        >

            <div>

                <h1
                    style={{
                        margin: 0,
                        fontSize: "32px"
                    }}
                >
                    {icon} {title}
                </h1>

                <p
                    style={{
                        marginTop: "8px",
                        color: "#666"
                    }}
                >
                    {subtitle}
                </p>

            </div>

            <div>

                {actions}

            </div>

        </div>

    );

}