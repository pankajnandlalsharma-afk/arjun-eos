/**
 * ====================================================
 * ARJUN EOS
 * Quiz Statistics
 * ====================================================
 */

function QuizStatistics({ quizzes = [] }) {

    const totalQuizzes = quizzes.length;

    const totalQuestions = quizzes.reduce(
        (count, quiz) => count + (quiz.questions?.length || 0),
        0
    );

    const easy = quizzes.filter(q => q.difficulty === "Easy").length;
    const medium = quizzes.filter(q => q.difficulty === "Medium").length;
    const hard = quizzes.filter(q => q.difficulty === "Hard").length;

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                background: "#ffffff"
            }}
        >

            <h2 style={{ marginTop: 0 }}>
                Quiz Statistics
            </h2>

            <p>Total Quizzes : {totalQuizzes}</p>

            <p>Total Questions : {totalQuestions}</p>

            <p>Easy : {easy}</p>

            <p>Medium : {medium}</p>

            <p>Hard : {hard}</p>

        </div>

    );

}

export default QuizStatistics;