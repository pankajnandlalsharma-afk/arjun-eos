/**
 * ====================================================
 * ARJUN EOS
 * Quiz Footer
 * ====================================================
 */

function QuizFooter({

    version = "1.0.0",
    author = "ARJUN EOS"

}) {

    return (

        <footer
            style={{
                marginTop: "40px",
                padding: "20px",
                textAlign: "center",
                borderTop: "1px solid #d1d5db",
                color: "#6b7280",
                fontSize: "14px"
            }}
        >

            <div>
                ARJUN EOS Quiz Engine
            </div>

            <div
                style={{
                    marginTop: "8px"
                }}
            >
                Version {version}
            </div>

            <div
                style={{
                    marginTop: "8px"
                }}
            >
                © {new Date().getFullYear()} {author}
            </div>

        </footer>

    );

}

export default QuizFooter;