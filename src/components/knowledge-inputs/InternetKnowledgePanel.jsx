import React from "react";

export default function InternetKnowledgePanel({

    singleUrl,
    multipleUrls,

    onSingleUrlChange,
    onMultipleUrlsChange,

    onInspectSingle,
    onInspectMultiple,

    onUploadTXT,
    onUploadCSV,
    onUploadExcel,
    onUploadJSON,
    onUploadXML,

    onLoadCollection

}) {

    return (

        <div
            style={{
                marginBottom: "30px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px"
            }}
        >

            <h2>🌐 Internet Knowledge Sources</h2>

            <hr />

            <h3>Single URL</h3>

            <input
                type="text"
                placeholder="https://..."
                value={singleUrl}
                onChange={onSingleUrlChange}
                style={{
                    width: "100%",
                    padding: "10px"
                }}
            />

            <br />
            <br />

            <button onClick={onInspectSingle}>
                Inspect Resource
            </button>

            <hr />

            <h3>Multiple URLs (Up to 100)</h3>

            <textarea
                rows={10}
                placeholder="Paste one URL per line..."
                value={multipleUrls}
                onChange={onMultipleUrlsChange}
                style={{
                    width: "100%"
                }}
            />

            <br />
            <br />

            <button onClick={onInspectMultiple}>
                Inspect All URLs
            </button>

            <hr />

            <h3>Upload URL List</h3>

            <button onClick={onUploadTXT}>TXT</button>{" "}

            <button onClick={onUploadCSV}>CSV</button>{" "}

            <button onClick={onUploadExcel}>Excel</button>{" "}

            <button onClick={onUploadJSON}>JSON</button>{" "}

            <button onClick={onUploadXML}>XML</button>

            <hr />

            <h3>Saved Collections</h3>

            <button onClick={onLoadCollection}>
                Load Collection
            </button>

        </div>

    );

}