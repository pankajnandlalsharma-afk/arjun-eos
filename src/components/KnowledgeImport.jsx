import { useState } from "react";
import PdfParser from "../parser/PdfParser";
import KnowledgeExtractionEngine from "../feature/KnowledgeExtractionEngine";
import KnowledgeViewer from "./KnowledgeViewer";

export default function KnowledgeImport() {

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    async function handlePDF(event) {

        const file = event.target.files[0];

        if (!file) return;

        if (file.type !== "application/pdf") {

            alert("Please select a PDF file.");

            return;

        }

        setLoading(true);

        try {

            const output = await PdfParser.extractText(file);

            if (!output.success) {

                setResult(output);

                setLoading(false);

                return;

            }

            const extractor = new KnowledgeExtractionEngine();

            const knowledge = extractor.extract({

                id: Date.now(),

                fileName: file.name,

                sourceType: "PDF",

                text: output.text

            });

            setResult({

                ...output,

                knowledge

            });

        } catch (error) {

            setResult({

                success: false,

                error: error.message

            });

        }

        setLoading(false);

    }

    function comingSoon(feature) {

        alert(feature + " support will be added in upcoming sprints.");

    }

    return (

        <div
            style={{
                padding: "30px",
                fontFamily: "Arial"
            }}
        >

            <h1>ARJUN EOS</h1>

            <h2>Knowledge Acquisition Center</h2>

            <p>

                Import knowledge from multiple sources into your Knowledge Projects.

            </p>

            <hr />

            <h3>📄 Document Inputs</h3>

            <input

                type="file"

                accept=".pdf"

                onChange={handlePDF}

            />

            <button onClick={() => comingSoon("DOCX")}>DOCX</button>{" "}

            <button onClick={() => comingSoon("TXT")}>TXT</button>{" "}

            <button onClick={() => comingSoon("Excel")}>Excel</button>{" "}

            <button onClick={() => comingSoon("PowerPoint")}>PowerPoint</button>{" "}

            <button onClick={() => comingSoon("CSV")}>CSV</button>

            <hr />

            <h3>🖼️ Image Inputs</h3>

            <button onClick={() => comingSoon("Images")}>Images</button>{" "}

            <button onClick={() => comingSoon("Scanned Documents")}>Scanned Documents</button>{" "}

            <button onClick={() => comingSoon("Handwritten Notes")}>Handwritten Notes</button>

            <hr />

            <h3>🎤 Audio Inputs</h3>

            <button onClick={() => comingSoon("Audio Upload")}>Audio</button>{" "}

            <button onClick={() => comingSoon("Voice Notes")}>Voice Notes</button>

            <hr />

            <h3>🎥 Video Inputs</h3>

            <button onClick={() => comingSoon("Video Upload")}>Video</button>{" "}

            <button onClick={() => comingSoon("YouTube Import")}>YouTube</button>

            <hr />

            <h3>🌐 Website Inputs</h3>

            <button onClick={() => comingSoon("Website URL")}>Website URL</button>{" "}

            <button onClick={() => comingSoon("RSS Feed")}>RSS Feed</button>{" "}

            <button onClick={() => comingSoon("API")}>API</button>

            <hr />

            <h3>☁️ Cloud Inputs</h3>

            <button onClick={() => comingSoon("Google Drive")}>Google Drive</button>{" "}

            <button onClick={() => comingSoon("OneDrive")}>OneDrive</button>{" "}

            <button onClick={() => comingSoon("Dropbox")}>Dropbox</button>

            <hr />

            <h3>🗄️ Database Inputs</h3>

            <button onClick={() => comingSoon("MySQL")}>MySQL</button>{" "}

            <button onClick={() => comingSoon("PostgreSQL")}>PostgreSQL</button>{" "}

            <button onClick={() => comingSoon("MongoDB")}>MongoDB</button>

            <hr />

            <h3>⌨️ Manual Inputs</h3>

            <button onClick={() => comingSoon("Paste Text")}>Paste Text</button>{" "}

            <button onClick={() => comingSoon("Rich Text Editor")}>Rich Text</button>{" "}

            <button onClick={() => comingSoon("Voice Dictation")}>Voice</button>

            <hr />

            <h3>🔴 Live Inputs</h3>

            <button onClick={() => comingSoon("Court Updates")}>Court Updates</button>{" "}

            <button onClick={() => comingSoon("Government Notifications")}>Government Updates</button>

            <hr />

            <h3>📦 Bulk Import</h3>

            <button onClick={() => comingSoon("Multiple PDFs")}>Multiple Files</button>{" "}

            <button onClick={() => comingSoon("Folder Import")}>Folder Import</button>{" "}

            <button onClick={() => comingSoon("ZIP Import")}>ZIP Import</button>

            <hr />

            {loading && (

                <h2>Reading PDF...</h2>

            )}

            {

                result &&

                result.success &&

                <>

                    <h2>✅ PDF Imported Successfully</h2>

                    <p>

                        <strong>Pages :</strong> {result.pages}

                    </p>

                    <textarea

                        rows={20}

                        style={{

                            width: "100%",

                            marginTop: "20px"

                        }}

                        value={result.text}

                        readOnly

                    />

                    <KnowledgeViewer

                        knowledge={result.knowledge}

                    />

                </>

            }

            {

                result &&

                !result.success &&

                <h2>

                    ❌ {result.error}

                </h2>

            }

        </div>

    );

}