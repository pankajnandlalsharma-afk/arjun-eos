import React from "react";

export default function IdeaSearch({

    value,

    onChange

}) {

    return (

        <input

            type="text"

            placeholder="Search ideas..."

            value={value}

            onChange={(event) => onChange(event.target.value)}

            style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                marginBottom: "20px",
                fontSize: "16px",
                boxSizing: "border-box"
            }}

        />

    );

}