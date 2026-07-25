/**
 * ====================================================
 * ARJUN EOS
 * Quiz Summary
 * ====================================================
 */

function QuizSummary({
    quiz,
    score = 0,
    total = 0,
    timeTaken = 0
}) {

    const percentage =
        total === 0
            ? 0
            : Math.round((score / total) * 100);

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>Quiz Summary</h2>

            <p>
                <strong>Quiz:</strong> {quiz?.title || "-"}
            </p>

            <p>
                <strong>Score:</strong> {score} / {total}
            </p>

            <p>
                <strong>Percentage:</strong> {percentage}%
            </p>

            <p>
                <strong>Time Taken:</strong> {timeTaken} seconds
            </p>

            <p>
                <strong>Status:</strong>{" "}
                {percentage >= 50 ? "Passed" : "Failed"}
            </p>

        </div>

    );

}

export default QuizSummary;