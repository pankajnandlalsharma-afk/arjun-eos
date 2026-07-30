import React, { useState } from "react";

import { enterpriseLogger } from "../../enterprise/logging";
import { notificationService } from "../../enterprise/notifications";

import founderMemoryEngine from "../engine/FounderMemoryEngine";
import Idea from "../models/Idea";

export default function CaptureIdeaForm() {

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [category, setCategory] = useState("General");

    const [priority, setPriority] = useState("Medium");

    function saveIdea() {

        const trimmedTitle = title.trim();

        const trimmedDescription = description.trim();

        if (!trimmedTitle) {

            notificationService.warning(
                "Please enter an idea title."
            );

            return;

        }

        const idea = new Idea({

            title: trimmedTitle,

            description: trimmedDescription,

            category,

            priority

        });

        founderMemoryEngine.captureIdea(idea);

        enterpriseLogger.info(
            "Idea created successfully.",
            idea
        );

        enterpriseLogger.debug(
            "Current ideas in Founder Memory.",
            founderMemoryEngine.getIdeas()
        );

        notificationService.success(
            "Idea captured successfully."
        );

        setTitle("");

        setDescription("");

        setCategory("General");

        setPriority("Medium");

    }

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: 20,
                borderRadius: 10,
                marginTop: 20,
                background: "#ffffff"
            }}
        >

            <h2>💡 Capture New Idea</h2>

            <input
                type="text"
                placeholder="Idea Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: "100%",
                    padding: 10,
                    marginBottom: 15,
                    fontSize: 16
                }}
            />

            <textarea
                placeholder="Describe your idea..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                style={{
                    width: "100%",
                    padding: 10,
                    marginBottom: 15,
                    fontSize: 15
                }}
            />

            <div
                style={{
                    display: "flex",
                    gap: 15,
                    marginBottom: 15
                }}
            >

                <div style={{ flex: 1 }}>

                    <label>Category</label>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                            width: "100%",
                            padding: 10,
                            marginTop: 5
                        }}
                    >
                        <option>General</option>
                        <option>Business</option>
                        <option>Technology</option>
                        <option>Legal</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Operations</option>
                        <option>AI</option>
                    </select>

                </div>

                <div style={{ flex: 1 }}>

                    <label>Priority</label>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        style={{
                            width: "100%",
                            padding: 10,
                            marginTop: 5
                        }}
                    >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>

                </div>

            </div>

            <button
                onClick={saveIdea}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
            >
                Save Idea
            </button>

        </div>

    );

}