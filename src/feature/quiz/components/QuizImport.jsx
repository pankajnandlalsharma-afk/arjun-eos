/**
 * ====================================================
 * ARJUN EOS
 * Quiz Import
 * ====================================================
 */

function QuizImport({ onImport }) {

    const handleImport = (event) => {

        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {

            try {

                const quizzes = JSON.parse(e.target.result);

                onImport?.(quizzes);

            } catch {

                alert("Invalid JSON file.");

            }

        };

        reader.readAsText(file);

    };

    return (

        <div>

            <input
                type="file"
                accept=".json"
                onChange={handleImport}
            />

        </div>

    );

}

export default QuizImport;