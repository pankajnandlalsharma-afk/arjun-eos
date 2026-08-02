import { useState } from "react";
import GatePass from "./GatePass";
import EnterpriseReceivingService from "./EnterpriseReceivingService";

export default function EnterpriseGate() {

    const [selectedResource, setSelectedResource] = useState(null);

    const [gatePass, setGatePass] = useState(null);

    const receivingService = new EnterpriseReceivingService();

    function selectResource(event) {

        const file = event.target.files[0];

        if (!file) return;

        setSelectedResource(file);

        setGatePass(null);

    }

    function receiveResource() {

        if (!selectedResource) {

            alert("Please select a resource.");

            return;

        }

        //------------------------------------------------------
        // STEP 1 : Enterprise Gate issues Gate Pass
        //------------------------------------------------------

        const pass = new GatePass({

            gatePassId: "GP-" + Date.now(),

            resourceName: selectedResource.name,

            resourceType: selectedResource.type || "UNKNOWN",

            source: "External World",

            destinationDepartment: "Enterprise Receiving Department"

        });

        //------------------------------------------------------
        // STEP 2 : Receiving Department accepts shipment
        //------------------------------------------------------

        const response = receivingService.receive(

            pass,

            selectedResource

        );

        //------------------------------------------------------
        // STEP 3 : Update UI
        //------------------------------------------------------

        setGatePass({

            ...pass,

            enterpriseResource: response.enterpriseResource

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

            <h3>Select Incoming Resource</h3>

            <input
                type="file"
                onChange={selectResource}
            />

            <br />
            <br />

            <button
                disabled={!selectedResource}
                onClick={receiveResource}
            >
                RECEIVE RESOURCE
            </button>

            {

                gatePass &&

                <>

                    <hr />

                    <h2>Gate Pass Issued</h2>

                    <table
                        border="1"
                        cellPadding="10"
                        style={{
                            width: "100%",
                            borderCollapse: "collapse"
                        }}
                    >

                        <tbody>

                            <tr>

                                <td><strong>Gate Pass</strong></td>

                                <td>{gatePass.gatePassId}</td>

                            </tr>

                            <tr>

                                <td><strong>Enterprise Resource</strong></td>

                                <td>{gatePass.enterpriseResource.resourceId}</td>

                            </tr>

                            <tr>

                                <td><strong>Resource</strong></td>

                                <td>{gatePass.resourceName}</td>

                            </tr>

                            <tr>

                                <td><strong>Type</strong></td>

                                <td>{gatePass.resourceType}</td>

                            </tr>

                            <tr>

                                <td><strong>Source</strong></td>

                                <td>{gatePass.source}</td>

                            </tr>

                            <tr>

                                <td><strong>Destination</strong></td>

                                <td>{gatePass.destinationDepartment}</td>

                            </tr>

                            <tr>

                                <td><strong>Status</strong></td>

                                <td>{gatePass.status}</td>

                            </tr>

                            <tr>

                                <td><strong>Entry Time</strong></td>

                                <td>{gatePass.entryTimestamp}</td>

                            </tr>

                        </tbody>

                    </table>

                    <br />

                    <div
                        style={{
                            padding: "15px",
                            background: "#e8f5e9",
                            borderRadius: "6px",
                            border: "1px solid #81c784"
                        }}
                    >

                        <strong>Receiving Department</strong>

                        <p>

                            ✅ Gate Pass issued successfully.

                        </p>

                        <p>

                            ✅ Enterprise Receiving Department accepted the shipment.

                        </p>

                        <p>

                            ✅ Enterprise Resource created successfully.

                        </p>

                        <p>

                            ➜ Ready for Inspection Department.

                        </p>

                    </div>

                </>

            }

        </div>

    );

}