import KnowledgeAcquisitionRepository
    from "../../../repositories/KnowledgeAcquisitionRepository";

export default function EnterpriseAnalyticsCenter() {

    const repository = new KnowledgeAcquisitionRepository();

    const stats = repository.getStatistics();

    const resources = repository.getAll();

    const approved =
        repository.countByStatus("APPROVED");

    const pending =
        repository.countByStatus("PENDING");

    const rejected =
        repository.countByStatus("REJECTED");

    const legal =
        resources.filter(r => r.category === "LEGAL").length;

    const spiritual =
        resources.filter(r => r.category === "SPIRITUAL").length;

    const medical =
        resources.filter(r => r.category === "MEDICAL").length;

    const general =
        resources.filter(
            r =>
                !r.category ||
                r.category === "GENERAL"
        ).length;

    const cards = [

        {
            title: "Total Resources",
            value: stats.totalResources
        },

        {
            title: "Documents",
            value: stats.documents
        },

        {
            title: "PDF Files",
            value: stats.pdfs
        },

        {
            title: "Images",
            value: stats.images
        },

        {
            title: "Videos",
            value: stats.videos
        },

        {
            title: "Audio",
            value: stats.audio
        },

        {
            title: "Websites",
            value: stats.websites
        },

        {
            title: "Approved",
            value: approved
        },

        {
            title: "Pending",
            value: pending
        },

        {
            title: "Rejected",
            value: rejected
        },

        {
            title: "Legal",
            value: legal
        },

        {
            title: "Spiritual",
            value: spiritual
        },

        {
            title: "Medical",
            value: medical
        },

        {
            title: "General",
            value: general
        }

    ];

    return (

        <div>

            <h2>

                Enterprise Analytics Center

            </h2>

            <p>

                Live analytics from the Knowledge Repository.

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
                                background: "#fff"
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

        </div>

    );

}