export default class QuestionQualityEngine {

    evaluate(question) {

        let score = 100;
        const remarks = [];

        if (!question.question || question.question.length < 10) {
            score -= 20;
            remarks.push("Question is too short.");
        }

        if (!question.options || question.options.length !== 4) {
            score -= 30;
            remarks.push("Exactly 4 options required.");
        }

        if (!question.correctAnswer) {
            score -= 25;
            remarks.push("Correct answer missing.");
        }

        if (!question.explanation || question.explanation.length < 15) {
            score -= 25;
            remarks.push("Explanation too short.");
        }

        return {
            score,
            remarks,
            approved: score >= 80
        };

    }

}
