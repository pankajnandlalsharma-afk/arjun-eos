export default class EntityExtractionEngine {

    extract(document) {

        const text = document.extractedText || "";

        const words = text.match(/\b[A-Z][a-zA-Z]+\b/g) || [];

        const entities = [...new Set(words)];

        return {

            documentId: document.id,

            extractedOn: new Date(),

            totalEntities: entities.length,

            entities

        };

    }

    merge(existing = [], incoming = []) {

        return [...new Set([...existing, ...incoming])];

    }

    search(entity, entities = []) {

        return entities.filter(item =>
            item.toLowerCase().includes(entity.toLowerCase())
        );

    }

}