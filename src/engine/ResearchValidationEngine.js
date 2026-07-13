export default class ResearchValidationEngine {

    validate(research) {

        const errors = [];

        if (!research.source || research.source.trim() === "") {
            errors.push("Source is required.");
        }

        if (!research.topic || research.topic.trim() === "") {
            errors.push("Topic is required.");
        }

        if (!research.summary || research.summary.trim() === "") {
            errors.push("Summary is required.");
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

}