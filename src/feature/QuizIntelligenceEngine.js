export default class QuizIntelligenceEngine {

    build(intelligenceObject) {

        return {

            id: intelligenceObject.id,

            documentName: intelligenceObject.documentName,

            quizIntelligence: {

                quizTopics: [],

                learningObjectives: [],

                importantFacts: [],

                importantDefinitions: [],

                importantPrinciples: [],

                importantProcedures: [],

                importantTimelines: [],

                quizDifficulty: "Medium",

                recommendedQuestionTypes: [

                    "MCQ",

                    "True/False",

                    "Fill in the Blanks",

                    "Scenario Based"

                ],

                estimatedQuestions: 0

            },

            generatedAt: new Date(),

            status: "Quiz Intelligence Created",

            nextStep: "Question Generation Engine"

        };

    }

}
