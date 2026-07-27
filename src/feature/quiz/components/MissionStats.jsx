/**
 * ====================================================
 * ARJUN EOS
 * Mission Stats
 *
 * Description:
 * Displays mission KPI cards.
 *
 * Layer:
 * React Component
 * ====================================================
 */

export default function MissionStats({ missions }) {

    const total = missions.length;

    const running = missions.filter(
        mission => mission.status === "Running"
    ).length;

    const pending = missions.filter(
        mission => mission.status === "Pending"
    ).length;

    const completed = missions.filter(
        mission => mission.status === "Completed"
    ).length;

    const cardStyle = {
        flex: 1,
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 20,
        textAlign: "center",
        background: "#fafafa"
    };

    return (

        <div
            style={{
                display: "flex",
                gap: 20,
                marginBottom: 25
            }}
        >

            <div style={cardStyle}>
                <h3>Total Missions</h3>
                <h1>{total}</h1>
            </div>

            <div style={cardStyle}>
                <h3>Running</h3>
                <h1>{running}</h1>
            </div>

            <div style={cardStyle}>
                <h3>Pending</h3>
                <h1>{pending}</h1>
            </div>

            <div style={cardStyle}>
                <h3>Completed</h3>
                <h1>{completed}</h1>
            </div>

        </div>

    );

}