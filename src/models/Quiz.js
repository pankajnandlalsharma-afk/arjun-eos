/**
 * ====================================================
 * ARJUN EOS
 * Quiz Model
 * ====================================================
 */

class Quiz {

    constructor({
        id = crypto.randomUUID(),
        title = "",
        description = "",
        category = "",
        difficulty = "Medium",
        timeLimit = 0,
        passingScore = 0,
        questions = [],
        createdAt = new Date().toISOString(),
        updatedAt = new Date().toISOString()
    } = {}) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.difficulty = difficulty;
        this.timeLimit = timeLimit;
        this.passingScore = passingScore;
        this.questions = questions;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }

    addQuestion(question) {

        this.questions.push(question);
        this.updatedAt = new Date().toISOString();

    }

    removeQuestion(questionId) {

        this.questions = this.questions.filter(
            question => question.id !== questionId
        );

        this.updatedAt = new Date().toISOString();

    }

    getQuestionCount() {

        return this.questions.length;

    }

    toJSON() {

        return {
            ...this
        };

    }

}

export default Quiz;