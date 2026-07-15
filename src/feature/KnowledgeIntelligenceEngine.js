export default class KnowledgeIntelligenceEngine {

    build(indexedKnowledge) {

        return {

            id: indexedKnowledge.id,

            documentName: indexedKnowledge.documentName,

            intelligence: {

                importantConcepts:
                    this.extractImportantConcepts(
                        indexedKnowledge
                    ),

                importantDefinitions:
                    this.extractImportantDefinitions(
                        indexedKnowledge
                    ),

                importantFacts:
                    this.extractImportantFacts(
                        indexedKnowledge
                    ),

                importantPrinciples:
                    this.extractImportantPrinciples(
                        indexedKnowledge
                    ),

                importantProcedures:
                    this.extractImportantProcedures(
                        indexedKnowledge
                    ),

                importantTimelines:
                    this.extractImportantTimelines(
                        indexedKnowledge
                    ),

                importantChecklists:
                    this.extractImportantChecklists(
                        indexedKnowledge
                    ),

                importantRelationships:
                    this.extractImportantRelationships(
                        indexedKnowledge
                    ),

                learningObjectives:
                    this.generateLearningObjectives(
                        indexedKnowledge
                    ),

                quizCandidates:
                    this.generateQuizCandidates(
                        indexedKnowledge
                    ),

                shortsCandidates:
                    this.generateShortsCandidates(
                        indexedKnowledge
                    ),

                contentCandidates:
                    this.generateContentCandidates(
                        indexedKnowledge
                    )

            },

            generatedAt: new Date(),

            status: "Knowledge Intelligence Created",

            nextStep: "Quiz Intelligence Engine"

        };

    }

    extractImportantConcepts(indexedKnowledge) {

        return indexedKnowledge.concepts || [];

    }

    extractImportantDefinitions(indexedKnowledge) {

        return indexedKnowledge.definitions || [];

    }

    extractImportantFacts(indexedKnowledge) {

        return indexedKnowledge.facts || [];

    }

    extractImportantPrinciples(indexedKnowledge) {

        return indexedKnowledge.principles || [];

    }

    extractImportantProcedures(indexedKnowledge) {

        return indexedKnowledge.procedures || [];

    }

    extractImportantTimelines(indexedKnowledge) {

        return indexedKnowledge.timelines || [];

    }

    extractImportantChecklists(indexedKnowledge) {

        return indexedKnowledge.checklists || [];

    }

    extractImportantRelationships(indexedKnowledge) {

        return indexedKnowledge.relationships || [];

    }

    generateLearningObjectives(indexedKnowledge) {

        return (indexedKnowledge.concepts || []).map(

            concept =>

                "Understand " + concept

        );

    }

    generateQuizCandidates(indexedKnowledge) {

        return indexedKnowledge.definitions || [];

    }

    generateShortsCandidates(indexedKnowledge) {

        return indexedKnowledge.concepts || [];

    }

    generateContentCandidates(indexedKnowledge) {

        return [

            ...(indexedKnowledge.concepts || []),

            ...(indexedKnowledge.principles || [])

        ];

    }

}