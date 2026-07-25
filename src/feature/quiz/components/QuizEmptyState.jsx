/**
 * ====================================================
 * ARJUN EOS
 * Quiz Empty State
 * ====================================================
 */

function QuizEmptyState({
    title = "No Quizzes Available",
    message = "Create your first quiz to begin.",
    actionText = "Create Quiz",
    onAction
}) {

    return (

        <div
            style={{
                border: "2px dashed #d1d5db",
                borderRadius: "12px",
                padding: "40px",
                textAlign: "center",
                background: "#fafafa"
            }}
        >

            <div
                style={{
                    fontSize: "48px"
                }}
            >
                📚
            </div>

            <h2>{title}</h2>

            <p>{message}</p>

            <button
                style={{
                    marginTop: "20px",
                    padding: "10px 20px"
                }}
                onClick={onAction}
            >
                {actionText}
            </button>

        </div>

    );

}

export default QuizEmptyState;