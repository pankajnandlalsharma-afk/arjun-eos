import Enterprise from "../models/Enterprise";
import EnterpriseDatabase from "../database/EnterpriseDatabase";

export default class KnowledgeEngine {

    constructor() {

        this.database = new EnterpriseDatabase();

    }

    importDocument(document) {

        document.importedAt = document.importedAt || new Date();

        document.lastUpdated = new Date();

        document.aiProcessed = document.aiProcessed || false;

        document.comparisonReady = document.comparisonReady || false;

        document.knowledgeReady = document.knowledgeReady || false;

        document.version = document.version || 1;

        Enterprise.knowledge.documents.push(document);

        this.database.addDocument(document);

        return document;

    }

    getDocuments() {

        return this.database.getDocuments();

    }

    getDocument(id) {

        return this.database.getDocument(id);

    }

    updateDocument(id, updates) {

        const document = this.getDocument(id);

        if (!document) return null;

        Object.assign(document, updates);

        document.lastUpdated = new Date();

        return document;

    }

    removeDocument(id) {

        this.database.removeDocument(id);

        Enterprise.knowledge.documents =
            Enterprise.knowledge.documents.filter(
                document => document.id !== id
            );

    }

    addKeyword(keyword) {

        Enterprise.knowledge.keywords.push(keyword);

        this.database.keywords.push(keyword);

    }

    addTopic(topic) {

        Enterprise.knowledge.topics.push(topic);

        this.database.topics.push(topic);

    }

    addEntity(entity) {

        Enterprise.knowledge.entities.push(entity);

        this.database.entities.push(entity);

    }

    addResearch(research) {

        Enterprise.knowledge.research.push(research);

        this.database.research.push(research);

    }

    getKnowledgeStatistics() {

        return {

            documents: this.database.documents.length,

            keywords: this.database.keywords.length,

            topics: this.database.topics.length,

            entities: this.database.entities.length,

            research: this.database.research.length

        };

    }

    clearKnowledge() {

        this.database.clear();

        Enterprise.knowledge.documents = [];

        Enterprise.knowledge.keywords = [];

        Enterprise.knowledge.topics = [];

        Enterprise.knowledge.entities = [];

        Enterprise.knowledge.research = [];

    }

}