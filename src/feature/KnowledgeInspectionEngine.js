export default class KnowledgeInspectionEngine {

    inspect(validationResult) {

        return {

            id: validationResult.id,

            fileName: validationResult.fileName,

            sourceType: validationResult.sourceType,

            language: "Unknown",

            pages: 0,

            images: 0,

            tables: 0,

            chapters: [],

            headings: [],

            references: [],

            metadata: {},

            inspectionStatus: "Completed",

            inspectedAt: new Date(),

            nextStep: "Knowledge Extraction Engine"

        };

    }

}