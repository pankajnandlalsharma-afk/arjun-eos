/**
 * ====================================================
 * ARJUN EOS
 * Question Model
 * ====================================================
 */

class Question {

    constructor({
        id = crypto.randomUUID(),
        quizId = "",
        type = "multiple-choice",
        question = "",
        options = [],
        correctAnswer = null,
        explanation = "",
        marks = 1,
        negativeMarks = 0,
        difficulty = "Medium",
        tags = [],
        image = "",
        createdAt = new Date().toISOString(),
        updatedAt = new Date().toISOString()
    } = {}) {

        this.id = id;
        this.quizId = quizId;
        this.type = type;
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
        this.marks = marks;
        this.negativeMarks = negativeMarks;
        this.difficulty = difficulty;
        this.tags = tags;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }

    addOption(option) {

        this.options.push(option);
        this.updatedAt = new Date().toISOString();

    }

    removeOption(optionId) {

        this.options = this.options.filter(
            option => option.id !== optionId
        );

        this.updatedAt = new Date().toISOString();

    }

    updateAnswer(answer) {

        this.correctAnswer = answer;
        this.updatedAt = new Date().toISOString();

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