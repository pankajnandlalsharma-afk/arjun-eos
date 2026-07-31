import React from "react";
import { subjects } from "../data/subjects";

export default function SubjectRegistry() {

    return (

        <div>

            <h2>Subject Registry</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: 20
                }}
            >

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        subjects.map(subject => (

                            <tr key={subject.id}>

                                <td>{subject.id}</td>
                                <td>{subject.code}</td>
                                <td>{subject.name}</td>
                                <td>{subject.category}</td>
                                <td>{subject.status}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}