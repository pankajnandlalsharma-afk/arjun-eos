import React from "react";

export default function CloudInputPanel({

    onGoogleDrive,
    onOneDrive,
    onDropbox,
    onBox,
    onSharePoint,
    onNextCloud

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

            <h2>☁ Cloud Knowledge Sources</h2>

            <p>

                Connect directly to cloud storage providers and import enterprise knowledge.

            </p>

            <hr />

            <button onClick={onGoogleDrive}>
                Google Drive
            </button>

            {" "}

            <button onClick={onOneDrive}>
                OneDrive
            </button>

            {" "}

            <button onClick={onDropbox}>
                Dropbox
            </button>

            {" "}

            <button onClick={onBox}>
                Box
            </button>

            {" "}

            <button onClick={onSharePoint}>
                SharePoint
            </button>

            {" "}

            <button onClick={onNextCloud}>
                NextCloud
            </button>

        </div>

    );

}