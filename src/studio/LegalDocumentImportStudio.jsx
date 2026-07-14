import React, { useRef, useState } from "react";

export default function LegalDocumentImportStudio() {

    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const choosePDF = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
        }

    };

    return (

        <div
            style={{
                padding: "40px",
                fontFamily: "Arial"
            }}
        >

            <h1>ARJUN EOS</h1>

            <h2>Legal Document Import Studio</h2>

            <p>Mission Alpha</p>

            <button onClick={choosePDF}>
                Choose PDF
            </button>

            <input
                type="file"
                accept=".pdf"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            <br /><br />

            {
                selectedFile && (
                    <div>

                        <h3>Selected PDF</h3>

                        <p>{selectedFile.name}</p>

                    </div>
                )
            }

        </div>

    );

}