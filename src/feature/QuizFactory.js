export default class QuizFactory {

    build(validationObject) {

        return {

            id: validationObject.id,

            documentName: validationObject.documentName,

            quiz: {

                title: "",

                description: "",

                category: "",

                audience: "",

                difficulty: "",

                estimatedDuration: "",

                questions: [],

                answers: [],

                explanations: [],

                references: [],

                memoryTips: []

            },

            factoryStatus: "Production Ready",

            createdAt: new Date(),

            nextStep: "Quiz Publisher"

        };

    }

}
