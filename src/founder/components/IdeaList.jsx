import React, { useState } from "react";

import founderMemoryEngine from "../engine/FounderMemoryEngine";
import { notificationService } from "../../enterprise/notifications";

export default function IdeaList({ ideas = [] }) {

    const [editingId, setEditingId] = useState(null);

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    function startEditing(idea) {

        setEditingId(idea.id);

        setTitle(idea.title);

        setDescription(idea.description);

    }

    function cancelEditing() {

        setEditingId(null);

        setTitle("");

        setDescription("");

    }

    function saveIdea() {

        const trimmedTitle = title.trim();

        const trimmedDescription = description.trim();

        if (!trimmedTitle) {

            notificationService.warning(
                "Please enter an idea title."
            );

            return;

        }

        founderMemoryEngine.updateIdea({

            id: editingId,

            title: trimmedTitle,

            description: trimmedDescription

        });

        notificationService.success(
            "Idea updated successfully."
        );

        cancelEditing();

    }

    function deleteIdea(id) {

        const confirmed = window.confirm(
            "Delete this idea?"
        );

        if (!confirmed) {

            return;

        }

        founderMemoryEngine.deleteIdea(id);

        notificationService.success(
            "Idea deleted successfully."
        );

    }

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

            {ideas.map((idea) => {

                const isEditing = editingId === idea.id;

                return (

                    <div
                        key={idea.id}
                        style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            padding: "16px",
                            marginBottom: "12px"
                        }}
                    >

                        {isEditing ? (

                            <>

                                <input
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        marginBottom: "10px"
                                    }}
                                />

                                <textarea
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    rows={4}
                                    style={{
                                        width: "100%",
                                        padding: "10px"
                                    }}
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "15px"
                                    }}
                                >

                                    <button
                                        onClick={saveIdea}
                                    >
                                        💾 Save
                                    </button>

                                    <button
                                        onClick={cancelEditing}
                                    >
                                        ❌ Cancel
                                    </button>

                                </div>

                            </>

                        ) : (

                            <>

                                <h3
                                    style={{
                                        margin: 0
                                    }}
                                >
                                    {idea.title}
                                </h3>

                                <p
                                    style={{
                                        marginTop: "8px"
                                    }}
                                >
                                    {idea.description}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        marginTop: "15px"
                                    }}
                                >

                                    <button
                                        onClick={() =>
                                            startEditing(idea)
                                        }
                                    >
                                        ✏️ Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            deleteIdea(idea.id)
                                        }
                                    >
                                        🗑️ Delete
                                    </button>

                                </div>

                            </>

                        )}

                    </div>

                );

            })}

        </div>

    );

}