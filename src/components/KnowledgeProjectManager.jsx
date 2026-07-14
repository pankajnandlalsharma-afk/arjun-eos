import { useState } from "react";

export default function KnowledgeProjectManager() {

    const [projects, setProjects] = useState([]);

    const [projectName, setProjectName] = useState("");

    function createProject() {

        if (!projectName.trim()) return;

        const project = {

            id: Date.now(),

            name: projectName,

            status: "Active",

            documents: 0,

            knowledgeObjects: 0,

            created: new Date().toLocaleDateString()

        };

        setProjects([...projects, project]);

        setProjectName("");

    }

    function deleteProject(id) {

        setProjects(projects.filter(project => project.id !== id));

    }

    return (

        <div style={{ padding: "30px", fontFamily: "Arial" }}>

            <h1>ARJUN EOS</h1>

            <h2>Knowledge Project Manager</h2>

            <hr />

            <h3>Create New Project</h3>

            <input

                type="text"

                placeholder="Enter Project Name"

                value={projectName}

                onChange={(e) => setProjectName(e.target.value)}

                style={{

                    width: "300px",

                    padding: "10px",

                    marginRight: "10px"

                }}

            />

            <button onClick={createProject}>

                Create Project

            </button>

            <hr />

            <h3>Knowledge Projects</h3>

            {

                projects.length === 0 &&

                <p>No Projects Created.</p>

            }

            {

                projects.map(project => (

                    <div

                        key={project.id}

                        style={{

                            border: "1px solid #ccc",

                            padding: "15px",

                            marginBottom: "15px",

                            borderRadius: "6px"

                        }}

                    >

                        <h3>{project.name}</h3>

                        <p>Status : {project.status}</p>

                        <p>Documents : {project.documents}</p>

                        <p>Knowledge Objects : {project.knowledgeObjects}</p>

                        <p>Created : {project.created}</p>

                        <button

                            onClick={() => deleteProject(project.id)}

                        >

                            Delete

                        </button>

                    </div>

                ))

            }

        </div>

    );

}
