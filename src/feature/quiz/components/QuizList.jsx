/**
 * ====================================================
 * ARJUN EOS
 * Quiz List
 * ====================================================
 */

import { useEffect, useState } from "react";
import { QuizController } from "../../../controllers";

function QuizList() {

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        loadQuizzes();
    }, []);

    const loadQuizzes = () => {
        const data = QuizController.getAllQuizzes();
        setQuizzes(data);
    };

    if (quizzes.length === 0) {
        return (
            <div>
                <h2>My Quizzes</h2>
                <p>No quizzes available.</p>
            </div>
        );
    }

    return (
        <div>

            <h2>My Quizzes</h2>

            {quizzes.map((quiz) => (
                <div
                    key={quiz.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "12px",
                        marginBottom: "10px",
                        borderRadius: "6px"
                    }}
                >
                    <h3>{quiz.title}</h3>

                    <p>
                        <strong>Category:</strong> {quiz.category}
                    </p>

                    <p>
                        <strong>Difficulty:</strong> {quiz.difficulty}
                    </p>

                    <p>
                        <strong>Questions:</strong> {quiz.questions.length}
                    </p>

                </div>
            ))}

        </div>
    );

}

export default QuizList;