export default class HookEngine {

    generate(shortObject) {

        return {

            id: shortObject.id,

            documentName: shortObject.documentName,

            hooks: {

                curiosityHook: "",

                challengeHook: "",

                surpriseHook: "",

                scenarioHook: "",

                examHook: "",

                legalHook: "",

                emotionalHook: "",

                recommendedHook: ""

            },

            generatedAt: new Date(),

            status: "Hooks Generated",

            nextStep: "Script Engine"

        };

    }

}