export default class ScriptEngine {

    generate(hookObject) {

        return {

            id: hookObject.id,

            documentName: hookObject.documentName,

            script: {

                openingHook: "",

                introduction: "",

                questionPresentation: "",

                optionPresentation: "",

                thinkingPause: "",

                answerReveal: "",

                explanation: "",

                learningTakeaway: "",

                callToAction: "",

                closing: ""

            },

            estimatedDuration: 60,

            generatedAt: new Date(),

            status: "Script Generated",

            nextStep: "Voice Engine"

        };

    }

}