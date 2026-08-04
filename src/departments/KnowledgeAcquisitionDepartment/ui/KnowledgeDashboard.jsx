import KnowledgeAcquisitionRepository from "../../../repositories/KnowledgeAcquisitionRepository";

export default function KnowledgeDashboard() {

    const repository = new KnowledgeAcquisitionRepository();

    const statistics = repository.getStatistics();

    const cards = [

        {
            title: "Total Resources",
            value: statistics.totalResources
        },

        {
            title: "Documents",
            value: statistics.documents
        },

        {
            title: "PDF Files",
            value: statistics.pdfs
        },

        {
            title: "Images",
            value: statistics.images
        },

        {
            title: "Videos",
            value: statistics.videos
        },

        {
            title: "Audio",
            value: statistics.audio
        },

        {
            title: "Websites",
            value: statistics.websites
        }

    ];

    const resources = repository.getAll();

    return (

        <div>

            <h2>
                Knowledge Dashboard
            </h2>

            <p>
                Live enterprise overview of all acquired knowledge resources.
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

                            <h3>

                                {card.title}

                            </h3>

                            <h1>

                                {card.value}

                            </h1>

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

                {

                    resources.length === 0

                        ?

                        <p>

                            No resources imported yet.

                        </p>

                        :

                        <ul>

                            {

                                resources
                                    .slice(-5)
                                    .reverse()
                                    .map(resource => (

                                        <li
                                            key={resource.resourceId}
                                        >

                                            <strong>

                                                {resource.resourceName}

                                            </strong>

                                            {" - "}

                                            {resource.sourceType}

                                        </li>

                                    ))

                            }

                        </ul>

                }

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