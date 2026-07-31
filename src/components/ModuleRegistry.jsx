import { modules } from "../data/modules";

export default function ModuleRegistry() {

    return (

        <div>

            <h2>Enterprise Module Registry</h2>

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
                        <th>Module</th>
                        <th>Category</th>
                        <th>Enabled</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        modules.map(module => (

                            <tr key={module.id}>

                                <td>{module.id}</td>
                                <td>{module.icon} {module.name}</td>
                                <td>{module.category}</td>
                                <td>{module.enabled ? "✅" : "❌"}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}