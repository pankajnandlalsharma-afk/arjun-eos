import { useMemo, useState } from "react";

import KnowledgeAcquisitionController
    from "../../../controllers/KnowledgeAcquisitionController";

export default function EnterpriseSearchCenter() {

    const controller = new KnowledgeAcquisitionController();

    const [keyword, setKeyword] = useState("");

    const resources = controller.getAllResources();

    const results = useMemo(() => {

        if (!keyword.trim()) {

            return resources;

        }

        const search = keyword.toLowerCase();

        return resources.filter(resource =>

            (resource.resourceName || "")
                .toLowerCase()
                .includes(search)

            ||

            (resource.resourceType || "")
                .toLowerCase()
                .includes(search)

            ||

            (resource.sourceType || "")
                .toLowerCase()
                .includes(search)

            ||

            (resource.lifecycle || "")
                .toLowerCase()
                .includes(search)

            ||

            (resource.category || "")
                .toLowerCase()
                .includes(search)

        );

    }, [keyword, resources]);

    return (

        <div>

            <h2>

                Enterprise Search Center

            </h2>

            <p>

                Search enterprise knowledge resources.

            </p>

            <input

                type="text"

                placeholder="Search by name, type, source, lifecycle or category..."

                value={keyword}

                onChange={(e) => setKeyword(e.target.value)}

                style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "20px"
                }}

            />

            <h3>

                Results ({results.length})

            </h3>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th align="left">Resource</th>

                        <th align="left">Type</th>

                        <th align="left">Category</th>

                        <th align="left">Lifecycle</th>

                        <th align="left">Source</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        results.length === 0

                        ?

                        <tr>

                            <td
                                colSpan="5"
                                align="center"
                                style={{
                                    padding: "25px"
                                }}
                            >

                                No matching resources found.

                            </td>

                        </tr>

                        :

                        results.map(resource => (

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

                                    {resource.resourceType}

                                </td>

                                <td>

                                    {resource.category || "-"}

                                </td>

                                <td>

                                    {resource.lifecycle}

                                </td>

                                <td>

                                    {resource.sourceType}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}