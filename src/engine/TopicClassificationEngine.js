export default class TopicClassificationEngine {

    classify(text = "") {

        const topics = [];

        const lower = text.toLowerCase();

        if (lower.includes("contract")) {
            topics.push("Contract Law");
        }

        if (lower.includes("criminal")) {
            topics.push("Criminal Law");
        }

        if (lower.includes("property")) {
            topics.push("Property Law");
        }

        if (lower.includes("company")) {
            topics.push("Corporate Law");
        }

        if (lower.includes("constitution")) {
            topics.push("Constitutional Law");
        }

        if (lower.includes("labour")) {
            topics.push("Labour Law");
        }

        if (lower.includes("tax")) {
            topics.push("Taxation");
        }

        if (lower.includes("copyright")) {
            topics.push("Intellectual Property");
        }

        return topics;

    }

    classifyDocuments(documents = []) {

        return documents.map(document => ({

            ...document,

            topics: this.classify(document.extractedText || "")

        }));

    }

}