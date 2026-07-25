/**
 * ====================================================
 * ARJUN EOS
 * Quiz Error
 * ====================================================
 */

function QuizError({

    title = "Something Went Wrong",
    message = "Unable to load the quiz.",
    onRetry

}) {

    return (

        <div
            style={{
                padding: "40px",
                textAlign: "center",
                border: "1px solid #ef4444",
                borderRadius: "10px",
                background: "#fef2f2"
            }}
        >

            <div
                style={{
                    fontSize: "48px"
                }}
            >
                ❌
            </div>

            <h2>{title}</h2>

            <p>{message}</p>

            <button
                onClick={onRetry}
            >
                Retry
            </button>

        </div>

    );

}

export default QuizError;