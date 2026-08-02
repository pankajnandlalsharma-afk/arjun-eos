import React from "react";

export default function DatabaseInputPanel({

    onMySQL,
    onPostgreSQL,
    onMongoDB,
    onSQLite,
    onSQLServer,
    onOracle

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

            <h2>🗄 Database Knowledge Sources</h2>

            <hr />

            <button onClick={onMySQL}>MySQL</button>{" "}

            <button onClick={onPostgreSQL}>PostgreSQL</button>{" "}

            <button onClick={onMongoDB}>MongoDB</button>{" "}

            <button onClick={onSQLite}>SQLite</button>{" "}

            <button onClick={onSQLServer}>SQL Server</button>{" "}

            <button onClick={onOracle}>Oracle</button>

        </div>

    );

}