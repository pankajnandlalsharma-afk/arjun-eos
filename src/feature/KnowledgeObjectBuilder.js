export default class KnowledgeObjectBuilder {

    build(extractionResult) {

        return {

            id: extractionResult.id,

            documentName: extractionResult.fileName,

            createdAt: new Date(),

            knowledgeObjects: {

                concepts: extractionResult.concepts,

                definitions: extractionResult.definitions,

                facts: extractionResult.facts,

                principles: extractionResult.principles,

                procedures: extractionResult.procedures,

                timelines: extractionResult.timelines,

                checklists: extractionResult.checklists,

                keywords: extractionResult.keywords,

                examples: extractionResult.examples,

                exceptions: extractionResult.exceptions,

                references: extractionResult.references,

                relationships: extractionResult.relationships

            },

            status: "Knowledge Objects Created",

            nextStep: "Relationship Engine"

        };

    }

}
