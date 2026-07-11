export default function ProductionPipeline() {

  const stages = [
    "Ideas",
    "Research",
    "Scripts",
    "Voice",
    "Editing",
    "Thumbnail",
    "SEO",
    "Upload",
    "Schedule",
    "Published"
  ];

  return (
    <div style={{ padding: "25px" }}>
      <h1>🎬 Production Pipeline</h1>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Target</th>
            <th>Completed</th>
            <th>Remaining</th>
          </tr>
        </thead>

        <tbody>
          {stages.map(stage => (
            <tr key={stage}>
              <td>{stage}</td>
              <td>4500</td>
              <td>0</td>
              <td>4500</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}