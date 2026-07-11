export default function Projects() {
  const projects = [
    "ARJUN Enterprise Operating System",
    "100 YouTube Channels",
    "Prompt Library",
    "SOP Library",
    "Knowledge Base",
    "AI Agent Network",
    "Analytics Engine",
    "Finance Engine"
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>📁 Projects</h1>

      <table
        border="1"
        cellPadding="8"
        style={{
          borderCollapse: "collapse",
          width: "100%"
        }}
      >
        <thead>
          <tr>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project}>
              <td>{project}</td>
              <td>In Progress</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}