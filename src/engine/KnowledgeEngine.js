import Enterprise from "../models/Enterprise";

export default class KnowledgeEngine {

    importDocument(document) {

        document.importedAt = document.importedAt || new Date();
        document.lastUpdated = new Date();
        document.aiProcessed = document.aiProcessed || false;
        document.comparisonReady = document.comparisonReady || false;
        document.knowledgeReady = document.knowledgeReady || false;
        document.version = document.version || 1;

        Enterprise.knowledge.documents.push(document);

        return document;

    }

    getDocuments() {

        return Enterprise.knowledge.documents;

    }

    getDocument(id) {

        return Enterprise.knowledge.documents.find(
            document => document.id === id
        );

    }

    updateDocument(id, updates) {

        const document = this.getDocument(id);

        if (!document) return null;

        Object.assign(document, updates);

        document.lastUpdated = new Date();

        return document;

    }

    removeDocument(id) {

        Enterprise.knowledge.documents =
            Enterprise.knowledge.documents.filter(
                document => document.id !== id
            );

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

    getKnowledgeStatistics() {

        return {

            documents: Enterprise.knowledge.documents.length,

            keywords: Enterprise.knowledge.keywords.length,

            topics: Enterprise.knowledge.topics.length,

            entities: Enterprise.knowledge.entities.length,

            research: Enterprise.knowledge.research.length

        };

    }

    clearKnowledge() {

        Enterprise.knowledge.documents = [];

        Enterprise.knowledge.keywords = [];

        Enterprise.knowledge.topics = [];

        Enterprise.knowledge.entities = [];

        Enterprise.knowledge.research = [];

    }

}