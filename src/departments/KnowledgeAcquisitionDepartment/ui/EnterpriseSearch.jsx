import { useMemo, useState } from "react";

export default function EnterpriseSearch() {

    const [query, setQuery] = useState("");

    const resources = [

        {
            id: "ER-001",
            name: "Constitution.pdf",
            type: "PDF",
            status: "Validated"
        },

        {
            id: "ER-002",
            name: "BNSS Notes.docx",
            type: "DOCX",
            status: "Imported"
        },

        {
            id: "ER-003",
            name: "CrimeScene.jpg",
            type: "IMAGE",
            status: "Pending"
        }

    ];

    const results = useMemo(() => {

        const keyword = query.trim().toLowerCase();

        if (!keyword)
            return resources;

        return resources.filter(resource =>
            resource.name.toLowerCase().includes(keyword) ||
            resource.type.toLowerCase().includes(keyword) ||
            resource.status.toLowerCase().includes(keyword)
        );

    }, [query]);

    function action(name, resource) {

        alert(name + " : " + resource + " (Sprint 3)");

    }

    return (

        <div>

            <h2>
                Enterprise Search
            </h2>

            <p>
                Search enterprise knowledge resources.
            </p>

            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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

                        <th align="center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        results.map(resource => (

                            <tr
                                key={resource.id}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >

                                <td>{resource.name}</td>

                                <td>{resource.type}</td>

                                <td>{resource.status}</td>

                                <td align="center">

                                    <button
                                        onClick={() =>
                                            action("Open", resource.name)
                                        }
                                    >
                                        Open
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            action("Inspect", resource.name)
                                        }
                                    >
                                        Inspect
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            action("Export", resource.name)
                                        }
                                    >
                                        Export
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