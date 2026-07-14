export default class QuizValidationEngine {

    validate(difficultyObject) {

        return {

            id: difficultyObject.id,

            documentName: difficultyObject.documentName,

            validation: {

                questionsValidated: false,

                optionsValidated: false,

                answersValidated: false,

                explanationsValidated: false,

                referencesValidated: false,

                memoryTipsValidated: false,

                difficultyValidated: false,

                qualityScore: 0,

                approved: false

            },

            validatedAt: new Date(),

            status: "Quiz Validated",

            nextStep: "Quiz Factory"

        };

    }

}