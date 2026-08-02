import React from "react";

export default function BulkImportPanel({

    onMultipleFiles,
    onFolderImport,
    onZIPImport,
    onBatchQueue

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

            <h2>📦 Bulk Import</h2>

            <button onClick={onMultipleFiles}>
                Multiple Files
            </button>{" "}

            <button onClick={onFolderImport}>
                Folder Import
            </button>{" "}

            <button onClick={onZIPImport}>
                ZIP Import
            </button>{" "}

            <button onClick={onBatchQueue}>
                Batch Queue
            </button>

        </div>

    );

}