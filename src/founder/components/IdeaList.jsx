import React from "react";

export default function IdeaList({ ideas = [] }) {

    if (ideas.length === 0) {
        return (
            <div
                style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#6b7280"
                }}
            >
                No ideas captured yet.
            </div>
        );
    }

    return (
        <div>
            {ideas.map((idea) => (
                <div
                    key={idea.id}
                    style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        padding: "16px",
                        marginBottom: "12px"
                    }}
                >
                    <h3 style={{ margin: 0 }}>
                        {idea.title}
                    </h3>

                    <p style={{ marginTop: "8px" }}>
                        {idea.description}
                    </p>
                </div>
            ))}
        </div>
    );
}