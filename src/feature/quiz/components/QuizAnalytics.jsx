/**
 * ====================================================
 * ARJUN EOS
 * Quiz Analytics
 * ====================================================
 */

function QuizAnalytics({ quizzes = [] }) {

    const totalQuizzes = quizzes.length;

    const totalQuestions = quizzes.reduce(
        (total, quiz) => total + (quiz.questions?.length || 0),
        0
    );

    const averageQuestions =
        totalQuizzes === 0
            ? 0
            : (totalQuestions / totalQuizzes).toFixed(1);

    return (

        <div
            style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                marginBottom: "20px"
            }}
        >

            <h2>Quiz Analytics</h2>

            <p>Total Quizzes : {totalQuizzes}</p>

            <p>Total Questions : {totalQuestions}</p>

            <p>Average Questions / Quiz : {averageQuestions}</p>

        </div>

    );

}

export default QuizAnalytics;