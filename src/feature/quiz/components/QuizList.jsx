/**
 * ====================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz List
 * ====================================================
 */

import { useEffect, useState } from "react";
import { QuizController } from "../../../controllers";
import QuizForm from "./QuizForm";
import QuestionForm from "./QuestionForm";

function QuizList() {
    const [quizzes, setQuizzes] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        loadQuizzes();
    }, []);

    const loadQuizzes = () => {
        const data = QuizController.getAllQuizzes();
        setQuizzes(data || []);
    };

    return (
        <div
            style={{
                padding: "25px",
                fontFamily: "Arial, Helvetica, sans-serif"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px"
                }}
            >
                <div>
                    <h1 style={{ margin: 0 }}>
                        📝 Quiz Studio
                    </h1>

                    <p style={{ color: "#666" }}>
                        Create, manage and organize your quizzes.
                    </p>
                </div>

                <button
                    onClick={() => setShowForm(!showForm)}
                    style={{
                        padding: "10px 18px",
                        cursor: "pointer",
                        fontSize: "15px"
                    }}
                >
                    {showForm ? "Close Form" : "+ Create Quiz"}
                </button>
            </div>

            {showForm && (
                <>
                    <QuizForm
                        onQuizCreated={() => {
                            loadQuizzes();
                        }}
                    />

                    <div style={{ marginTop: "30px" }}>
                        <QuestionForm />
                    </div>
                </>
            )}

            {quizzes.length === 0 && (
                <div
                    style={{
                        border: "1px dashed #999",
                        padding: "40px",
                        textAlign: "center",
                        borderRadius: "8px"
                    }}
                >
                    <h2>No quizzes available</h2>

                    <p>Create your first quiz to get started.</p>
                </div>
            )}

            {quizzes.length > 0 && (
                <table
                    width="100%"
                    cellPadding="12"
                    style={{
                        borderCollapse: "collapse",
                        border: "1px solid #ddd"
                    }}
                >
                    <thead
                        style={{
                            background: "#f5f5f5"
                        }}
                    >
                        <tr>
                            <th align="left">Title</th>
                            <th align="left">Category</th>
                            <th align="left">Difficulty</th>
                            <th align="center">Questions</th>
                            <th align="center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {quizzes.map((quiz) => (
                            <tr
                                key={quiz.id}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >
                                <td>{quiz.title}</td>

                                <td>{quiz.category}</td>

                                <td>{quiz.difficulty}</td>

                                <td align="center">
                                    {quiz.questions.length}
                                </td>

                                <td align="center">
                                    <button>Edit</button>

                                    <button
                                        style={{
                                            marginLeft: "10px"
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default QuizList;