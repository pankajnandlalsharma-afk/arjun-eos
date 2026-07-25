/**
 * ====================================================
 * ARJUN EOS
 * Quiz Leaderboard
 * ====================================================
 */

function QuizLeaderboard({ records = [] }) {

    const sorted = [...records].sort(
        (a, b) => b.score - a.score
    );

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>Leaderboard</h2>

            {sorted.length === 0 ? (

                <p>No records available.</p>

            ) : (

                <table
                    width="100%"
                    cellPadding="10"
                    style={{
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                        <tr>

                            <th align="left">Rank</th>
                            <th align="left">Name</th>
                            <th align="center">Score</th>

                        </tr>

                    </thead>

                    <tbody>

                        {sorted.map((player, index) => (

                            <tr key={index}>

                                <td>{index + 1}</td>

                                <td>{player.name}</td>

                                <td align="center">
                                    {player.score}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default QuizLeaderboard;