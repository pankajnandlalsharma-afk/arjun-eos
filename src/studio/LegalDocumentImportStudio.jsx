import React, { useRef, useState } from "react";

import { readPDF } from "../services/PDFService";

export default function LegalDocumentImportStudio() {

    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const [pdfText, setPdfText] = useState("");

    const choosePDF = () => {

        fileInputRef.current.click();

    };

    const handleFileChange = async (event) => {

        const file = event.target.files[0];

        if (file) {

            setSelectedFile(file);

            const text = await readPDF(file);

            setPdfText(text);

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

            <br />
            <br />

            {
                selectedFile && (

                    <div>

                        <h3>Selected PDF</h3>

                        <p>{selectedFile.name}</p>

                    </div>

                )
            }

            <br />

            {
                pdfText && (

                    <div>

                        <h3>Extracted Text</h3>

                        <textarea
                            rows="20"
                            cols="120"
                            value={pdfText}
                            readOnly
                        />

                    </div>

                )
            }

        </div>

    );

}