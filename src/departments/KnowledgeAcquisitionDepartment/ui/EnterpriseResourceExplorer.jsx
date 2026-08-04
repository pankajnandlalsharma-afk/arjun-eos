import { useMemo, useState } from "react";

import KnowledgeAcquisitionRepository from "../../../repositories/KnowledgeAcquisitionRepository";

export default function EnterpriseResourceExplorer() {

    const [search, setSearch] = useState("");

    const repository = new KnowledgeAcquisitionRepository();

    const resources = repository.getAll();

    const filteredResources = useMemo(() => {

        if (!search.trim())
            return resources;

        return repository.search(search);

    }, [search, resources]);

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

                onChange={(e) =>
                    setSearch(e.target.value)
                }

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

                        <th align="left">

                            Resource

                        </th>

                        <th align="left">

                            Type

                        </th>

                        <th align="left">

                            Source

                        </th>

                        <th align="left">

                            Lifecycle

                        </th>

                        <th align="left">

                            Created

                        </th>

                        <th align="center">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        filteredResources.length === 0

                            ?

                            <tr>

                                <td
                                    colSpan="6"
                                    align="center"
                                    style={{
                                        padding: "25px"
                                    }}
                                >

                                    No enterprise resources found.

                                </td>

                            </tr>

                            :

                            filteredResources.map(resource => (

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

                                        {resource.sourceType}

                                    </td>

                                    <td>

                                        {resource.lifecycle}

                                    </td>

                                    <td>

                                        {

                                            resource.createdAt
                                                ?.substring(0, 10)

                                        }

                                    </td>

                                    <td align="center">

                                        <button
                                            onClick={() =>
                                                action(
                                                    "Open " +
                                                    resource.resourceName
                                                )
                                            }
                                        >

                                            Open

                                        </button>

                                        {" "}

                                        <button
                                            onClick={() =>
                                                action(
                                                    "Inspect " +
                                                    resource.resourceName
                                                )
                                            }
                                        >

                                            Inspect

                                        </button>

                                        {" "}

                                        <button
                                            onClick={() => {

                                                repository.delete(
                                                    resource.resourceId
                                                );

                                                window.location.reload();

                                            }}
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