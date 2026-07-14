export default class ExplanationGenerationEngine {

    generate(answerObject) {

        return {

            id: answerObject.id,

            documentName: answerObject.documentName,

            explanations: [],

            explanationStructure: {

                correctExplanation: "",

                incorrectExplanation: "",

                legalPrinciple: "",

                educationalNote: "",

                learningInsight: ""

            },

            generatedAt: new Date(),

            status: "Explanations Generated",

            nextStep: "Reference Generation Engine"

        };

    }

}