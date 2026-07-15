import React from "react";

export default function KnowledgeViewer({ knowledge }) {

    if (!knowledge) {

        return (
            <div style={{ padding: "20px" }}>
                <h2>No Knowledge Extracted</h2>
            </div>
        );

    }

    return (

        <div style={{ padding: "20px" }}>

            <h2>Knowledge Summary</h2>

            <hr />

            <table border="1" cellPadding="8">

                <tbody>

                    <tr>

                        <td>Document</td>

                        <td>{knowledge.fileName}</td>

                    </tr>

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

                        <td>Procedures</td>

                        <td>{knowledge.procedures.length}</td>

                    </tr>

                    <tr>

                        <td>References</td>

                        <td>{knowledge.references.length}</td>

                    </tr>

                    <tr>

                        <td>Status</td>

                        <td>{knowledge.extractionStatus}</td>

                    </tr>

                </tbody>

            </table>

            <br />

            <h3>Keywords</h3>

            <ul>

                {

                    knowledge.keywords.map((item,index)=>

                        <li key={index}>{item}</li>

                    )

                }

            </ul>

            <h3>Definitions</h3>

            <ul>

                {

                    knowledge.definitions.map((item,index)=>

                        <li key={index}>{item}</li>

                    )

                }

            </ul>

            <h3>Concepts</h3>

            <ul>

                {

                    knowledge.concepts.map((item,index)=>

                        <li key={index}>{item}</li>

                    )

                }

            </ul>

            <h3>Procedures</h3>

            <ul>

                {

                    knowledge.procedures.map((item,index)=>

                        <li key={index}>{item}</li>

                    )

                }

            </ul>

            <h3>References</h3>

            <ul>

                {

                    knowledge.references.map((item,index)=>

                        <li key={index}>{item}</li>

                    )

                }

            </ul>

        </div>

    );

}