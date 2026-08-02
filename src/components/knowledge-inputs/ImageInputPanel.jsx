import React from "react";

export default function ImageInputPanel({

    onImage,
    onScannedDocument,
    onHandwrittenNote,
    onScreenshot,
    onInfographic

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

            <h2>🖼 Image Inputs</h2>

            <br />

            <div>

                <strong>Image Upload</strong>

                <br />

                <input
                    type="file"
                    accept="image/*"
                    onChange={onImage}
                />

            </div>

            <br />

            <button onClick={onScannedDocument}>
                Scanned Documents
            </button>

            {" "}

            <button onClick={onHandwrittenNote}>
                Handwritten Notes
            </button>

            {" "}

            <button onClick={onScreenshot}>
                Screenshots
            </button>

            {" "}

            <button onClick={onInfographic}>
                Infographics
            </button>

        </div>

    );

}