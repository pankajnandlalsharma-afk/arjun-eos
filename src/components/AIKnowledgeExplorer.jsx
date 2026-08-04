import { useMemo, useState } from "react";

import SemanticSearchController
    from "../controllers/SemanticSearchController";

import KnowledgeGraphController
    from "../controllers/KnowledgeGraphController";

export default function AIKnowledgeExplorer() {

    const searchController =
        new SemanticSearchController();

    const graphController =
        new KnowledgeGraphController();

    const [query, setQuery] = useState("");

    const searchResults = useMemo(() => {

        return searchController.search(query);

    }, [query]);

    const graphStats =
        graphController.getStatistics();

    return (

        <div>

            <h2>

                AI Knowledge Explorer

            </h2>

            <p>

                Explore enterprise knowledge using semantic search and the knowledge graph.

            </p>

            <input

                type="text"

                placeholder="Search enterprise knowledge..."

                value={query}

                onChange={(e) =>

                    setQuery(e.target.value)

                }

                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "20px"
                }}

            />

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px"
                }}
            >

                <div>

                    <strong>Total Nodes</strong>

                    <br />

                    {graphStats.totalNodes}

                </div>

                <div>

                    <strong>Total Edges</strong>

                    <br />

                    {graphStats.totalEdges}

                </div>

                <div>

                    <strong>Results</strong>

                    <br />

                    {searchResults.length}

                </div>

            </div>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th align="left">Title</th>

                        <th align="left">Category</th>

                        <th align="left">Score</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        searchResults.length === 0

                        ?

                        <tr>

                            <td
                                colSpan="3"
                                align="center"
                                style={{
                                    padding: "20px"
                                }}
                            >

                                No matching knowledge found.

                            </td>

                        </tr>

                        :

                        searchResults.map(result => (

                            <tr
                                key={
                                    result.knowledge.knowledgeId
                                }
                                style={{
                                    borderTop:
                                        "1px solid #ddd"
                                }}
                            >

                                <td>

                                    {
                                        result.knowledge.title
                                    }

                                </td>

                                <td>

                                    {
                                        result.knowledge.category
                                    }

                                </td>

                                <td>

                                    {result.score}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}