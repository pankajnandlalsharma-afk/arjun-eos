import KnowledgeAcquisitionRepository from "../../../repositories/KnowledgeAcquisitionRepository";

export default function EnterpriseResourceDetails() {

    const repository = new KnowledgeAcquisitionRepository();

    const resources = repository.getAll();

    const resource = resources.length > 0
        ? resources[0]
        : null;

    function action(name) {

        alert(name + " (Sprint 3)");

    }

    if (!resource) {

        return (

            <div>

                <h2>
                    Enterprise Resource Details
                </h2>

                <hr />

                <p>
                    No enterprise resource available.
                </p>

            </div>

        );

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
                        <td>{resource.metadata?.pages ?? "-"}</td>
                    </tr>

                    <tr>
                        <td><strong>File Size</strong></td>
                        <td>{resource.metadata?.fileSize ?? "-"}</td>
                    </tr>

                    <tr>
                        <td><strong>Language</strong></td>
                        <td>{resource.metadata?.language ?? "-"}</td>
                    </tr>

                </tbody>

            </table>

            <hr />

            <h3>
                Audit Trail
            </h3>

            <p>

                {

                    resource.auditTrail?.length

                        ? `${resource.auditTrail.length} audit records`

                        : "No audit records available."

                }

            </p>

            <hr />

            <h3>
                Knowledge Objects
            </h3>

            <p>

                Coming in Sprint 4

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