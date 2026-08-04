export default function EnterpriseValidationCenter() {

    const validationQueue = [

        {
            id: "ER-001",
            resource: "Constitution.pdf",
            status: "Pending"
        },

        {
            id: "ER-002",
            resource: "BNSS Notes.docx",
            status: "Validated"
        },

        {
            id: "ER-003",
            resource: "CrimeScene.jpg",
            status: "Warning"
        }

    ];

    function action(name, resource) {

        alert(name + " : " + resource + " (Sprint 3)");

    }

    return (

        <div>

            <h2>
                Enterprise Validation Center
            </h2>

            <p>
                Validate enterprise resources before knowledge extraction.
            </p>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th align="left">ID</th>

                        <th align="left">Resource</th>

                        <th align="left">Status</th>

                        <th align="center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        validationQueue.map(item => (

                            <tr
                                key={item.id}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >

                                <td>{item.id}</td>

                                <td>{item.resource}</td>

                                <td>{item.status}</td>

                                <td align="center">

                                    <button
                                        onClick={() =>
                                            action("Validate", item.resource)
                                        }
                                    >
                                        Validate
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            action("Reject", item.resource)
                                        }
                                    >
                                        Reject
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            action("Reprocess", item.resource)
                                        }
                                    >
                                        Reprocess
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