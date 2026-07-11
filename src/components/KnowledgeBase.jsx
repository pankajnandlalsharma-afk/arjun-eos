export default function KnowledgeBase() {

const documents = [

"Enterprise Vision",

"Mission Statement",

"SOP Library",

"Prompt Library",

"KPI Standards",

"AI Agent Manual",

"Quality Standards",

"Production Standards",

"Channel Standards",

"Automation Rules",

"Legal Documents",

"HR Policies",

"Training Material",

"Meeting Notes",

"Project Documentation"

];

return (

<div style={{padding:"30px"}}>

<h1>📚 Knowledge Base</h1>

<table border="1" cellPadding="8">

<thead>

<tr>

<th>Document</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{documents.map(doc=>(

<tr key={doc}>

<td>{doc}</td>

<td>Available</td>

</tr>

))}

</tbody>

</table>

</div>

);

}