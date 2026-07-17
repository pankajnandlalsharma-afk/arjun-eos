/**
 * ====================================================
 * ARJUN EOS
 * Question Model
 * ====================================================
 */

class Question {

    constructor({
        id = crypto.randomUUID(),
        type = "multiple-choice",
        question = "",
        options = [],
        correctAnswer = null,
        explanation = "",
        marks = 1,
        negativeMarks = 0,
        difficulty = "Medium",
        tags = []
    } = {}) {

        this.id = id;
        this.type = type;
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
        this.marks = marks;
        this.negativeMarks = negativeMarks;
        this.difficulty = difficulty;
        this.tags = tags;

    }

    addOption(option) {

        this.options.push(option);

    }

    removeOption(optionId) {

        this.options = this.options.filter(
            option => option.id !== optionId
        );

    }

    updateAnswer(answer) {

        this.correctAnswer = answer;

    }

    isValid() {

        return (
            this.question.trim().length > 0 &&
            this.options.length >= 2 &&
            this.correctAnswer !== null
        );

    }

    toJSON() {

        return {
            ...this
        };

    }

}

export default Question;