import React, { useRef, useState } from "react";

import { readPDF } from "../services/PDFService";
import KnowledgeExtractionEngine from "../feature/KnowledgeExtractionEngine";
import KnowledgeViewer from "../components/KnowledgeViewer";

export default function LegalDocumentImportStudio() {

    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const [pdfText, setPdfText] = useState("");

    const [knowledge, setKnowledge] = useState(null);

    const [loading, setLoading] = useState(false);

    const choosePDF = () => {

        fileInputRef.current.click();

    };

    const handleFileChange = async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        setSelectedFile(file);

        setLoading(true);

        const result = await readPDF(file);

        if (!result.success) {

            alert(result.error);

            setLoading(false);

            return;

        }

        setPdfText(result.text);

        const extractor = new KnowledgeExtractionEngine();

        const extractedKnowledge = extractor.extract({

            id: Date.now(),

            fileName: file.name,

            sourceType: "PDF",

            text: result.text

        });

        setKnowledge(extractedKnowledge);

        setLoading(false);

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

                loading &&

                <h3>Reading PDF...</h3>

            }

            {

                selectedFile &&

                <>

                    <h3>Selected PDF</h3>

                    <p>{selectedFile.name}</p>

                </>

            }

            {

                pdfText &&

                <>

                    <h3>Extracted Text</h3>

                    <textarea
                        rows={20}
                        cols={120}
                        value={pdfText}
                        readOnly
                    />

                </>

            }

            {

                knowledge &&

                <KnowledgeViewer

                    knowledge={knowledge}

                />

            }

        </div>

    );

}