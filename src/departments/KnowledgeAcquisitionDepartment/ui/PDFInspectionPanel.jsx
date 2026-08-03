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

                        <td>{inspection.metadata.fileName}</td>

                    </tr>

                    <tr>

                        <td><strong>File Size</strong></td>

                        <td>

                            {(inspection.metadata.fileSize / 1024).toFixed(2)} KB

                        </td>

                    </tr>

                    <tr>

                        <td><strong>Pages</strong></td>

                        <td>{inspection.statistics.totalPages}</td>

                    </tr>

                    <tr>

                        <td><strong>Total Words</strong></td>

                        <td>{inspection.statistics.totalWords}</td>

                    </tr>

                    <tr>

                        <td><strong>Total Characters</strong></td>

                        <td>{inspection.statistics.totalCharacters}</td>

                    </tr>

                    <tr>

                        <td><strong>Average Words/Page</strong></td>

                        <td>{inspection.statistics.averageWordsPerPage}</td>

                    </tr>

                </tbody>

            </table>

            <hr />

            <h3>

                Import Options

            </h3>

            <label>

                <input

                    type="checkbox"

                    checked={options.text}

                    onChange={() => toggle("text")}

                />

                Text

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.metadata}

                    onChange={() => toggle("metadata")}

                />

                Metadata

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.statistics}

                    onChange={() => toggle("statistics")}

                />

                Statistics

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.pages}

                    onChange={() => toggle("pages")}

                />

                Page Information

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.images}

                    onChange={() => toggle("images")}

                />

                Images

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.tables}

                    onChange={() => toggle("tables")}

                />

                Tables

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.hyperlinks}

                    onChange={() => toggle("hyperlinks")}

                />

                Hyperlinks

            </label>

            <br />

            <label>

                <input

                    type="checkbox"

                    checked={options.attachments}

                    onChange={() => toggle("attachments")}

                />

                Attachments

            </label>

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