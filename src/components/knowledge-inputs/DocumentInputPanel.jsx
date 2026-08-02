import React from "react";

export default function DocumentInputPanel({

    onPDF,
    onDOCX,
    onTXT,
    onExcel,
    onPowerPoint,
    onCSV,
    onEPUB,
    onMarkdown

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

            <h2>📄 Document Inputs</h2>

            <br />

            <div>

                <strong>PDF</strong>

                <br />

                <input

                    type="file"

                    accept=".pdf"

                    onChange={onPDF}

                />

            </div>

            <br />

            <button onClick={onDOCX}>

                DOCX

            </button>

            {" "}

            <button onClick={onTXT}>

                TXT

            </button>

            {" "}

            <button onClick={onExcel}>

                Excel

            </button>

            {" "}

            <button onClick={onPowerPoint}>

                PowerPoint

            </button>

            {" "}

            <button onClick={onCSV}>

                CSV

            </button>

            {" "}

            <button onClick={onEPUB}>

                EPUB

            </button>

            {" "}

            <button onClick={onMarkdown}>

                Markdown

            </button>

        </div>

    );

}