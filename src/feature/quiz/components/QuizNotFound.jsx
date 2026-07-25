/**
 * ====================================================
 * ARJUN EOS
 * Quiz Not Found
 * ====================================================
 */

function QuizNotFound({

    title = "Quiz Not Found",
    message = "The requested quiz does not exist or has been removed.",
    onBack

}) {

    return (

        <div
            style={{
                padding: "40px",
                textAlign: "center",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                background: "#fafafa"
            }}
        >

            <div
                style={{
                    fontSize: "48px"
                }}
            >
                🔍
            </div>

            <h2>{title}</h2>

            <p>{message}</p>

            <button
                onClick={onBack}
            >
                Back to Quiz List
            </button>

        </div>

    );

}

export default QuizNotFound;