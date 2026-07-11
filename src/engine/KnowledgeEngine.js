import Enterprise from "../models/Enterprise";

export default class KnowledgeEngine {

    importDocument(document) {

        Enterprise.knowledge.documents.push(document);

        return document;

    }

    getDocuments() {

        return Enterprise.knowledge.documents;

    }

    addKeyword(keyword) {

        Enterprise.knowledge.keywords.push(keyword);

    }

    addTopic(topic) {

        Enterprise.knowledge.topics.push(topic);

    }

    addEntity(entity) {

        Enterprise.knowledge.entities.push(entity);

    }

    addResearch(research) {

        Enterprise.knowledge.research.push(research);

    }

    clearKnowledge() {

        Enterprise.knowledge.documents = [];

        Enterprise.knowledge.keywords = [];

        Enterprise.knowledge.topics = [];

        Enterprise.knowledge.entities = [];

        Enterprise.knowledge.research = [];

    }

}