export default function AIAgents() {

const agents = [

"CEO AI",

"Mission AI",

"Research AI",

"Keyword AI",

"Script AI",

"SEO AI",

"Thumbnail AI",

"Voice AI",

"Music AI",

"Video AI",

"Quality AI",

"Publishing AI",

"Analytics AI",

"Finance AI",

"Legal AI",

"HR AI",

"Prompt AI",

"Knowledge AI",

"Automation AI",

"System Architect AI"

];

return (

<div style={{padding:"30px"}}>

<h1>🤖 AI Agent Center</h1>

<table border="1" cellPadding="8">

<thead>

<tr>

<th>Agent</th>

<th>Status</th>

<th>Assigned</th>

</tr>

</thead>

<tbody>

{agents.map(agent=>(

<tr key={agent}>

<td>{agent}</td>

<td>Ready</td>

<td>None</td>

</tr>

))}

</tbody>

</table>

</div>

);

}