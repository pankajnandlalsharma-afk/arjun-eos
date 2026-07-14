export default class SubtitleEngine {

    generate(voiceObject) {

        return {

            id: voiceObject.id,

            documentName: voiceObject.documentName,

            subtitles: {

                language: "English",

                style: "Default",

                fontSize: "Medium",

                position: "Bottom",

                timeline: [],

                captions: []

            },

            generatedAt: new Date(),

            status: "Subtitles Generated",

            nextStep: "Caption Engine"

        };

    }

}