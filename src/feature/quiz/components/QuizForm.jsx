/**
 * ====================================================
 * ARJUN EOS
 * Quiz Form
 * ====================================================
 */

import { useEffect, useState } from "react";
import { Quiz } from "../../../models";
import { QuizController } from "../../../controllers";

function QuizForm({ quiz = null, onQuizCreated }) {

    const [id, setId] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("Medium");

    useEffect(() => {

        if (!quiz) {
            return;
        }

        setId(quiz.id);
        setTitle(quiz.title || "");
        setDescription(quiz.description || "");
        setCategory(quiz.category || "");
        setDifficulty(quiz.difficulty || "Medium");

    }, [quiz]);

    const resetForm = () => {

        setId(null);
        setTitle("");
        setDescription("");
        setCategory("");
        setDifficulty("Medium");

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const quizData = new Quiz({
            id,
            title,
            description,
            category,
            difficulty,
            questions: quiz?.questions || []
        });

        if (id) {

            QuizController.updateQuiz(quizData);

            alert("Quiz updated successfully.");

        } else {

            QuizController.createQuiz(quizData);

            alert("Quiz created successfully.");

        }

        resetForm();

        if (onQuizCreated) {
            onQuizCreated();
        }

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

            <h2>
                {id ? "Edit Quiz" : "Create Quiz"}
            </h2>

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
                    {id ? "Update Quiz" : "Save Quiz"}
                </button>

            </form>

        </div>

    );

}

export default QuizForm;