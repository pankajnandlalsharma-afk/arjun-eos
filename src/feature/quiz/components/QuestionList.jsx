/**
 * ====================================================
 * ARJUN EOS
 * Question List
 * ====================================================
 */

import { useEffect, useState } from "react";
import { QuestionController } from "../../../controllers";

function QuestionList({
    quizId,
    onEditQuestion,
    refreshKey = 0
}) {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        loadQuestions();
    }, [quizId, refreshKey]);

    const loadQuestions = () => {

        if (!quizId) {
            setQuestions([]);
            return;
        }

        const data = QuestionController.getQuestionsByQuiz(quizId);

        setQuestions(data || []);

    };

    const handleDelete = (id) => {

        const deleted = QuestionController.deleteQuestion(id);

        if (deleted !== false) {
            loadQuestions();
        }

    };

    const handleMoveUp = (id) => {

        QuestionController.moveQuestionUp(id);

        loadQuestions();

    };

    const handleMoveDown = (id) => {

        QuestionController.moveQuestionDown(id);

        loadQuestions();

    };

    if (!quizId) {

        return (
            <div
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                }}
            >
                Select a quiz to view its questions.
            </div>
        );

    }

    return (

        <div
            style={{
                marginTop: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px"
            }}
        >

            <h2>Questions</h2>

            {questions.length === 0 && (

                <div
                    style={{
                        padding: "20px",
                        textAlign: "center",
                        color: "#666"
                    }}
                >
                    No questions available.
                </div>

            )}

            {questions.length > 0 && (

                <table
                    width="100%"
                    cellPadding="10"
                    style={{
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                        <tr
                            style={{
                                background: "#f5f5f5"
                            }}
                        >
                            <th>#</th>
                            <th align="left">Question</th>
                            <th>Difficulty</th>
                            <th>Marks</th>
                            <th>Correct</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {questions.map((question, index) => (

                            <tr
                                key={question.id}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >

                                <td align="center">
                                    {index + 1}
                                </td>

                                <td>
                                    {question.question}
                                </td>

                                <td align="center">
                                    {question.difficulty}
                                </td>

                                <td align="center">
                                    {question.marks}
                                </td>

                                <td align="center">
                                    {Array.isArray(question.options)
                                        ? (
                                            question.options.find(
                                                option =>
                                                    option.id === question.correctAnswer ||
                                                    option.isCorrect
                                            )?.text || "-"
                                        )
                                        : "-"}
                                </td>

                                <td align="center">

                                    <button
                                        disabled={index === 0}
                                        onClick={() => handleMoveUp(question.id)}
                                    >
                                        ⬆
                                    </button>

                                    <button
                                        style={{
                                            marginLeft: "6px"
                                        }}
                                        disabled={index === questions.length - 1}
                                        onClick={() => handleMoveDown(question.id)}
                                    >
                                        ⬇
                                    </button>

                                    <button
                                        style={{
                                            marginLeft: "10px"
                                        }}
                                        onClick={() => onEditQuestion?.(question)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        style={{
                                            marginLeft: "10px"
                                        }}
                                        onClick={() => handleDelete(question.id)}
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

export default QuestionList;