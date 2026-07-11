import { channels } from "../data/enterpriseData";
export default function ChannelFactory() {
  return (
    <div>
      <h1>📺 Channel Factory</h1>

      <h2>100 Channel Mission</h2>

      <p>Deadline: 10 November 2026</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Channel</th>
            <th>Status</th>
            <th>Scripts</th>
            <th>Videos</th>
            <th>Schedule</th>
          </tr>
        </thead>

                <tbody>
  {channels.map((channel) => (
    <tr key={channel.id}>
      <td>{channel.name}</td>
      <td>{channel.status}</td>
      <td>{channel.scriptsCompleted}/{channel.targetShorts}</td>
      <td>{channel.uploaded}/{channel.targetShorts}</td>
      <td>{channel.scheduled} Days</td>
    </tr>
  ))}

        </tbody>
      </table>
    </div>
  );
}