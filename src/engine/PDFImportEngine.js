import * as pdfjsLib from "pdfjs-dist";

export default class PDFImportEngine {

    constructor() {

        this.documents = [];

    }

    async importDocument(file) {

        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
            data: arrayBuffer
        }).promise;

        let extractedText = "";

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {

            const page = await pdf.getPage(pageNumber);

            const textContent = await page.getTextContent();

            extractedText += textContent.items
                .map(item => item.str)
                .join(" ");

            extractedText += "\n\n";

        }

        const document = {

            id: Date.now(),

            fileName: file?.name || "Unknown",

            fileType: "PDF",

            importedOn: new Date(),

            lastUpdated: new Date(),

            status: "Imported",

            version: 1,

            language: "Unknown",

            author: "Unknown",

            source: "Local Upload",

            pages: pdf.numPages,

            extractedText,

            keywords: [],

            topics: [],

            entities: [],

            summary: "",

            qualityScore: 0,

            aiProcessed: false,

            comparisonReady: false,

            knowledgeReady: false

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

        document.lastUpdated = new Date();

    }

    updateKeywords(id, keywords) {

        const document = this.getDocument(id);

        if (!document) return;

        document.keywords = keywords;

        document.lastUpdated = new Date();

    }

    updateTopics(id, topics) {

        const document = this.getDocument(id);

        if (!document) return;

        document.topics = topics;

        document.lastUpdated = new Date();

    }

    updateEntities(id, entities) {

        const document = this.getDocument(id);

        if (!document) return;

        document.entities = entities;

        document.lastUpdated = new Date();

    }

}