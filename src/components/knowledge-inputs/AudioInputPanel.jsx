import React from "react";

export default function AudioInputPanel({

    onAudio,
    onVoiceNotes,
    onPodcast,
    onSpeechRecognition

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

            <h2>🎤 Audio Inputs</h2>

            <br />

            <div>

                <strong>Audio Upload</strong>

                <br />

                <input
                    type="file"
                    accept="audio/*"
                    onChange={onAudio}
                />

            </div>

            <br />

            <button onClick={onVoiceNotes}>
                Voice Notes
            </button>

            {" "}

            <button onClick={onPodcast}>
                Podcast
            </button>

            {" "}

            <button onClick={onSpeechRecognition}>
                Speech Recognition
            </button>

        </div>

    );

}