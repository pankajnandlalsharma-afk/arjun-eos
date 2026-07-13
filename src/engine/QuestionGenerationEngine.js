export default class QuestionGenerationEngine {

    generate(topic, difficulty = "Easy") {

        return {
            topic: topic,
            difficulty: difficulty,

            question:
                What is the most important fact about ${topic}?,

            options: [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],

            correctAnswer: "Option A",

            explanation:
                ${topic} is an important subject that should be studied carefully.,

            generatedAt: new Date()
        };

    }

}
