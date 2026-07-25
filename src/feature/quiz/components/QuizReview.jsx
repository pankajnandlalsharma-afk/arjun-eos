/**
 * ====================================================
 * ARJUN EOS
 * Quiz Review
 * ====================================================
 */

function QuizReview({
    quiz,
    answers = {}
}) {

    if (!quiz) {

        return null;

    }

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>Quiz Review</h2>

            {(quiz.questions || []).map((question, index) => (

                <div
                    key={question.id || index}
                    style={{
                        marginBottom: "25px",
                        paddingBottom: "15px",
                        borderBottom: "1px solid #e5e7eb"
                    }}
                >

                    <h3>
                        {index + 1}. {question.question}
                    </h3>

                    <p>

                        <strong>Your Answer:</strong>{" "}

                        {question.options?.find(
                            option => option.id === answers[index]
                        )?.text || "Not Answered"}

                    </p>

                    <p>

                        <strong>Correct Answer:</strong>{" "}

                        {question.options?.find(
                            option => option.id === question.correctOptionId
                        )?.text || "-"}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default QuizReview;