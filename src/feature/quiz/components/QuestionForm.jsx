/**
 * ====================================================
 * ARJUN EOS
 * Question Form
 * ====================================================
 */

import { useState } from "react";

function QuestionForm() {

    const [question, setQuestion] = useState("");
    const [questionType, setQuestionType] = useState("multiple-choice");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("A");
    const [marks, setMarks] = useState(1);
    const [negativeMarks, setNegativeMarks] = useState(0);
    const [difficulty, setDifficulty] = useState("Medium");

    const handleSubmit = (event) => {

        event.preventDefault();

        alert("Question Form UI completed.");

    };

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "20px",
                marginTop: "20px"
            }}
        >

            <h2>Add Question</h2>

            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: "15px" }}>
                    <label>Question</label>
                    <br />
                    <textarea
                        rows="3"
                        style={{ width: "100%" }}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Question Type</label>
                    <br />
                    <select
                        value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}
                    >
                        <option value="multiple-choice">
                            Multiple Choice
                        </option>

                        <option value="true-false">
                            True / False
                        </option>

                        <option value="fill-blank">
                            Fill in the Blank
                        </option>

                    </select>
                </div>

                <h3>Options</h3>

                <input
                    type="text"
                    placeholder="Option A"
                    value={optionA}
                    onChange={(e) => setOptionA(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Option B"
                    value={optionB}
                    onChange={(e) => setOptionB(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Option C"
                    value={optionC}
                    onChange={(e) => setOptionC(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Option D"
                    value={optionD}
                    onChange={(e) => setOptionD(e.target.value)}
                />

                <br /><br />

                <div style={{ marginBottom: "15px" }}>
                    <label>Correct Answer</label>
                    <br />

                    <select
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                    >
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                        <option value="C">Option C</option>
                        <option value="D">Option D</option>
                    </select>

                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Marks</label>
                    <br />

                    <input
                        type="number"
                        min="1"
                        value={marks}
                        onChange={(e) => setMarks(Number(e.target.value))}
                    />

                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Negative Marks</label>
                    <br />

                    <input
                        type="number"
                        min="0"
                        value={negativeMarks}
                        onChange={(e) => setNegativeMarks(Number(e.target.value))}
                    />

                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Difficulty</label>
                    <br />

                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>

                </div>

                <button type="submit">
                    Save Question
                </button>

            </form>

        </div>

    );

}

export default QuestionForm;