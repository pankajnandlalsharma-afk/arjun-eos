import React from "react";

export default function KnowledgeViewer({ knowledge }) {

    if (!knowledge) {

        return (
            <div
                style={{
                    marginTop: "30px",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                }}
            >
                <h2>No Knowledge Extracted</h2>
            </div>
        );

    }

    function renderList(title, items) {

        return (

            <div
                style={{
                    marginTop: "25px"
                }}
            >

                <h3>{title}</h3>

                <hr />

                {

                    items && items.length > 0 ? (

                        <ul>

                            {

                                items.map((item, index) => (

                                    <li key={index}>

                                        {item}

                                    </li>

                                ))

                            }

                        </ul>

                    ) : (

                        <p>No Data Found</p>

                    )

                }

            </div>

        );

    }

    return (

        <div
            style={{
                marginTop: "40px",
                padding: "25px",
                border: "2px solid #1565c0",
                borderRadius: "10px",
                background: "#fafafa"
            }}
        >

            <h1>Knowledge Dashboard</h1>

            <hr />

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
                border="1"
                cellPadding="8"
            >

                <tbody>

                    <tr>

                        <td><strong>Document</strong></td>

                        <td>{knowledge.fileName}</td>

                    </tr>

                    <tr>

                        <td><strong>Source</strong></td>

                        <td>{knowledge.sourceType}</td>

                    </tr>

                    <tr>

                        <td><strong>Status</strong></td>

                        <td>{knowledge.extractionStatus}</td>

                    </tr>

                    <tr>

                        <td><strong>Extracted At</strong></td>

                        <td>

                            {new Date(
                                knowledge.extractedAt
                            ).toLocaleString()}

                        </td>

                    </tr>

                </tbody>

            </table>

            <br />

            <h2>Knowledge Summary</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
                border="1"
                cellPadding="8"
            >

                <tbody>

                    <tr>

                        <td>Keywords</td>

                        <td>{knowledge.keywords.length}</td>

                    </tr>

                    <tr>

                        <td>Definitions</td>

                        <td>{knowledge.definitions.length}</td>

                    </tr>

                    <tr>

                        <td>Concepts</td>

                        <td>{knowledge.concepts.length}</td>

                    </tr>

                    <tr>

                        <td>Facts</td>

                        <td>{knowledge.facts.length}</td>

                    </tr>

                    <tr>

                        <td>Principles</td>

                        <td>{knowledge.principles.length}</td>

                    </tr>

                    <tr>

                        <td>Procedures</td>

                        <td>{knowledge.procedures.length}</td>

                    </tr>

                    <tr>

                        <td>Timelines</td>

                        <td>{knowledge.timelines.length}</td>

                    </tr>

                    <tr>

                        <td>Checklists</td>

                        <td>{knowledge.checklists.length}</td>

                    </tr>

                    <tr>

                        <td>Examples</td>

                        <td>{knowledge.examples.length}</td>

                    </tr>

                    <tr>

                        <td>Exceptions</td>

                        <td>{knowledge.exceptions.length}</td>

                    </tr>

                    <tr>

                        <td>References</td>

                        <td>{knowledge.references.length}</td>

                    </tr>

                </tbody>

            </table>

            {renderList("Keywords", knowledge.keywords)}

            {renderList("Definitions", knowledge.definitions)}

            {renderList("Concepts", knowledge.concepts)}

            {renderList("Facts", knowledge.facts)}

            {renderList("Principles", knowledge.principles)}

            {renderList("Procedures", knowledge.procedures)}

            {renderList("Timelines", knowledge.timelines)}

            {renderList("Checklists", knowledge.checklists)}

            {renderList("Examples", knowledge.examples)}

            {renderList("Exceptions", knowledge.exceptions)}

            {renderList("References", knowledge.references)}

        </div>

    );

}