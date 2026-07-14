export default class QuizPublisher {

    publish(quizFactoryObject) {

        return {

            id: quizFactoryObject.id,

            documentName: quizFactoryObject.documentName,

            publication: {

                quizTitle: quizFactoryObject.quiz.title,

                description: quizFactoryObject.quiz.description,

                platforms: [

                    "YouTube",

                    "Instagram",

                    "Facebook",

                    "LinkedIn",

                    "Telegram",

                    "Website",

                    "Mobile App"

                ],

                publishingStatus: "Ready",

                scheduled: false,

                published: false

            },

            publishedAt: null,

            status: "Ready For Publishing",

            nextStep: "Shorts Factory"

        };

    }

}
