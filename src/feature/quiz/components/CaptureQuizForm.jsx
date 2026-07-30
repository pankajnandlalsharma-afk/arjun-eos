/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Capture Quiz Form
 * Version 1.0
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

    function createQuiz() {

        const trimmedTitle = title.trim();

        if (!trimmedTitle) {

            notificationService.warning(
                "Please enter a quiz title."
            );

            return;

        }

        const quiz = new Quiz({

            title: trimmedTitle,

            description: description.trim(),

            category,

            difficulty

        });

        quizEngine.createQuiz(quiz);

        notificationService.success(
            "Quiz created successfully."
        );

        setTitle("");

        setDescription("");

        setCategory("General");

        setDifficulty("Medium");

        if (onQuizCreated) {

            onQuizCreated();

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

            <button onClick={createQuiz}>

                Create Quiz

            </button>

        </div>

    );

}