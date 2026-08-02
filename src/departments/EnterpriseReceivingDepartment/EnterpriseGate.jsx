import { useState } from "react";

export default function EnterpriseGate() {

    const [resource, setResource] = useState(null);

    const [receipt, setReceipt] = useState(null);

    function selectResource(event) {

        const file = event.target.files[0];

        if (!file) return;

        setResource(file);

        setReceipt(null);

    }

    function receiveResource() {

        if (!resource) {

            alert("Please select a resource first.");

            return;

        }

        const enterpriseResourceId = crypto.randomUUID();

        setReceipt({

            enterpriseResourceId,

            fileName: resource.name,

            fileSize: resource.size,

            resourceType: resource.type,

            receivedAt: new Date().toLocaleString(),

            status: "RECEIVED",

            nextDepartment: "Enterprise Receiving Department"

        });

    }

    return (

        <div
            style={{
                maxWidth: "900px",
                margin: "40px auto",
                padding: "30px",
                border: "2px solid #1565c0",
                borderRadius: "10px",
                fontFamily: "Arial"
            }}
        >

            <h1>ARJUN EOS</h1>

            <h2>Enterprise Gate</h2>

            <p>

                Nothing enters ARJUN EOS without passing through the Enterprise Gate.

            </p>

            <hr />

            <h3>Incoming Resource</h3>

            <input
                type="file"
                onChange={selectResource}
            />

            <br /><br />

            <button
                onClick={receiveResource}
                disabled={!resource}
            >
                RECEIVE RESOURCE
            </button>

            <hr />

            {

                receipt &&

                <div>

                    <h2>Enterprise Receipt</h2>

                    <table
                        border="1"
                        cellPadding="10"
                        style={{
                            borderCollapse: "collapse",
                            width: "100%"
                        }}
                    >

                        <tbody>

                            <tr>

                                <td><strong>Enterprise Resource ID</strong></td>

                                <td>{receipt.enterpriseResourceId}</td>

                            </tr>

                            <tr>

                                <td><strong>Resource</strong></td>

                                <td>{receipt.fileName}</td>

                            </tr>

                            <tr>

                                <td><strong>Size</strong></td>

                                <td>{receipt.fileSize} bytes</td>

                            </tr>

                            <tr>

                                <td><strong>Type</strong></td>

                                <td>{receipt.resourceType}</td>

                            </tr>

                            <tr>

                                <td><strong>Status</strong></td>

                                <td>{receipt.status}</td>

                            </tr>

                            <tr>

                                <td><strong>Received At</strong></td>

                                <td>{receipt.receivedAt}</td>

                            </tr>

                            <tr>

                                <td><strong>Transferred To</strong></td>

                                <td>{receipt.nextDepartment}</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            }

        </div>

    );

}