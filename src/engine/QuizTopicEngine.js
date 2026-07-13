export default class QuizTopicEngine {
    constructor() {
        this.topics = [];
    }

    addTopic(topic) {
        this.topics.push(topic);
    }

    removeTopic(topic) {
        this.topics = this.topics.filter(
            item => item !== topic
        );
    }

    getTopics() {
        return this.topics;
    }

    topicExists(topic) {
        return this.topics.includes(topic);
    }

    totalTopics() {
        return this.topics.length;
    }
}