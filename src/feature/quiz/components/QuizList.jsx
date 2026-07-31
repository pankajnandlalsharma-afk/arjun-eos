/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Operating System
 * Quiz Studio
 * Quiz Library
 * Version 1.1
 * ============================================================
 */

import React, { useEffect, useState } from "react";

import quizEngine from "../engine/QuizEngine";
import { notificationService } from "../../enterprise/notifications";

export default function QuizList() {

    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

        loadQuizzes();

    }, []);

    function loadQuizzes() {

        setLoading(true);

        try {

            const data = quizEngine.getAllQuizzes() || [];

            data.sort((a, b) => {

                if (!a.id || !b.id) return 0;

                return String(b.id).localeCompare(String(a.id));

            });

            setQuizzes(data);

        } finally {

            setLoading(false);

        }

    }

    function startEditing(quiz) {

        setEditingId(quiz.id);

        setTitle(quiz.title || "");

        setDescription(quiz.description || "");

    }

    function cancelEditing() {

        setEditingId(null);

        setTitle("");

        setDescription("");

    }

    function saveQuiz() {

        const cleanTitle = title.trim();

        if (!cleanTitle) {

            notificationService.warning(
                "Quiz title is required."
            );

            return;

        }

        setSaving(true);

        try {

            quizEngine.updateQuiz({

                id: editingId,

                title: cleanTitle,

                description: description.trim()

            });

            notificationService.success(
                "Quiz updated successfully."
            );

            cancelEditing();

            loadQuizzes();

        } catch (error) {

            console.error(error);

            notificationService.error(
                "Unable to update quiz."
            );

        } finally {

            setSaving(false);

        }

    }

    function deleteQuiz(id) {

        if (!window.confirm("Delete this quiz?")) {

            return;

        }

        try {

            quizEngine.deleteQuiz(id);

            notificationService.success(
                "Quiz deleted successfully."
            );

            loadQuizzes();

        } catch (error) {

            console.error(error);

            notificationService.error(
                "Unable to delete quiz."
            );

        }

    }

    if (loading) {

        return <p>Loading quizzes...</p>;

    }

    if (quizzes.length === 0) {

        return (

            <div>

                <h2>Quiz Library</h2>

                <p>No quizzes created yet.</p>

            </div>

        );

    }

    return (

        <div>

            <h2>Quiz Library ({quizzes.length})</h2>

            {quizzes.map((quiz) => {

                const isEditing = editingId === quiz.id;

                return (

                    <div
                        key={quiz.id}
                        style={{
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            padding: "16px",
                            marginBottom: "12px"
                        }}
                    >

                        {isEditing ? (

                            <>

                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                                <br /><br />

                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <br /><br />

                                <button
                                    disabled={saving}
                                    onClick={saveQuiz}
                                >
                                    {saving ? "Saving..." : "💾 Save"}
                                </button>

                                {" "}

                                <button
                                    onClick={cancelEditing}
                                >
                                    Cancel
                                </button>

                            </>

                        ) : (

                            <>

                                <h3>{quiz.title}</h3>

                                <p>{quiz.description}</p>

                                <p><strong>Category:</strong> {quiz.category}</p>

                                <p><strong>Difficulty:</strong> {quiz.difficulty}</p>

                                <button
                                    onClick={() => startEditing(quiz)}
                                >
                                    ✏️ Edit
                                </button>

                                {" "}

                                <button
                                    onClick={() => deleteQuiz(quiz.id)}
                                >
                                    🗑️ Delete
                                </button>

                            </>

                        )}

                    </div>

                );

            })}

        </div>

    );

}