export default class QuizResearchEngine {

    constructor() {
        this.research = [];
    }

    addResearch(source, topic, summary) {

        const item = {
            id: Date.now(),
            source,
            topic,
            summary,
            createdAt: new Date()
        };

        this.research.push(item);

        return item;
    }

    getResearch() {
        return this.research;
    }

    getResearchByTopic(topic) {
        return this.research.filter(
            item => item.topic === topic
        );
    }

    deleteResearch(id) {
        this.research =
            this.research.filter(
                item => item.id !== id
            );
    }

    totalResearch() {
        return this.research.length;
    }

}