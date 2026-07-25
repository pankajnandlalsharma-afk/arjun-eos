/**
 * ====================================================
 * ARJUN EOS
 * Quiz Restore
 * ====================================================
 */

function QuizRestore({ onRestore }) {

    const restore = (event) => {

        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {

            try {

                const quizzes = JSON.parse(e.target.result);

                onRestore?.(quizzes);

                alert("Quiz database restored successfully.");

            } catch {

                alert("Invalid backup file.");

            }

        };

        reader.readAsText(file);

    };

    return (

        <div>

            <input
                type="file"
                accept=".json"
                onChange={restore}
            />

        </div>

    );

}

export default QuizRestore;