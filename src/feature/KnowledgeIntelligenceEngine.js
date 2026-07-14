export default class KnowledgeIntelligenceEngine {

    build(indexedKnowledge) {

        return {

            id: indexedKnowledge.id,

            documentName: indexedKnowledge.documentName,

            intelligence: {

                importantConcepts: [],

                importantDefinitions: [],

                importantFacts: [],

                importantPrinciples: [],

                importantProcedures: [],

                importantTimelines: [],

                importantChecklists: [],

                importantRelationships: [],

                learningObjectives: [],

                quizCandidates: [],

                shortsCandidates: [],

                contentCandidates: []

            },

            generatedAt: new Date(),

            status: "Knowledge Intelligence Created",

            nextStep: "Quiz Intelligence Engine"

        };

    }

}