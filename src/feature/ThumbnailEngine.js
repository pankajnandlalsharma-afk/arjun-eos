export default class ThumbnailEngine {

    generate(hashtagObject) {

        return {

            id: hashtagObject.id,

            documentName: hashtagObject.documentName,

            thumbnail: {

                title: "",

                headline: "",

                subHeadline: "",

                backgroundConcept: "",

                subjectFocus: "",

                emotion: "",

                colorTheme: "",

                textOverlay: "",

                callout: "",

                thumbnailPrompt: ""

            },

            generatedAt: new Date(),

            status: "Thumbnail Blueprint Generated",

            nextStep: "CTA Engine"

        };

    }

}