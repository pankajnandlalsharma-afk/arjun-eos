/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz List
 * Version 1.0
 * ============================================================
 */

import React, { useEffect, useState } from "react";

import quizEngine from "../engine/QuizEngine";

import { notificationService } from "../../enterprise/notifications";

export default function QuizList() {

    const [quizzes, setQuizzes] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    useEffect(() => {

        loadQuizzes();

    }, []);

    function loadQuizzes() {

        setQuizzes(
            quizEngine.getAllQuizzes()
        );

    }

    function startEditing(quiz) {

        setEditingId(quiz.id);

        setTitle(quiz.title);

        setDescription(quiz.description);

    }

    function cancelEditing() {

        setEditingId(null);

        setTitle("");

        setDescription("");

    }

    function saveQuiz() {

        const trimmedTitle = title.trim();

        if (!trimmedTitle) {

            notificationService.warning(
                "Quiz title is required."
            );

            return;

        }

        quizEngine.updateQuiz({

            id: editingId,

            title: trimmedTitle,

            description: description.trim()

        });

        notificationService.success(
            "Quiz updated successfully."
        );

        cancelEditing();

        loadQuizzes();

    }

    function deleteQuiz(id) {

        if (!window.confirm("Delete this quiz?")) {

            return;

        }

        quizEngine.deleteQuiz(id);

        notificationService.success(
            "Quiz deleted successfully."
        );

        loadQuizzes();

    }

    if (quizzes.length === 0) {

        return <p>No quizzes created yet.</p>;

    }

    return (

        <div>

            <h2>Quiz Library</h2>

            {quizzes.map((quiz) => {

                const isEditing = editingId === quiz.id;

                return (

                    <div
                        key={quiz.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "12px",
                            marginBottom: "12px",
                            borderRadius: "8px"
                        }}
                    >

                        {isEditing ? (

                            <>

                                <input
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />

                                <textarea
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />

                                <button
                                    onClick={saveQuiz}
                                >
                                    💾 Save
                                </button>

                                <button
                                    onClick={cancelEditing}
                                >
                                    ❌ Cancel
                                </button>

                            </>

                        ) : (

                            <>

                                <h3>{quiz.title}</h3>

                                <p>{quiz.description}</p>

                                <p>
                                    Category: {quiz.category}
                                </p>

                                <p>
                                    Difficulty: {quiz.difficulty}
                                </p>

                                <button
                                    onClick={() =>
                                        startEditing(quiz)
                                    }
                                >
                                    ✏️ Edit
                                </button>

                                <button
                                    onClick={() =>
                                        deleteQuiz(quiz.id)
                                    }
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