export default class QuestionGenerationEngine {

    generate(quizIntelligence) {

        return {

            id: quizIntelligence.id,

            documentName: quizIntelligence.documentName,

            questions: [],

            questionTypes: [

                "MCQ",

                "True/False",

                "Fill in the Blanks",

                "Scenario Based"

            ],

            estimatedQuestions:

                quizIntelligence.quizIntelligence.estimatedQuestions,

            generatedAt: new Date(),

            status: "Questions Generated",

            nextStep: "Option Generation Engine"

        };

    }

}