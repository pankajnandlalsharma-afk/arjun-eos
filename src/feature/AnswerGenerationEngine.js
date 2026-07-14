export default class AnswerGenerationEngine {

    generate(questionObject) {

        return {

            id: questionObject.id,

            documentName: questionObject.documentName,

            answers: [],

            answerStructure: {

                correctOption: "",

                correctAnswer: "",

                confidence: 0,

                verified: false

            },

            generatedAt: new Date(),

            status: "Answers Generated",

            nextStep: "Explanation Generation Engine"

        };

    }

}