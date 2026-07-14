export default class RelationshipEngine {

    build(knowledgeObjects) {

        return {

            id: knowledgeObjects.id,

            relationships: [],

            relatedConcepts: [],

            relatedDefinitions: [],

            relatedFacts: [],

            relatedPrinciples: [],

            relatedProcedures: [],

            relatedTimelines: [],

            relatedChecklists: [],

            relatedExamples: [],

            relatedExceptions: [],

            relatedReferences: [],

            graphNodes: [],

            graphEdges: [],

            builtAt: new Date(),

            status: "Relationships Built",

            nextStep: "Knowledge Repository"

        };

    }

}