export default class CaptionEngine {

    generate(subtitleObject) {

        return {

            id: subtitleObject.id,

            documentName: subtitleObject.documentName,

            captions: {

                youtube: "",

                instagram: "",

                facebook: "",

                linkedin: "",

                x: "",

                telegram: ""

            },

            generatedAt: new Date(),

            status: "Captions Generated",

            nextStep: "Hashtag Engine"

        };

    }

}