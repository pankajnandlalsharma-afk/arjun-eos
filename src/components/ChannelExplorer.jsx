export default function ChannelExplorer() {

  const channels = [

    {
      segment: "Law",
      name: "BNSS Quiz",
      status: "Planning",
      ai: "Legal AI"
    },

    {
      segment: "Law",
      name: "BNS Quiz",
      status: "Planning",
      ai: "Legal AI"
    },

    {
      segment: "Law",
      name: "Bharatiya Sakshya Adhiniyam Quiz",
      status: "Planning",
      ai: "Legal AI"
    },

    {
      segment: "Law",
      name: "Constitution Quiz",
      status: "Planning",
      ai: "Research AI"
    },

    {
      segment: "Law",
      name: "Motor Vehicle Act",
      status: "Planning",
      ai: "Legal AI"
    }

  ];

  return (

    <div style={{padding:"30px"}}>

      <h1>📺 Channel Explorer</h1>

      <table
        border="1"
        cellPadding="8"
        style={{
          borderCollapse:"collapse",
          width:"100%"
        }}
      >

        <thead>

          <tr>

            <th>Segment</th>
            <th>Channel</th>
            <th>Status</th>
            <th>AI Manager</th>

          </tr>

        </thead>

        <tbody>

          {channels.map(channel=>(

            <tr key={channel.name}>

              <td>{channel.segment}</td>

              <td>{channel.name}</td>

              <td>{channel.status}</td>

              <td>{channel.ai}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}