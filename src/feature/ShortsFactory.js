export default class ShortsFactory {

    build(quizPackage) {

        return {

            id: quizPackage.id,

            documentName: quizPackage.documentName,

            short: {

                title: "",

                topic: "",

                hook: "",

                script: "",

                question: "",

                options: [],

                answer: "",

                explanation: "",

                callToAction: "",

                hashtags: [],

                estimatedDuration: 60

            },

            factoryStatus: "Short Ready",

            createdAt: new Date(),

            nextStep: "Hook Engine"

        };

    }

}
