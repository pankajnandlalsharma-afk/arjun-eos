import { channels } from "../data/enterpriseData";

export default function ProductionTracker() {
  const stages = [
    "Idea",
    "Research",
    "Keyword Research",
    "Script Writing",
    "Fact Check",
    "Quality Review",
    "Voice Generation",
    "Background Music",
    "Video Creation",
    "Editing",
    "Thumbnail Design",
    "Title Creation",
    "SEO Description",
    "Tags",
    "Hashtags",
    "CTA",
    "End Screen",
    "YouTube Upload",
    "Instagram Upload",
    "Facebook Upload",
    "X Upload",
    "LinkedIn Upload",
    "Scheduling",
    "Publishing",
    "Auto Reply",
    "Comment Reply",
    "Analytics",
    "Optimization"
  ];

  const channel = channels[0];

  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Production Tracker</h1>

      <h2>{channel.name}</h2>

      <p>
        Target Shorts : {channel.targetShorts}
      </p>

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
            <th>Stage</th>
            <th>Target</th>
            <th>Completed</th>
            <th>Remaining</th>
            <th>Progress</th>
          </tr>
        </thead>

        <tbody>
          {stages.map((stage) => (
            <tr key={stage}>
              <td>{stage}</td>

              <td>{channel.targetShorts}</td>

              <td>0</td>

              <td>{channel.targetShorts}</td>

              <td>0%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h2>Content Quality Checklist</h2>

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
            <th>Checklist</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr><td>Topic Finalized</td><td>❌</td></tr>
          <tr><td>Keyword Research</td><td>❌</td></tr>
          <tr><td>Script Approved</td><td>❌</td></tr>
          <tr><td>Voice Generated</td><td>❌</td></tr>
          <tr><td>Music Added</td><td>❌</td></tr>
          <tr><td>Video Edited</td><td>❌</td></tr>
          <tr><td>Thumbnail Ready</td><td>❌</td></tr>
          <tr><td>Title Ready</td><td>❌</td></tr>
          <tr><td>SEO Description</td><td>❌</td></tr>
          <tr><td>Tags Added</td><td>❌</td></tr>
          <tr><td>Hashtags Added</td><td>❌</td></tr>
          <tr><td>CTA Added</td><td>❌</td></tr>
          <tr><td>End Screen Added</td><td>❌</td></tr>
          <tr><td>YouTube Uploaded</td><td>❌</td></tr>
          <tr><td>Instagram Uploaded</td><td>❌</td></tr>
          <tr><td>Facebook Uploaded</td><td>❌</td></tr>
          <tr><td>X Uploaded</td><td>❌</td></tr>
          <tr><td>LinkedIn Uploaded</td><td>❌</td></tr>
          <tr><td>Scheduled</td><td>❌</td></tr>
          <tr><td>Published</td><td>❌</td></tr>
          <tr><td>Auto Reply Enabled</td><td>❌</td></tr>
          <tr><td>Comments Replied</td><td>❌</td></tr>
          <tr><td>Analytics Updated</td><td>❌</td></tr>
          <tr><td>Optimization Done</td><td>❌</td></tr>
        </tbody>
      </table>
    </div>
  );
}