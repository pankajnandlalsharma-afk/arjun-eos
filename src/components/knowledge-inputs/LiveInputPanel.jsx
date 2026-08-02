import React from "react";

export default function LiveInputPanel({

    onCourtUpdates,
    onGovernmentUpdates,
    onRSSWatcher,
    onScheduledImports

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

            <h2>🔴 Live Knowledge Sources</h2>

            <button onClick={onCourtUpdates}>
                Court Updates
            </button>{" "}

            <button onClick={onGovernmentUpdates}>
                Government Notifications
            </button>{" "}

            <button onClick={onRSSWatcher}>
                RSS Watch
            </button>{" "}

            <button onClick={onScheduledImports}>
                Scheduled Imports
            </button>

        </div>

    );

}