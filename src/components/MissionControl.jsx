export default function MissionControl() {

  const missions = [
    {
      id: 1,
      mission: "Launch First YouTube Channel",
      status: "Running",
      progress: "20%",
      deadline: "15 Jul 2026"
    },
    {
      id: 2,
      mission: "Build Content Factory",
      status: "Running",
      progress: "15%",
      deadline: "20 Jul 2026"
    },
    {
      id: 3,
      mission: "Knowledge Center",
      status: "Pending",
      progress: "0%",
      deadline: "18 Jul 2026"
    }
  ];

  return (
    <div style={{ padding: "25px" }}>

      <h1>🚀 Mission Control</h1>

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

          {missions.map((mission) => (

            <tr key={mission.id}>

              <td>{mission.id}</td>

              <td>{mission.mission}</td>

              <td>{mission.status}</td>

              <td>{mission.progress}</td>

              <td>{mission.deadline}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}