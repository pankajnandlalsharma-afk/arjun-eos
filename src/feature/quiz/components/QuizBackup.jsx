/**
 * ====================================================
 * ARJUN EOS
 * Quiz Backup
 * ====================================================
 */

function QuizBackup({ quizzes = [] }) {

    const backup = () => {

        const timestamp = new Date()
            .toISOString()
            .replace(/[:.]/g, "-");

        const blob = new Blob(
            [JSON.stringify(quizzes, null, 2)],
            {
                type: "application/json"
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = `quiz-backup-${timestamp}.json`;

        link.click();

        URL.revokeObjectURL(url);

    };

    return (

        <button
            onClick={backup}
        >
            Backup Quiz Database
        </button>

    );

}

export default QuizBackup;