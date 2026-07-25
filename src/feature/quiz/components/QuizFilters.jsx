/**
 * ====================================================
 * ARJUN EOS
 * Quiz Filters
 * ====================================================
 */

function QuizFilters({
    difficulty,
    category,
    onDifficultyChange,
    onCategoryChange
}) {

    return (

        <div
            style={{
                display: "flex",
                gap: "15px",
                marginBottom: "20px",
                flexWrap: "wrap"
            }}
        >

            <select
                value={difficulty}
                onChange={(event) => onDifficultyChange(event.target.value)}
            >
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>

            <input
                type="text"
                placeholder="Category..."
                value={category}
                onChange={(event) => onCategoryChange(event.target.value)}
            />

        </div>

    );

}

export default QuizFilters;