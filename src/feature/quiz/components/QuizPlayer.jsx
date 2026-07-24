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

    const [currentQuestion] = useState(0);

    if (!quiz) {
        return null;
    }

    const question = quiz.questions?.[currentQuestion];

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
                Question {currentQuestion + 1} of {quiz.questions.length}
            </p>

            <hr />

            {question ? (

                <>
                    <h3>{question.question}</h3>

                    {(question.options || []).map((option) => (

                        <div
                            key={option.id}
                            style={{
                                marginTop: "12px"
                            }}
                        >

                            <button
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "10px"
                                }}
                            >
                                {option.text}
                            </button>

                        </div>

                    ))}
                </>

            ) : (

                <h3>No questions available.</h3>

            )}

            <div
                style={{
                    marginTop: "25px"
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