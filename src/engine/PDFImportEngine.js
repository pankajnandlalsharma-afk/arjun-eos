export default class PDFImportEngine {

    constructor() {

        this.documents = [];

    }

    importDocument(file) {

        const document = {

            id: Date.now(),

            fileName: file?.name || "Unknown",

            fileType: "PDF",

            importedOn: new Date(),

            status: "Imported",

            pages: 0,

            extractedText: "",

            keywords: [],

            topics: [],

            entities: []

        };

        this.documents.push(document);

        return document;

    }

    getDocuments() {

        return this.documents;

    }

    getDocument(id) {

        return this.documents.find(

            document => document.id === id

        );

    }

    updateExtractedText(id, text) {

        const document = this.getDocument(id);

        if (!document) return;

        document.extractedText = text;

    }

    updateKeywords(id, keywords) {

        const document = this.getDocument(id);

        if (!document) return;

        document.keywords = keywords;

    }

    updateTopics(id, topics) {

        const document = this.getDocument(id);

        if (!document) return;

        document.topics = topics;

    }

    updateEntities(id, entities) {

        const document = this.getDocument(id);

        if (!document) return;

        document.entities = entities;

    }

}