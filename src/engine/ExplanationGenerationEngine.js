export default class ExplanationGenerationEngine {

    generate(question, correctAnswer) {

        return {
            question: question,

            answer: correctAnswer,

            explanation:
                The correct answer is "${correctAnswer}" because it matches the verified knowledge available for this topic.,

            generatedAt: new Date()
        };

    }

}