/**
 * ====================================================
 * ARJUN EOS
 * Quiz Settings
 * ====================================================
 */

import { useState } from "react";

function QuizSettings({
    onSave
}) {

    const [settings, setSettings] = useState({
        shuffleQuestions: false,
        shuffleOptions: false,
        showResultImmediately: true,
        allowReview: true,
        passingPercentage: 50,
        timeLimit: 60
    });

    const update = (field, value) => {

        setSettings(previous => ({
            ...previous,
            [field]: value
        }));

    };

    return (

        <div
            style={{
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "20px"
            }}
        >

            <h2>Quiz Settings</h2>

            <label>
                <input
                    type="checkbox"
                    checked={settings.shuffleQuestions}
                    onChange={(e) =>
                        update("shuffleQuestions", e.target.checked)
                    }
                />
                Shuffle Questions
            </label>

            <br /><br />

            <label>
                <input
                    type="checkbox"
                    checked={settings.shuffleOptions}
                    onChange={(e) =>
                        update("shuffleOptions", e.target.checked)
                    }
                />
                Shuffle Options
            </label>

            <br /><br />

            <label>
                Passing Percentage
            </label>

            <br />

            <input
                type="number"
                min="0"
                max="100"
                value={settings.passingPercentage}
                onChange={(e) =>
                    update("passingPercentage", Number(e.target.value))
                }
            />

            <br /><br />

            <label>
                Time Limit (Seconds)
            </label>

            <br />

            <input
                type="number"
                min="0"
                value={settings.timeLimit}
                onChange={(e) =>
                    update("timeLimit", Number(e.target.value))
                }
            />

            <br /><br />

            <button
                onClick={() => onSave?.(settings)}
            >
                Save Settings
            </button>

        </div>

    );

}

export default QuizSettings;