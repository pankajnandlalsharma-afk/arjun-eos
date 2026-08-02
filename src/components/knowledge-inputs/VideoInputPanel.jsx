import React from "react";

export default function VideoInputPanel({

    onVideoUpload,
    onYouTube,
    onInstagram,
    onFacebook,
    onTikTok,
    onLinkedIn,
    onX,
    onVimeo,
    onDailymotion,
    onLoom

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

            <h2>🎥 Video Inputs</h2>

            <br />

            <div>

                <strong>Video Upload</strong>

                <br />

                <input
                    type="file"
                    accept="video/*"
                    onChange={onVideoUpload}
                />

            </div>

            <br />

            <button onClick={onYouTube}>
                YouTube
            </button>

            {" "}

            <button onClick={onInstagram}>
                Instagram Reel
            </button>

            {" "}

            <button onClick={onFacebook}>
                Facebook Video
            </button>

            {" "}

            <button onClick={onTikTok}>
                TikTok
            </button>

            {" "}

            <button onClick={onLinkedIn}>
                LinkedIn Video
            </button>

            {" "}

            <button onClick={onX}>
                X (Twitter)
            </button>

            {" "}

            <button onClick={onVimeo}>
                Vimeo
            </button>

            {" "}

            <button onClick={onDailymotion}>
                Dailymotion
            </button>

            {" "}

            <button onClick={onLoom}>
                Loom
            </button>

        </div>

    );

}