/**
 * ====================================================
 * ARJUN EOS
 * Quiz Progress Bar
 * ====================================================
 */

function QuizProgressBar({
    currentQuestion = 1,
    totalQuestions = 1
}) {

    const percentage =
        totalQuestions === 0
            ? 0
            : (currentQuestion / totalQuestions) * 100;

    return (

        <div
            style={{
                marginBottom: "20px"
            }}
        >

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontWeight: "bold"
                }}
            >

                <span>
                    Question {currentQuestion} of {totalQuestions}
                </span>

                <span>
                    {Math.round(percentage)}%
                </span>

            </div>

            <div
                style={{
                    width: "100%",
                    height: "12px",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}
            >

                <div
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        background: "#2563eb",
                        transition: "width 0.3s ease"
                    }}
                />

            </div>

        </div>

    );

}

export default QuizProgressBar;