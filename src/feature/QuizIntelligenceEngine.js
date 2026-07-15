export default class QuizIntelligenceEngine {

    build(intelligenceObject) {

        return {

            id: intelligenceObject.id,

            documentName: intelligenceObject.documentName,

            quizIntelligence: {

                quizTopics:
                    this.generateQuizTopics(
                        intelligenceObject
                    ),

                learningObjectives:
                    this.generateLearningObjectives(
                        intelligenceObject
                    ),

                importantFacts:
                    this.extractImportantFacts(
                        intelligenceObject
                    ),

                importantDefinitions:
                    this.extractImportantDefinitions(
                        intelligenceObject
                    ),

                importantPrinciples:
                    this.extractImportantPrinciples(
                        intelligenceObject
                    ),

                importantProcedures:
                    this.extractImportantProcedures(
                        intelligenceObject
                    ),

                importantTimelines:
                    this.extractImportantTimelines(
                        intelligenceObject
                    ),

                quizDifficulty:
                    this.calculateDifficulty(
                        intelligenceObject
                    ),

                recommendedQuestionTypes:
                    this.getQuestionTypes(),

                estimatedQuestions:
                    this.calculateEstimatedQuestions(
                        intelligenceObject
                    )

            },

            generatedAt: new Date(),

            status: "Quiz Intelligence Created",

            nextStep: "Question Generation Engine"

        };

    }

    generateQuizTopics(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.importantConcepts || [];

    }

    generateLearningObjectives(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.learningObjectives || [];

    }

    extractImportantFacts(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.importantFacts || [];

    }

    extractImportantDefinitions(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.importantDefinitions || [];

    }

    extractImportantPrinciples(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.importantPrinciples || [];

    }

    extractImportantProcedures(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.importantProcedures || [];

    }

    extractImportantTimelines(intelligenceObject) {

        return intelligenceObject
            .intelligence
            ?.importantTimelines || [];

    }

    calculateDifficulty(intelligenceObject) {

        const concepts =
            intelligenceObject
            .intelligence
            ?.importantConcepts
            ?.length || 0;

        if (concepts >= 100) {

            return "Expert";

        }

        if (concepts >= 50) {

            return "Advanced";

        }

        if (concepts >= 20) {

            return "Intermediate";

        }

        return "Beginner";

    }

    getQuestionTypes() {

        return [

            "MCQ",

            "True/False",

            "Fill in the Blanks",

            "Scenario Based",

            "Short Answer",

            "Long Answer"

        ];

    }

    calculateEstimatedQuestions(intelligenceObject) {

        const concepts =
            intelligenceObject
            .intelligence
            ?.importantConcepts
            ?.length || 0;

        const definitions =
            intelligenceObject
            .intelligence
            ?.importantDefinitions
            ?.length || 0;

        const facts =
            intelligenceObject
            .intelligence
            ?.importantFacts
            ?.length || 0;

        return concepts + definitions + facts;

    }

}