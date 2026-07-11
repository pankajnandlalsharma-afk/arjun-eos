import { useState } from "react";
import PdfParser from "../parser/PdfParser";

export default function KnowledgeImport() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleFile(event) {
    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    setLoading(true);

    const output = await PdfParser.extractText(file);

    setResult(output);

    setLoading(false);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Knowledge Import</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFile}
      />

      {loading && <h3>Reading PDF...</h3>}

      {result && result.success && (
        <>
          <h3>Import Successful</h3>

          <p>
            <strong>Pages:</strong> {result.pages}
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
        </>
      )}

      {result && !result.success && (
        <h3>Error: {result.error}</h3>
      )}
    </div>
  );
}