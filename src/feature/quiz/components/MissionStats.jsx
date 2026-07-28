export default function MissionStats({ missions }) {
    const total = missions.length;

    const created = missions.filter(
        m => m.status === "CREATED"
    ).length;

    const running = missions.filter(
        m => m.status === "RUNNING"
    ).length;

    const completed = missions.filter(
        m => m.status === "COMPLETED"
    ).length;

    return (
        <div
            style={{
                display: "flex",
                gap: 20,
                marginBottom: 25,
                flexWrap: "wrap"
            }}
        >
            <StatCard title="Total Missions" value={total} />
            <StatCard title="Created" value={created} />
            <StatCard title="Running" value={running} />
            <StatCard title="Completed" value={completed} />
        </div>
    );
}

function StatCard({ title, value }) {
    return (
        <div
            style={{
                flex: 1,
                minWidth: 180,
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 20,
                textAlign: "center",
                background: "#fafafa"
            }}
        >
            <h3 style={{ margin: 0 }}>{title}</h3>

            <h1 style={{ margin: "10px 0" }}>
                {value}
            </h1>
        </div>
    );
}