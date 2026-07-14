export default class PublishingEngine {

    publish(reelObject) {

        return {

            id: reelObject.id,

            documentName: reelObject.documentName,

            publishing: {

                youtube: {

                    ready: false,

                    scheduled: false,

                    published: false

                },

                instagram: {

                    ready: false,

                    scheduled: false,

                    published: false

                },

                facebook: {

                    ready: false,

                    scheduled: false,

                    published: false

                },

                linkedin: {

                    ready: false,

                    scheduled: false,

                    published: false

                },

                x: {

                    ready: false,

                    scheduled: false,

                    published: false

                },

                telegram: {

                    ready: false,

                    scheduled: false,

                    published: false

                },

                website: {

                    ready: false,

                    scheduled: false,

                    published: false

                }

            },

            publishedAt: null,

            status: "Ready For Analytics",

            nextStep: "Analytics Engine"

        };

    }

}
