export default class MemoryTipEngine {

    generate(referenceObject) {

        return {

            id: referenceObject.id,

            documentName: referenceObject.documentName,

            memoryTips: [],

            memoryStructure: {

                mnemonic: "",

                shortcut: "",

                visualMemory: "",

                association: "",

                revisionTip: ""

            },

            generatedAt: new Date(),

            status: "Memory Tips Generated",

            nextStep: "Difficulty Engine"

        };

    }

}