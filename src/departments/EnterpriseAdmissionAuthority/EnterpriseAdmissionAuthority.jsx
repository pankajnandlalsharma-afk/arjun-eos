import { useState } from "react";

import AdmissionTicket from "./AdmissionTicket";
import AdmissionQueue from "./AdmissionQueue";
import AdmissionDashboard from "./AdmissionDashboard";

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

        //--------------------------------------------------
        // Create Admission Ticket
        //--------------------------------------------------

        const ticket = new AdmissionTicket({

            ticketId: "AT-" + Date.now(),

            knowledgeAssetName: selectedFile.name,

            knowledgeAssetType: selectedFile.type,

            source: "External World",

            requestedBy: "Knowledge Acquisition Department"

        });

        //--------------------------------------------------
        // Enterprise Admission
        //--------------------------------------------------

        queue.enqueue(ticket);

        queue.approve(ticket.ticketId);

        //--------------------------------------------------
        // Refresh Dashboard
        //--------------------------------------------------

        setStatistics(

            queue.getStatistics()

        );

        //--------------------------------------------------
        // Reset
        //--------------------------------------------------

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

            <br />

            <br />

            {

                selectedFile &&

                <div
                    style={{
                        padding: "12px",
                        background: "#f5f5f5",
                        borderRadius: "6px",
                        marginBottom: "20px"
                    }}
                >

                    <strong>Selected Knowledge Asset</strong>

                    <br />

                    {selectedFile.name}

                    <br />

                    {(selectedFile.size / 1024).toFixed(2)} KB

                </div>

            }

            <button

                disabled={!selectedFile}

                onClick={admitKnowledgeAsset}

            >

                Authorize Enterprise Admission

            </button>

            <AdmissionDashboard

                statistics={statistics}

            />

        </div>

    );

}