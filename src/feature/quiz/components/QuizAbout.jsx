/**
 * ====================================================
 * ARJUN EOS
 * Quiz About
 * ====================================================
 */

function QuizAbout({

    appName = "ARJUN EOS",
    version = "1.0.0"

}) {

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>About</h2>

            <p>

                <strong>Application:</strong> {appName}

            </p>

            <p>

                <strong>Version:</strong> {version}

            </p>

            <p>

                ARJUN EOS is a modular quiz management platform designed
                to create, organize, play and evaluate quizzes using
                reusable React components.

            </p>

        </div>

    );

}

export default QuizAbout;