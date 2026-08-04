import { useMemo, useState } from "react";

export default function EnterpriseResourceExplorer() {

    const [search, setSearch] = useState("");

    const resources = [

        {
            id: "ER-001",
            name: "Constitution.pdf",
            type: "PDF",
            source: "PDF Upload",
            status: "VALIDATED",
            importedOn: "2026-08-04"
        },

        {
            id: "ER-002",
            name: "BNSS Notes.docx",
            type: "DOCX",
            source: "Manual Upload",
            status: "IMPORTED",
            importedOn: "2026-08-04"
        },

        {
            id: "ER-003",
            name: "CrimeScene.jpg",
            type: "IMAGE",
            source: "Image Upload",
            status: "PENDING",
            importedOn: "2026-08-04"
        }

    ];

    const filteredResources = useMemo(() => {

        const keyword = search.trim().toLowerCase();

        if (!keyword)
            return resources;

        return resources.filter(resource =>
            resource.name.toLowerCase().includes(keyword) ||
            resource.type.toLowerCase().includes(keyword) ||
            resource.status.toLowerCase().includes(keyword)
        );

    }, [search]);

    function action(message) {

        alert(message + " (Sprint 3)");

    }

    return (

        <div>

            <h2>
                Enterprise Resource Explorer
            </h2>

            <p>
                View and manage every enterprise resource imported into ARJUN EOS.
            </p>

            <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "15px",
                    marginBottom: "20px"
                }}
            />

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th align="left">Name</th>

                        <th align="left">Type</th>

                        <th align="left">Status</th>

                        <th align="left">Source</th>

                        <th align="left">Imported</th>

                        <th align="center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        filteredResources.map(resource => (

                            <tr
                                key={resource.id}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >

                                <td>{resource.name}</td>

                                <td>{resource.type}</td>

                                <td>{resource.status}</td>

                                <td>{resource.source}</td>

                                <td>{resource.importedOn}</td>

                                <td align="center">

                                    <button
                                        onClick={() =>
                                            action("Open " + resource.name)
                                        }
                                    >
                                        Open
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            action("Inspect " + resource.name)
                                        }
                                    >
                                        Inspect
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            action("Delete " + resource.name)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}