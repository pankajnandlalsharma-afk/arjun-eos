export default class KnowledgeExtractionEngine {

    extract(inspectionResult) {

        return {

            id: inspectionResult.id,

            fileName: inspectionResult.fileName,

            sourceType: inspectionResult.sourceType,

            concepts: [],

            definitions: [],

            facts: [],

            principles: [],

            procedures: [],

            timelines: [],

            checklists: [],

            keywords: [],

            examples: [],

            exceptions: [],

            references: [],

            relationships: [],

            extractedAt: new Date(),

            extractionStatus: "Completed",

            nextStep: "Knowledge Object Builder"

        };

    }

}
