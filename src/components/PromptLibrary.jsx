export default function PromptLibrary() {

const prompts = [
"Script Writer",
"SEO Generator",
"Thumbnail Prompt",
"Image Prompt",
"Voice Prompt",
"Video Prompt",
"Title Generator",
"Description Generator",
"Hashtag Generator",
"Research Prompt",
"Fact Check Prompt",
"Publishing Prompt",
"Analytics Prompt",
"Optimization Prompt",
"Legal Review Prompt"
];

return (
<div style={{ padding: "30px" }}>

<h1>🧠 Prompt Library</h1>

<table border="1" cellPadding="8">

<thead>
<tr>
<th>Prompt</th>
<th>Status</th>
</tr>
</thead>

<tbody>
{prompts.map((prompt) => (
<tr key={prompt}>
<td>{prompt}</td>
<td>Ready</td>
</tr>
))}
</tbody>

</table>

</div>
);
}