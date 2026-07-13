export default class LegalKnowledgeImportPipeline {

    importDocument(document) {

        return {

            fileName: document.fileName,

            documentType: document.type,

            importedAt: new Date(),

            status: "Imported",

            totalPages: document.totalPages,

            nextStep: "Knowledge Extraction"

        };

    }

}