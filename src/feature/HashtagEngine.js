export default class HashtagEngine {

    generate(captionObject) {

        return {

            id: captionObject.id,

            documentName: captionObject.documentName,

            hashtags: {

                youtube: [],

                instagram: [],

                facebook: [],

                linkedin: [],

                x: [],

                telegram: [],

                trending: [],

                branded: [],

                niche: []

            },

            generatedAt: new Date(),

            status: "Hashtags Generated",

            nextStep: "Thumbnail Engine"

        };

    }

}
