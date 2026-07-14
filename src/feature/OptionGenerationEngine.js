export default class OptionGenerationEngine {

    generate(questionObject) {

        return {

            id: questionObject.id,

            documentName: questionObject.documentName,

            options: [],

            optionStructure: {

                optionA: "",

                optionB: "",

                optionC: "",

                optionD: ""

            },

            generatedAt: new Date(),

            status: "Options Generated",

            nextStep: "Answer Generation Engine"

        };

    }

}
