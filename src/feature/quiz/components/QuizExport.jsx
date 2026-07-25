/**
 * ====================================================
 * ARJUN EOS
 * Quiz Export
 * ====================================================
 */

function QuizExport({ quizzes = [] }) {

    const exportJSON = () => {

        const data = JSON.stringify(quizzes, null, 2);

        const blob = new Blob(
            [data],
            {
                type: "application/json"
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "quizzes.json";

        link.click();

        URL.revokeObjectURL(url);

    };

    return (

        <button
            onClick={exportJSON}
        >
            Export Quizzes
        </button>

    );

}

export default QuizExport;