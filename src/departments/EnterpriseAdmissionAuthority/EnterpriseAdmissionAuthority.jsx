import { useState } from "react";

import AdmissionTicket from "./AdmissionTicket";
import AdmissionQueue from "./AdmissionQueue";

export default function EnterpriseAdmissionAuthority() {

    const [queue] = useState(new AdmissionQueue());

    const [selectedFile, setSelectedFile] = useState(null);

    const [statistics, setStatistics] = useState(
        queue.getStatistics()
    );

    function selectKnowledgeAsset(event) {

        const file = event.target.files[0];

        if (!file) return;

        setSelectedFile(file);

    }

    function admitKnowledgeAsset() {

        if (!selectedFile) {

            alert("Please select a Knowledge Asset.");

            return;

        }

        const ticket = new AdmissionTicket({

            ticketId: "AT-" + Date.now(),

            knowledgeAssetName: selectedFile.name,

            knowledgeAssetType: selectedFile.type,

            source: "External World",

            requestedBy: "Knowledge Acquisition Department"

        });

        queue.enqueue(ticket);

        setStatistics(queue.getStatistics());

        alert(

            "Knowledge Asset admitted to Enterprise Queue.\n\n" +

            "Admission Ticket : " +

            ticket.ticketId

        );

        setSelectedFile(null);

    }

    return (

        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                padding: "30px",
                fontFamily: "Arial"
            }}
        >

            <h1>

                ARJUN EOS

            </h1>

            <h2>

                Enterprise Admission Authority

            </h2>

            <p>

                Every Knowledge Asset must obtain Enterprise Admission
                before entering ARJUN EOS.

            </p>

            <hr />

            <h3>

                Acquire Knowledge Asset

            </h3>

            <input

                type="file"

                onChange={selectKnowledgeAsset}

            />

            <br /><br />

            <button

                onClick={admitKnowledgeAsset}

            >

                Authorize Enterprise Admission

            </button>

            <hr />

            <h3>

                Enterprise Admission Queue

            </h3>

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

                        <td><strong>Pending</strong></td>

                        <td>{statistics.pending}</td>

                    </tr>

                    <tr>

                        <td><strong>Approved</strong></td>

                        <td>{statistics.approved}</td>

                    </tr>

                    <tr>

                        <td><strong>Rejected</strong></td>

                        <td>{statistics.rejected}</td>

                    </tr>

                    <tr>

                        <td><strong>Total Requests</strong></td>

                        <td>{statistics.total}</td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

}