import KnowledgeAcquisitionController from "../../../controllers/KnowledgeAcquisitionController";

export default function EnterpriseValidationCenter() {

    const controller = new KnowledgeAcquisitionController();

    const validationQueue = controller.getValidationQueue();

    function approve(resourceId) {

        controller.approveResource(resourceId);

        window.location.reload();

    }

    function reject(resourceId) {

        controller.rejectResource(resourceId);

        window.location.reload();

    }

    function reprocess(resourceId) {

        controller.markPending(resourceId);

        window.location.reload();

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

                        <th align="left">
                            Resource ID
                        </th>

                        <th align="left">
                            Resource
                        </th>

                        <th align="left">
                            Lifecycle
                        </th>

                        <th align="center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        validationQueue.length === 0

                        ?

                        <tr>

                            <td
                                colSpan="4"
                                align="center"
                                style={{
                                    padding: "25px"
                                }}
                            >

                                No resources waiting for validation.

                            </td>

                        </tr>

                        :

                        validationQueue.map(resource => (

                            <tr
                                key={resource.resourceId}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >

                                <td>

                                    {resource.resourceId}

                                </td>

                                <td>

                                    {resource.resourceName}

                                </td>

                                <td>

                                    {resource.lifecycle}

                                </td>

                                <td align="center">

                                    <button
                                        onClick={() =>
                                            approve(resource.resourceId)
                                        }
                                    >
                                        Approve
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            reject(resource.resourceId)
                                        }
                                    >
                                        Reject
                                    </button>

                                    {" "}

                                    <button
                                        onClick={() =>
                                            reprocess(resource.resourceId)
                                        }
                                    >
                                        Pending
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