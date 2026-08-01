/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Studio
 * Capture Quiz Form
 * Version 1.1
 * ============================================================
 */

import React, { useState } from "react";

import Quiz from "../models/Quiz";
import quizEngine from "../engine/QuizEngine";

import { notificationService } from "../../enterprise/notifications";

export default function CaptureQuizForm({ onQuizCreated }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("General");
    const [difficulty, setDifficulty] = useState("Medium");

    const [isSaving, setIsSaving] = useState(false);

    function resetForm() {

        setTitle("");
        setDescription("");
        setCategory("General");
        setDifficulty("Medium");

    }

    async function createQuiz() {

        const cleanTitle = title.trim();

        if (!cleanTitle) {

            notificationService.warning(
                "Please enter a quiz title."
            );

            return;

        }

        setIsSaving(true);

        try {

            const quiz = new Quiz({

                title: cleanTitle,

                description: description.trim(),

                category,

                difficulty

            });

            quizEngine.createQuiz(quiz);

            notificationService.success(
                "Quiz created successfully."
            );

            resetForm();

            if (onQuizCreated) {

                onQuizCreated();

            }

        } catch (error) {

            console.error(error);

            notificationService.error(
                error.message || "Unable to create quiz."
            );

        } finally {

            setIsSaving(false);

        }

    }

    return (

        <div className="capture-quiz-form">

            <h2>Create Quiz</h2>

            <input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Quiz Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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

            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>

            <button
                onClick={createQuiz}
                disabled={isSaving}
            >
                {isSaving ? "Creating..." : "Create Quiz"}
            </button>

        </div>

    );

}