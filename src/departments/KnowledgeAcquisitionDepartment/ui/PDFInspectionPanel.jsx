import React, { useState } from "react";

export default function PDFInspectionPanel({

    inspection,

    onContinue,

    onCancel

}) {

    const [options, setOptions] = useState({

        text: true,

        metadata: true,

        statistics: true,

        pages: true,

        images: false,

        tables: false,

        hyperlinks: false,

        attachments: false

    });

    if (!inspection) {

        return null;

    }

    function toggle(key) {

        setOptions(previous => ({

            ...previous,

            [key]: !previous[key]

        }));

    }

    function continueImport() {

        onContinue({

            ...inspection,

            selectedOptions: options

        });

    }

    const metadata =
        inspection.metadata ||
        inspection.parserOutput?.metadata ||
        {};

    const statistics =
        inspection.statistics ||
        inspection.parserOutput?.statistics ||
        {};

    const capabilities =
        inspection.capabilities ||
        inspection.parserOutput?.capabilities ||
        {};

    const pages =
        inspection.pages ||
        inspection.parserOutput?.pages ||
        0;

    const file =
        inspection.file || {};

    return (

        <div

            style={{

                marginTop: "30px",

                border: "2px solid #1976d2",

                borderRadius: "10px",

                padding: "25px",

                background: "#fafafa"

            }}

        >

            <h2>

                Enterprise PDF Inspection

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

                        <td><strong>File Name</strong></td>

                        <td>

                            {metadata.fileName || file.name}

                        </td>

                    </tr>

                    <tr>

                        <td><strong>File Size</strong></td>

                        <td>

                            {

                                (

                                    (

                                        metadata.fileSize ||

                                        file.size ||

                                        0

                                    ) / 1024

                                ).toFixed(2)

                            }

                            {" "}KB

                        </td>

                    </tr>

                    <tr>

                        <td><strong>Pages</strong></td>

                        <td>

                            {

                                statistics.totalPages ||

                                pages

                            }

                        </td>

                    </tr>

                    <tr>

                        <td><strong>Total Words</strong></td>

                        <td>

                            {

                                statistics.totalWords || 0

                            }

                        </td>

                    </tr>

                    <tr>

                        <td><strong>Total Characters</strong></td>

                        <td>

                            {

                                statistics.totalCharacters || 0

                            }

                        </td>

                    </tr>

                    <tr>

                        <td>

                            <strong>

                                Average Words/Page

                            </strong>

                        </td>

                        <td>

                            {

                                statistics.averageWordsPerPage || 0

                            }

                        </td>

                    </tr>

                </tbody>

            </table>

            <hr />

            <h3>

                Detected Capabilities

            </h3>

            <ul>

                {

                    Object.entries(capabilities)

                        .map(

                            ([key, value]) =>

                                <li key={key}>

                                    {

                                        value

                                            ? "✅"

                                            : "❌"

                                    }

                                    {" "}

                                    {key}

                                </li>

                        )

                }

            </ul>

            <hr />

            <h3>

                Import Options

            </h3>

            {

                Object.keys(options)

                    .map(key => (

                        <label

                            key={key}

                            style={{

                                display: "block",

                                marginBottom: "8px"

                            }}

                        >

                            <input

                                type="checkbox"

                                checked={options[key]}

                                onChange={() => toggle(key)}

                            />

                            {" "}

                            {key}

                        </label>

                    ))

            }

            <hr />

            <button

                onClick={continueImport}

            >

                Continue Import

            </button>

            {" "}

            <button

                onClick={onCancel}

            >

                Cancel

            </button>

        </div>

    );

}