/**
 * ====================================================
 * ARJUN EOS
 * Quiz Loading
 * ====================================================
 */

function QuizLoading({

    message = "Loading Quiz..."

}) {

    return (

        <div
            style={{
                padding: "40px",
                textAlign: "center"
            }}
        >

            <div
                style={{
                    fontSize: "42px"
                }}
            >
                ⏳
            </div>

            <h2>
                {message}
            </h2>

            <p>
                Please wait...
            </p>

        </div>

    );

}

export default QuizLoading;