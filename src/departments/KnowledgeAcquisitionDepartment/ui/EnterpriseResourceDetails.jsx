export default function EnterpriseResourceDetails() {

    const resource = {

        resourceId: "ER-000001",

        resourceName: "Constitution of India.pdf",

        originalFileName: "constitution.pdf",

        resourceType: "DOCUMENT",

        sourceType: "PDF",

        lifecycle: "REGISTERED",

        version: 1,

        createdAt: "2026-08-04",

        updatedAt: "2026-08-04",

        metadata: {

            pages: 395,

            fileSize: "5.2 MB",

            language: "English"

        }

    };

    function action(name) {

        alert(name + " (Sprint 3)");

    }

    return (

        <div>

            <h2>
                Enterprise Resource Details
            </h2>

            <hr />

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <tbody>

                    <tr>
                        <td><strong>Enterprise ID</strong></td>
                        <td>{resource.resourceId}</td>
                    </tr>

                    <tr>
                        <td><strong>Resource Name</strong></td>
                        <td>{resource.resourceName}</td>
                    </tr>

                    <tr>
                        <td><strong>Original File</strong></td>
                        <td>{resource.originalFileName}</td>
                    </tr>

                    <tr>
                        <td><strong>Resource Type</strong></td>
                        <td>{resource.resourceType}</td>
                    </tr>

                    <tr>
                        <td><strong>Source</strong></td>
                        <td>{resource.sourceType}</td>
                    </tr>

                    <tr>
                        <td><strong>Lifecycle</strong></td>
                        <td>{resource.lifecycle}</td>
                    </tr>

                    <tr>
                        <td><strong>Version</strong></td>
                        <td>{resource.version}</td>
                    </tr>

                    <tr>
                        <td><strong>Created</strong></td>
                        <td>{resource.createdAt}</td>
                    </tr>

                    <tr>
                        <td><strong>Updated</strong></td>
                        <td>{resource.updatedAt}</td>
                    </tr>

                </tbody>

            </table>

            <hr />

            <h3>
                Metadata
            </h3>

            <table
                style={{
                    width: "100%"
                }}
            >

                <tbody>

                    <tr>
                        <td><strong>Pages</strong></td>
                        <td>{resource.metadata.pages}</td>
                    </tr>

                    <tr>
                        <td><strong>File Size</strong></td>
                        <td>{resource.metadata.fileSize}</td>
                    </tr>

                    <tr>
                        <td><strong>Language</strong></td>
                        <td>{resource.metadata.language}</td>
                    </tr>

                </tbody>

            </table>

            <hr />

            <h3>
                Audit Trail
            </h3>

            <p>
                No audit records available.
            </p>

            <hr />

            <h3>
                Knowledge Objects
            </h3>

            <p>
                No extracted knowledge objects.
            </p>

            <hr />

            <button
                onClick={() => action("Open")}
            >
                Open
            </button>

            {" "}

            <button
                onClick={() => action("Validate")}
            >
                Validate
            </button>

            {" "}

            <button
                onClick={() => action("Reprocess")}
            >
                Reprocess
            </button>

            {" "}

            <button
                onClick={() => action("Delete")}
            >
                Delete
            </button>

        </div>

    );

}