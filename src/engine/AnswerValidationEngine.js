export default class AnswerValidationEngine {

    validate(question) {

        const result = {
            valid: true,
            errors: []
        };

        if (!question.question || question.question.trim() === "") {
            result.valid = false;
            result.errors.push("Question is missing.");
        }

        if (!question.options || question.options.length !== 4) {
            result.valid = false;
            result.errors.push("Exactly 4 options are required.");
        }

        if (!question.correctAnswer) {
            result.valid = false;
            result.errors.push("Correct answer is missing.");
        }

        if (!question.explanation || question.explanation.trim() === "") {
            result.valid = false;
            result.errors.push("Explanation is missing.");
        }

        return result;

    }

}