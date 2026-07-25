/**
 * ====================================================
 * ARJUN EOS
 * Quiz Certificate
 * ====================================================
 */

function QuizCertificate({
    name,
    quiz,
    score,
    total
}) {

    const percentage =
        total === 0
            ? 0
            : Math.round((score / total) * 100);

    return (

        <div
            style={{
                border: "4px solid #2563eb",
                borderRadius: "16px",
                padding: "40px",
                textAlign: "center",
                background: "#ffffff"
            }}
        >

            <h1>Certificate of Achievement</h1>

            <p>This certifies that</p>

            <h2>{name || "Participant"}</h2>

            <p>has successfully completed</p>

            <h2>{quiz?.title}</h2>

            <h3>
                Score: {score} / {total}
            </h3>

            <h2>
                {percentage}%
            </h2>

            <p>
                Congratulations on your achievement!
            </p>

        </div>

    );

}

export default QuizCertificate;