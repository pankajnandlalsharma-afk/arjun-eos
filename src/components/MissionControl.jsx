/**
 * ====================================================
 * ARJUN EOS
 * Mission Control
 *
 * Description:
 * Mission Management Dashboard
 * ====================================================
 */

import { useEffect, useState } from "react";
import { MissionController } from "../controllers";

export default function MissionControl() {

    const controller = new MissionController();

    const [missions, setMissions] = useState([]);

    const [form, setForm] = useState({

        name: "",

        description: "",

        targetChannels: 100,

        targetDate: "",

        segments: ""

    });

    useEffect(() => {
        loadMissions();
    }, []);

    function loadMissions() {

        setMissions(controller.getAllMissions());

    }

    function handleChange(event) {

        setForm({

            ...form,

            [event.target.name]: event.target.value

        });

    }

    function createMission() {

        if (!form.name.trim()) {

            alert("Mission Name is required");

            return;

        }

        controller.createMission({

            name: form.name,

            description: form.description,

            targetChannels: Number(form.targetChannels),

            targetDate: form.targetDate,

            segments: form.segments
                .split(",")
                .map(segment => segment.trim())
                .filter(segment => segment !== "")

        });

        setForm({

            name: "",

            description: "",

            targetChannels: 100,

            targetDate: "",

            segments: ""

        });

        loadMissions();

    }

    return (

        <div style={{ padding: 25 }}>

            <h1>🚀 Mission Control</h1>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: 20,
                    marginBottom: 30
                }}
            >

                <h2>Create Mission</h2>

                <p>

                    <input
                        name="name"
                        placeholder="Mission Name"
                        value={form.name}
                        onChange={handleChange}
                        style={{ width: "100%", padding: 10 }}
                    />

                </p>

                <p>

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        rows={3}
                        style={{
                            width: "100%",
                            padding: 10
                        }}
                    />

                </p>

                <p>

                    <input
                        type="number"
                        name="targetChannels"
                        value={form.targetChannels}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: 10
                        }}
                    />

                </p>

                <p>

                    <input
                        type="date"
                        name="targetDate"
                        value={form.targetDate}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: 10
                        }}
                    />

                </p>

                <p>

                    <input
                        name="segments"
                        placeholder="Law, AI, Finance, Kids"
                        value={form.segments}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: 10
                        }}
                    />

                </p>

                <button
                    onClick={createMission}
                    style={{
                        padding: "12px 20px",
                        cursor: "pointer"
                    }}
                >
                    Create Mission
                </button>

            </div>

            <h2>Mission List</h2>

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

                        <th>Name</th>

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
                                No Missions Available
                            </td>

                        </tr>

                    )}

                    {missions.map((mission) => (

                        <tr key={mission.id}>

                            <td>{mission.id.substring(0, 8)}</td>

                            <td>{mission.name}</td>

                            <td>{mission.status}</td>

                            <td>
                                {mission.completedChannels}
                                {" / "}
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