export default function Dashboard() {

  const cards = [
    { title: "Channels", value: "100" },
    { title: "AI Agents", value: "80" },
    { title: "Projects", value: "50" },
    { title: "Videos", value: "500000" },
    { title: "Revenue", value: "₹0" },
    { title: "Progress", value: "0%" },
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>🚀 ARJUN Enterprise Operating System</h1>

      <h2>Mission Control Dashboard</h2>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3>{card.title}</h3>

            <h1>{card.value}</h1>

          </div>
        ))}
      </div>

      <br />

      <table
        border="1"
        cellPadding="8"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>

          <tr>

            <th>Mission</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>100 Channel Mission</td>

            <td>Running</td>

          </tr>

          <tr>

            <td>5000 Shorts</td>

            <td>0%</td>

          </tr>

          <tr>

            <td>AI Factory</td>

            <td>Ready</td>

          </tr>

          <tr>

            <td>Enterprise Launch</td>

            <td>In Progress</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}