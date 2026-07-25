/**
 * ====================================================
 * ARJUN EOS
 * Quiz Card
 * ====================================================
 */

function QuizCard({
    quiz,
    onPlay,
    onEdit,
    onDelete
}) {

    if (!quiz) {
        return null;
    }

    const totalQuestions = quiz.questions?.length || 0;

    const difficultyColor =
        quiz.difficulty === "Easy"
            ? "#16a34a"
            : quiz.difficulty === "Medium"
                ? "#f59e0b"
                : "#dc2626";

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                background: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                }}
            >

                <div>

                    <h3
                        style={{
                            marginTop: 0,
                            marginBottom: "8px"
                        }}
                    >
                        {quiz.title}
                    </h3>

                    <p
                        style={{
                            color: "#666",
                            margin: 0
                        }}
                    >
                        {quiz.description || "No description available."}
                    </p>

                </div>

                <span
                    style={{
                        background: difficultyColor,
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "bold"
                    }}
                >
                    {quiz.difficulty}
                </span>

            </div>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    flexWrap: "wrap"
                }}
            >

                <div>
                    <strong>Category</strong>
                    <div>{quiz.category || "-"}</div>
                </div>

                <div>
                    <strong>Questions</strong>
                    <div>{totalQuestions}</div>
                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap"
                }}
            >

                <button
                    onClick={() => onPlay?.(quiz)}
                >
                    ▶ Play Quiz
                </button>

                <button
                    onClick={() => onEdit?.(quiz)}
                >
                    ✏ Edit
                </button>

                <button
                    onClick={() => onDelete?.(quiz)}
                >
                    🗑 Delete
                </button>

            </div>

        </div>

    );

}

export default QuizCard;