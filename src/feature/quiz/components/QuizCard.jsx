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

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                background: "#ffffff"
            }}
        >

            <h3
                style={{
                    marginTop: 0,
                    marginBottom: "10px"
                }}
            >
                {quiz.title}
            </h3>

            <p
                style={{
                    margin: "8px 0"
                }}
            >
                <strong>Description:</strong>{" "}
                {quiz.description || "-"}
            </p>

            <p
                style={{
                    margin: "8px 0"
                }}
            >
                <strong>Category:</strong>{" "}
                {quiz.category || "-"}
            </p>

            <p
                style={{
                    margin: "8px 0"
                }}
            >
                <strong>Difficulty:</strong>{" "}
                {quiz.difficulty}
            </p>

            <p
                style={{
                    margin: "8px 0"
                }}
            >
                <strong>Total Questions:</strong>{" "}
                {quiz.questions?.length || 0}
            </p>

            <div
                style={{
                    marginTop: "18px"
                }}
            >

                <button
                    onClick={() => onPlay?.(quiz)}
                >
                    ▶ Play
                </button>

                <button
                    style={{
                        marginLeft: "10px"
                    }}
                    onClick={() => onEdit?.(quiz)}
                >
                    Edit
                </button>

                <button
                    style={{
                        marginLeft: "10px"
                    }}
                    onClick={() => onDelete?.(quiz)}
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default QuizCard;