import KnowledgeAcquisitionController from "../../../controllers/KnowledgeAcquisitionController";

export default function EnterpriseClassificationCenter() {

    const controller = new KnowledgeAcquisitionController();

    const resources = controller.getAllResources();

    function classify(resourceId) {

        controller.classifyResource(resourceId);

        window.location.reload();

    }

    return (

        <div>

            <h2>
                Enterprise Classification Center
            </h2>

            <p>
                Classify enterprise resources before knowledge extraction.
            </p>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th align="left">Resource</th>

                        <th align="left">Current Category</th>

                        <th align="left">Confidence</th>

                        <th align="center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        resources.length === 0

                        ?

                        <tr>

                            <td
                                colSpan="4"
                                align="center"
                                style={{
                                    padding: "25px"
                                }}
                            >

                                No enterprise resources found.

                            </td>

                        </tr>

                        :

                        resources.map(resource => (

                            <tr
                                key={resource.resourceId}
                                style={{
                                    borderTop: "1px solid #ddd"
                                }}
                            >

                                <td>

                                    {resource.resourceName}

                                </td>

                                <td>

                                    {
                                        resource.classification?.category
                                        ||
                                        "Not Classified"
                                    }

                                </td>

                                <td>

                                    {

                                        resource.classification

                                            ?

                                            `${Math.round(resource.classification.confidence * 100)}%`

                                            :

                                            "-"

                                    }

                                </td>

                                <td align="center">

                                    <button
                                        onClick={() =>
                                            classify(resource.resourceId)
                                        }
                                    >

                                        Classify

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