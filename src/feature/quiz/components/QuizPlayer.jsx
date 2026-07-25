/**
 * ====================================================
 * ARJUN EOS
 * Quiz Player
 * ====================================================
 */

import { useState } from "react";

function QuizPlayer({
    quiz,
    onExit
}) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    if (!quiz) {
        return null;
    }

    const questions = quiz.questions || [];
    const question = questions[currentQuestion];

    const handleSelect = (optionId) => {

        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: optionId
        });

    };

    const nextQuestion = () => {

        if (currentQuestion < questions.length - 1) {

            setCurrentQuestion(currentQuestion + 1);

        } else {

            setShowResult(true);

        }

    };

    const previousQuestion = () => {

        if (currentQuestion > 0) {

            setCurrentQuestion(currentQuestion - 1);

        }

    };

    const calculateScore = () => {

        let score = 0;

        questions.forEach((q, index) => {

            if (selectedAnswers[index] === q.correctOptionId) {

                score++;

            }

        });

        return score;

    };

    if (showResult) {

        return (

            <div
                style={{
                    padding: "25px",
                    border: "1px solid #d1d5db",
                    borderRadius: "10px"
                }}
            >

                <h2>Quiz Completed</h2>

                <h3>

                    Score : {calculateScore()} / {questions.length}

                </h3>

                <button
                    onClick={() => {

                        setCurrentQuestion(0);
                        setSelectedAnswers({});
                        setShowResult(false);

                    }}
                >
                    Restart Quiz
                </button>

                <button
                    style={{
                        marginLeft: "10px"
                    }}
                    onClick={onExit}
                >
                    Exit Quiz
                </button>

            </div>

        );

    }

    return (

        <div
            style={{
                padding: "25px",
                border: "1px solid #d1d5db",
                borderRadius: "10px"
            }}
        >

            <h2>{quiz.title}</h2>

            <p>

                Question {currentQuestion + 1} of {questions.length}

            </p>

            <hr />

            {question ? (

                <>

                    <h3>{question.question}</h3>

                    {(question.options || []).map((option) => {

                        const selected =
                            selectedAnswers[currentQuestion] === option.id;

                        return (

                            <button
                                key={option.id}
                                onClick={() => handleSelect(option.id)}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "12px",
                                    marginTop: "12px",
                                    cursor: "pointer",
                                    borderRadius: "6px",
                                    border: "1px solid #ccc",
                                    background: selected
                                        ? "#dbeafe"
                                        : "#ffffff"
                                }}
                            >

                                {option.text}

                            </button>

                        );

                    })}

                </>

            ) : (

                <h3>No questions available.</h3>

            )}

            <div
                style={{
                    marginTop: "25px",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >

                <button
                    disabled={currentQuestion === 0}
                    onClick={previousQuestion}
                >
                    Previous
                </button>

                {currentQuestion < questions.length - 1 ? (

                    <button
                        onClick={nextQuestion}
                    >
                        Next
                    </button>

                ) : (

                    <button
                        onClick={nextQuestion}
                    >
                        Finish Quiz
                    </button>

                )}

            </div>

            <div
                style={{
                    marginTop: "20px"
                }}
            >

                <button
                    onClick={onExit}
                >
                    Exit Quiz
                </button>

            </div>

        </div>

    );

}

export default QuizPlayer;