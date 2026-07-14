export default class DifficultyEngine {

    generate(memoryObject) {

        return {

            id: memoryObject.id,

            documentName: memoryObject.documentName,

            difficulty: {

                level: "Medium",

                score: 0,

                bloomLevel: "",

                estimatedTime: "",

                targetAudience: ""

            },

            generatedAt: new Date(),

            status: "Difficulty Generated",

            nextStep: "Quiz Validation Engine"

        };

    }

}