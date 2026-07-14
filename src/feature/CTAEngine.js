export default class CTAEngine {

    generate(thumbnailObject) {

        return {

            id: thumbnailObject.id,

            documentName: thumbnailObject.documentName,

            cta: {

                youtube: {

                    subscribe: "",

                    comment: "",

                    like: "",

                    share: ""

                },

                instagram: {

                    follow: "",

                    save: "",

                    comment: "",

                    share: ""

                },

                facebook: {

                    follow: "",

                    comment: "",

                    share: ""

                },

                linkedin: {

                    connect: "",

                    comment: "",

                    share: ""

                },

                telegram: {

                    join: "",

                    share: ""

                }

            },

            generatedAt: new Date(),

            status: "CTA Generated",

            nextStep: "Reel Factory"

        };

    }

}