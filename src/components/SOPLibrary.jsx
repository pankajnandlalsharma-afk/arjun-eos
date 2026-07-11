export default function SOPLibrary() {

  const sops = [
    "Channel Creation SOP",
    "Keyword Research SOP",
    "Script Writing SOP",
    "Thumbnail Design SOP",
    "Video Editing SOP",
    "SEO Optimization SOP",
    "Publishing SOP",
    "Analytics SOP",
    "AI Agent SOP",
    "Quality Control SOP"
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>📘 SOP Library</h1>

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
            <th>SOP</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {sops.map((sop) => (
            <tr key={sop}>
              <td>{sop}</td>
              <td>Available</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}