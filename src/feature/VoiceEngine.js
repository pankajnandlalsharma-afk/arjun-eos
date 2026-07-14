export default class VoiceEngine {

    generate(scriptObject) {

        return {

            id: scriptObject.id,

            documentName: scriptObject.documentName,

            voice: {

                narratorStyle: "",

                speakingSpeed: "Normal",

                tone: "",

                emphasisPoints: [],

                pauses: [],

                pronunciationGuide: [],

                estimatedDuration: 60

            },

            generatedAt: new Date(),

            status: "Voice Blueprint Generated",

            nextStep: "Subtitle Engine"

        };

    }

}
