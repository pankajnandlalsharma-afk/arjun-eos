import { build } from "pdfjs-dist";
import Enterprise from "../models/Enterprise";

export default class KnowledgeRepositoryEngine {

    add(document) {

        Enterprise.knowledge.documents.push(document);

        return document;

    }

    getAll() {

        return Enterprise.knowledge.documents;

    }

    get(id) {

        return Enterprise.knowledge.documents.find(
            document => document.id === id
        );

    }

    update(id, updates) {

        const document = this.get(id);

        if (!document) return null;

        Object.assign(document, updates);

        document.lastUpdated = new Date();

        return document;

    }

    remove(id) {

        Enterprise.knowledge.documents =
            Enterprise.knowledge.documents.filter(
                document => document.id !== id
            );

    }

    count() {

        return Enterprise.knowledge.documents.length;

    }

    exists(id) {

        return Enterprise.knowledge.documents.some(
            document => document.id === id
        );

    }

}