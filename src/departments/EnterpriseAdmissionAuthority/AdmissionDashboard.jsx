import React from "react";

export default function AdmissionDashboard({

    statistics

}) {

    return (

        <div
            style={{

                marginTop: "30px",

                padding: "25px",

                border: "2px solid #1565c0",

                borderRadius: "10px",

                background: "#f8fbff"

            }}
        >

            <h2>

                Enterprise Admission Command Center

            </h2>

            <hr />

            <table

                style={{

                    width: "100%",

                    borderCollapse: "collapse"

                }}

                border="1"

                cellPadding="10"

            >

                <tbody>

                    <tr>

                        <td>

                            <strong>

                                Pending Admissions

                            </strong>

                        </td>

                        <td>

                            {statistics.pending}

                        </td>

                    </tr>

                    <tr>

                        <td>

                            <strong>

                                Approved Admissions

                            </strong>

                        </td>

                        <td>

                            {statistics.approved}

                        </td>

                    </tr>

                    <tr>

                        <td>

                            <strong>

                                Rejected Admissions

                            </strong>

                        </td>

                        <td>

                            {statistics.rejected}

                        </td>

                    </tr>

                    <tr>

                        <td>

                            <strong>

                                Total Requests

                            </strong>

                        </td>

                        <td>

                            {statistics.total}

                        </td>

                    </tr>

                </tbody>

            </table>

            <br />

            <div
                style={{

                    padding: "15px",

                    background: "#eef7ee",

                    borderRadius: "8px",

                    border: "1px solid #81c784"

                }}
            >

                <strong>

                    Enterprise Status

                </strong>

                <p>

                    The Enterprise Admission Authority is operational.

                </p>

                <p>

                    Knowledge Assets are being admitted into the Enterprise Admission Queue.

                </p>

                <p>

                    Awaiting handover to the Enterprise Receiving Department.

                </p>

            </div>

        </div>

    );

}