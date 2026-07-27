import { useEffect, useState } from "react";
import { MissionController } from "../controllers";

export default function MissionControl() {

    const controller = new MissionController();

    const [missions, setMissions] = useState([]);

    useEffect(() => {
        loadMissions();
    }, []);

    function loadMissions() {
        const data = controller.getAllMissions();
        setMissions(data);
    }

    function createDemoMission() {

        controller.createMission({

            name: "100 Channel Mission",

            description: "Launch 100 YouTube Channels",

            targetChannels: 100,

            targetDate: "2026-12-31",

            segments: [
                "Law",
                "Bhagavad Gita",
                "Finance",
                "AI",
                "Kids"
            ]

        });

        loadMissions();
    }

    return (

        <div style={{ padding: 25 }}>

            <h1>🚀 Mission Control</h1>

            <button
                onClick={createDemoMission}
                style={{
                    padding: "10px 18px",
                    marginBottom: 20,
                    cursor: "pointer"
                }}
            >
                Create Demo Mission
            </button>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Mission</th>

                        <th>Status</th>

                        <th>Progress</th>

                        <th>Deadline</th>

                    </tr>

                </thead>

                <tbody>

                    {missions.length === 0 && (

                        <tr>

                            <td
                                colSpan="5"
                                style={{
                                    textAlign: "center",
                                    padding: 20
                                }}
                            >
                                No Missions Found
                            </td>

                        </tr>

                    )}

                    {missions.map((mission) => (

                        <tr key={mission.id}>

                            <td>{mission.id.substring(0,8)}</td>

                            <td>{mission.name}</td>

                            <td>{mission.status}</td>

                            <td>

                                {mission.completedChannels} /
                                {" "}
                                {mission.targetChannels}

                            </td>

                            <td>{mission.targetDate}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}