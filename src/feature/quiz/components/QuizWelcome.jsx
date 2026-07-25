/**
 * ====================================================
 * ARJUN EOS
 * Quiz Welcome
 * ====================================================
 */

function QuizWelcome({
    quiz,
    onStart
}) {

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "30px",
                textAlign: "center"
            }}
        >

            <h1>
                Welcome to ARJUN EOS Quiz
            </h1>

            <h2>
                {quiz?.title}
            </h2>

            <p>
                {quiz?.description}
            </p>

            <div
                style={{
                    marginTop: "20px"
                }}
            >

                <p>
                    <strong>Category:</strong> {quiz?.category}
                </p>

                <p>
                    <strong>Difficulty:</strong> {quiz?.difficulty}
                </p>

                <p>
                    <strong>Total Questions:</strong>{" "}
                    {quiz?.questions?.length || 0}
                </p>

            </div>

            <button
                style={{
                    marginTop: "20px",
                    padding: "10px 20px"
                }}
                onClick={onStart}
            >
                Start Quiz
            </button>

        </div>

    );

}

export default QuizWelcome;