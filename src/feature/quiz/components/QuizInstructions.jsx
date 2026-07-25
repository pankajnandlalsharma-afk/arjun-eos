/**
 * ====================================================
 * ARJUN EOS
 * Quiz Instructions
 * ====================================================
 */

function QuizInstructions({
    quiz,
    onStart
}) {

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>{quiz?.title}</h2>

            <p>
                {quiz?.description}
            </p>

            <hr />

            <h3>Instructions</h3>

            <ul>

                <li>Read every question carefully.</li>

                <li>Select only one answer.</li>

                <li>Complete the quiz before the timer expires.</li>

                <li>Your score will be shown after submission.</li>

                <li>You may review your answers if enabled.</li>

            </ul>

            <button
                onClick={onStart}
            >
                Start Quiz
            </button>

        </div>

    );

}

export default QuizInstructions;