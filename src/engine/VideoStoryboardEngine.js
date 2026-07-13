export default class VideoStoryboardEngine {

    generate(script) {

        return [

            {
                scene: 1,
                duration: "0-3 sec",
                title: "Hook",
                content: script.hook
            },

            {
                scene: 2,
                duration: "4-8 sec",
                title: "Question",
                content: script.question
            },

            {
                scene: 3,
                duration: "9-15 sec",
                title: "Options",
                content: script.options
            },

            {
                scene: 4,
                duration: "16-20 sec",
                title: "Countdown",
                content: script.countdown
            },

            {
                scene: 5,
                duration: "21-25 sec",
                title: "Answer",
                content: script.answer
            },

            {
                scene: 6,
                duration: "26-35 sec",
                title: "Explanation",
                content: script.explanation
            },

            {
                scene: 7,
                duration: "36-40 sec",
                title: "Call To Action",
                content: script.callToAction
            }

        ];

    }

}
