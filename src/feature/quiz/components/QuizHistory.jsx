/**
 * ====================================================
 * ARJUN EOS
 * Quiz History
 * ====================================================
 */

function QuizHistory({ history = [] }) {

    if (history.length === 0) {

        return (

            <div
                style={{
                    padding: "20px",
                    border: "1px solid #d1d5db",
                    borderRadius: "10px"
                }}
            >
                No quiz history available.
            </div>

        );

    }

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>Quiz History</h2>

            <table
                width="100%"
                cellPadding="10"
                style={{
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th align="left">Quiz</th>
                        <th align="center">Score</th>
                        <th align="center">Percentage</th>
                        <th align="center">Date</th>

                    </tr>

                </thead>

                <tbody>

                    {history.map((item, index) => (

                        <tr key={index}>

                            <td>{item.quizTitle}</td>

                            <td align="center">
                                {item.score}/{item.total}
                            </td>

                            <td align="center">
                                {item.percentage}%
                            </td>

                            <td align="center">
                                {item.date}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default QuizHistory;