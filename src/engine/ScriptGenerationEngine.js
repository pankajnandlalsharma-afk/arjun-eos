export default class ScriptGenerationEngine {

    generate(quiz) {

        return {

            hook:
                "Can you answer this question in 5 seconds?",

            introduction:
                "Let's test your knowledge.",

            question:
                quiz.question,

            options:
                quiz.options,

            countdown:
                "5...4...3...2...1",

            answer:
                quiz.correctAnswer,

            explanation:
                quiz.explanation,

            callToAction:
                "Comment your score and follow for more quizzes!",

            generatedAt:
                new Date()

        };

    }

}