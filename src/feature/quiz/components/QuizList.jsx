/**
 * ====================================================
 * ARJUN EOS
 * Quiz Studio
 * ====================================================
 */

import { useEffect, useState } from "react";
import { QuizController } from "../../../controllers";
import QuizForm from "./QuizForm";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function QuizList() {

    const [quizzes, setQuizzes] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const [selectedQuizId, setSelectedQuizId] = useState("");
    const [editingQuiz, setEditingQuiz] = useState(null);

    const [editingQuestion, setEditingQuestion] = useState(null);
    const [questionRefreshKey, setQuestionRefreshKey] = useState(0);

    useEffect(() => {
        loadQuizzes();
    }, []);

    const loadQuizzes = () => {
        const data = QuizController.getAllQuizzes();
        setQuizzes(data || []);
    };

    const refreshQuestions = () => {
        setQuestionRefreshKey(previous => previous + 1);
        loadQuizzes();
    };

    const handleCreateQuiz = () => {
        setEditingQuiz(null);
        setEditingQuestion(null);
        setSelectedQuizId("");
        setShowForm(true);
    };

    const handleEditQuiz = (quiz) => {
        setEditingQuiz(quiz);
        setEditingQuestion(null);
        setSelectedQuizId("");
        setShowForm(true);
    };

    const handleDeleteQuiz = (id) => {

        const deleted = QuizController.deleteQuiz(id);

        if (deleted !== false) {
            loadQuizzes();
        }

        if (editingQuiz?.id === id) {
            setEditingQuiz(null);
        }

        if (selectedQuizId === id) {
            setSelectedQuizId("");
        }

        setEditingQuestion(null);

    };

    const handleAddQuestions = (quiz) => {
        setEditingQuiz(null);
        setEditingQuestion(null);
        setSelectedQuizId(quiz.id);
        setShowForm(true);
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
                    onClick={() => {

                        if (showForm) {

                            setShowForm(false);
                            setEditingQuiz(null);
                            setEditingQuestion(null);
                            setSelectedQuizId("");

                        } else {

                            handleCreateQuiz();

                        }

                    }}
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
                        quiz={editingQuiz}
                        onQuizCreated={() => {

                            loadQuizzes();
                            setEditingQuiz(null);

                        }}
                    />

                    {selectedQuizId && (

                        <>

                            <QuestionForm
                                quizId={selectedQuizId}
                                editingQuestion={editingQuestion}
                                onQuestionCreated={() => {

                                    setEditingQuestion(null);
                                    refreshQuestions();

                                }}
                            />

                            <QuestionList
                                quizId={selectedQuizId}
                                refreshKey={questionRefreshKey}
                                onEditQuestion={(question) => {

                                    setEditingQuestion(question);

                                }}
                            />

                        </>

                    )}

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
                                <td align="center">{quiz.questions.length}</td>

                                <td align="center">

                                    <button
                                        onClick={() => handleAddQuestions(quiz)}
                                    >
                                        Add Questions
                                    </button>

                                    <button
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => handleEditQuiz(quiz)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => handleDeleteQuiz(quiz.id)}
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