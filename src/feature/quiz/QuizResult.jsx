/**
 * ====================================================
 * ARJUN EOS
 * Quiz Result
 * ====================================================
 */

function QuizResult({
    quiz,
    score,
    total,
    onRestart,
    onExit
}) {

    const percentage =
        total === 0
            ? 0
            : Math.round((score / total) * 100);

    return (

        <div
            style={{
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                textAlign: "center"
            }}
        >

            <h1>Quiz Completed</h1>

            <h2>{quiz?.title}</h2>

            <h3>
                Score: {score} / {total}
            </h3>

            <h2>
                {percentage}%
            </h2>

            <div
                style={{
                    marginTop: "25px"
                }}
            >

                <button
                    onClick={onRestart}
                >
                    Restart Quiz
                </button>

                <button
                    style={{
                        marginLeft: "10px"
                    }}
                    onClick={onExit}
                >
                    Exit Quiz
                </button>

            </div>

        </div>

    );

}

export default QuizResult;