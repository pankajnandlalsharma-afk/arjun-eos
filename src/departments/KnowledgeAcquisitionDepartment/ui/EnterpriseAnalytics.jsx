export default function EnterpriseAnalytics() {

    const metrics = [

        {
            title: "Total Resources",
            value: 0
        },

        {
            title: "Documents Imported",
            value: 0
        },

        {
            title: "Validated Resources",
            value: 0
        },

        {
            title: "Pending Validation",
            value: 0
        },

        {
            title: "Knowledge Objects",
            value: 0
        },

        {
            title: "Repository Size",
            value: "0 MB"
        }

    ];

    return (

        <div>

            <h2>
                Enterprise Analytics
            </h2>

            <p>
                Analytics for enterprise knowledge acquisition.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "15px",
                    marginTop: "20px"
                }}
            >

                {

                    metrics.map(metric => (

                        <div
                            key={metric.title}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "20px",
                                background: "#fff"
                            }}
                        >

                            <h3>
                                {metric.title}
                            </h3>

                            <h1>
                                {metric.value}
                            </h1>

                        </div>

                    ))

                }

            </div>

            <div
                style={{
                    marginTop: "30px",
                    border: "1px solid #ddd",
                    padding: "20px",
                    borderRadius: "8px"
                }}
            >

                <h3>
                    Recent Activity
                </h3>

                <p>
                    No analytics available yet.
                </p>

            </div>

            <div
                style={{
                    marginTop: "30px",
                    border: "1px solid #ddd",
                    padding: "20px",
                    borderRadius: "8px"
                }}
            >

                <h3>
                    Future Analytics
                </h3>

                <ul>

                    <li>Import Trends</li>

                    <li>Validation Rate</li>

                    <li>Classification Statistics</li>

                    <li>Knowledge Growth</li>

                    <li>Repository Usage</li>

                    <li>Department Performance</li>

                </ul>

            </div>

        </div>

    );

}