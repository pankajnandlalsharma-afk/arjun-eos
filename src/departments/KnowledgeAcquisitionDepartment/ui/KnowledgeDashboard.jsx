export default function KnowledgeDashboard() {

    const cards = [

        {
            title: "Total Resources",
            value: 0
        },

        {
            title: "Imported Today",
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
            title: "Failed Imports",
            value: 0
        },

        {
            title: "Success Rate",
            value: "0%"
        }

    ];

    return (

        <div>

            <h2>
                Knowledge Dashboard
            </h2>

            <p>
                Enterprise overview of all acquired knowledge resources.
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

                    cards.map(card => (

                        <div
                            key={card.title}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "20px",
                                background: "#ffffff"
                            }}
                        >

                            <h3>{card.title}</h3>

                            <h1>{card.value}</h1>

                        </div>

                    ))

                }

            </div>

            <div
                style={{
                    marginTop: "40px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px"
                }}
            >

                <h3>
                    Recent Imports
                </h3>

                <p>
                    No resources imported yet.
                </p>

            </div>

            <div
                style={{
                    marginTop: "30px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px"
                }}
            >

                <h3>
                    Quick Actions
                </h3>

                <ul>

                    <li>Import PDF</li>

                    <li>Search Resources</li>

                    <li>Validation Queue</li>

                    <li>Knowledge Analytics</li>

                </ul>

            </div>

        </div>

    );

}