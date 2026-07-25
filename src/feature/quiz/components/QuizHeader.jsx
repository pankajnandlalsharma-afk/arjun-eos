/**
 * ====================================================
 * ARJUN EOS
 * Quiz Header
 * ====================================================
 */

function QuizHeader({

    title = "ARJUN EOS",
    subtitle = "Quiz Management System"

}) {

    return (

        <header
            style={{
                padding: "20px",
                marginBottom: "20px",
                borderBottom: "1px solid #d1d5db",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <div>

                <h1
                    style={{
                        margin: 0
                    }}
                >
                    {title}
                </h1>

                <p
                    style={{
                        marginTop: "6px",
                        color: "#6b7280"
                    }}
                >
                    {subtitle}
                </p>

            </div>

            <div
                style={{
                    fontSize: "14px",
                    color: "#6b7280"
                }}
            >
                {new Date().toLocaleDateString()}
            </div>

        </header>

    );

}

export default QuizHeader;