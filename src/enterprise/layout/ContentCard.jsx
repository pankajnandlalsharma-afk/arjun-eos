import React from "react";

export default function ContentCard({

    title,

    children,

    actions = null

}) {

    return (

        <div
            style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
        >

            {
                title && (

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "20px"
                        }}
                    >

                        <h2
                            style={{
                                margin: 0,
                                fontSize: "22px"
                            }}
                        >
                            {title}
                        </h2>

                        {actions}

                    </div>

                )
            }

            {children}

        </div>

    );

}