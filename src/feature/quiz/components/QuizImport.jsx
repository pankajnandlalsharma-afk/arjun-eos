/**
 * ====================================================
 * ARJUN EOS
 * Quiz Import
 * Version 3.0
 * ====================================================
 */

import { useState } from "react";

import quizController from "../controllers/QuizController";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

function QuizImport({ onImport }) {

    const [status, setStatus] = useState("");

    const [fileInfo, setFileInfo] = useState("");

    const handleImport = (event) => {

        const file = event.target.files?.[0];

        if (!file) {

            return;

        }

        setFileInfo(
            `${file.name} (${(file.size / 1024).toFixed(2)} KB)`
        );

        if (!file.name.toLowerCase().endsWith(".json")) {

            setStatus("❌ Please select a JSON file.");

            return;

        }

        if (file.size > MAX_FILE_SIZE) {

            setStatus("❌ File exceeds 5 MB.");

            return;

        }

        const reader = new FileReader();

        reader.onload = (e) => {

            try {

                const parsed = JSON.parse(e.target.result);

                const quizzes = Array.isArray(parsed)
                    ? parsed
                    : [parsed];

                if (quizzes.length === 0) {

                    setStatus("⚠ No quizzes found.");

                    return;

                }

                const imported = quizController.importQuizzes(
                    quizzes
                );

                const importedCount = imported.length;

                const skippedCount =
                    quizzes.length - importedCount;

                setStatus(

                    `✅ Imported ${importedCount} quiz${importedCount !== 1 ? "zes" : ""}` +

                    (skippedCount > 0
                        ? ` | Skipped ${skippedCount} duplicate${skippedCount !== 1 ? "s" : ""}`
                        : "")

                );

                onImport?.(imported);

            }

            catch (error) {

                console.error(error);

                setStatus("❌ Invalid JSON file.");

            }

        };

        reader.onerror = () => {

            setStatus("❌ Unable to read file.");

        };

        reader.readAsText(file);

        event.target.value = "";

    };

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "8px",
                background: "#fafafa"
            }}
        >

            <h3 style={{ marginTop: 0 }}>
                📥 Import Quizzes
            </h3>

            <input
                type="file"
                accept=".json,application/json"
                onChange={handleImport}
            />

            {fileInfo && (

                <p
                    style={{
                        marginTop: "12px",
                        color: "#555"
                    }}
                >
                    <strong>File:</strong> {fileInfo}
                </p>

            )}

            {status && (

                <p
                    style={{
                        marginTop: "10px",
                        fontWeight: "bold"
                    }}
                >
                    {status}
                </p>

            )}

        </div>

    );

}

export default QuizImport;