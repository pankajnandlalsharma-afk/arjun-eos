/**
 * ====================================================
 * ARJUN EOS
 * Quiz Form
 * ====================================================
 */

import { useState } from "react";
import { Quiz } from "../../../models";
import { QuizController } from "../../../controllers";

function QuizForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("Medium");

    const handleSubmit = (event) => {

        event.preventDefault();

        const quiz = new Quiz({
            title,
            description,
            category,
            difficulty
        });

        QuizController.createQuiz(quiz);

        alert("Quiz created successfully.");

        setTitle("");
        setDescription("");
        setCategory("");
        setDifficulty("Medium");

    };

    return (
        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "20px"
            }}
        >
            <h2>Create Quiz</h2>

            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: "10px" }}>
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Description</label>
                    <br />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Category</label>
                    <br />
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Difficulty</label>
                    <br />
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <button type="submit">
                    Save Quiz
                </button>

            </form>
        </div>
    );

}

export default QuizForm;