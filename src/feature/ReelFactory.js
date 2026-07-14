export default class ReelFactory {

    build(ctaObject) {

        return {

            id: ctaObject.id,

            documentName: ctaObject.documentName,

            reel: {

                title: "",

                hook: "",

                script: "",

                voiceBlueprint: {},

                subtitles: {},

                captions: {},

                hashtags: {},

                thumbnail: {},

                cta: {},

                duration: 60,

                aspectRatio: "9:16",

                resolution: "1080x1920",

                frameRate: 30

            },

            createdAt: new Date(),

            status: "Reel Production Ready",

            nextStep: "Publishing Engine"

        };

    }

}