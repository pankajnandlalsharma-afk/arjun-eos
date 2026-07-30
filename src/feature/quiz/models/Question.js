/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Question Domain Model
 * Version 1.0
 * ============================================================
 */

export default class Question {

    constructor({

        id = crypto.randomUUID(),

        quizId = "",

        title = "",

        explanation = "",

        options = [],

        correctAnswer = null,

        difficulty = "Medium",

        category = "General",

        tags = [],

        marks = 1,

        negativeMarks = 0,

        hint = "",

        source = "",

        createdBy = "Founder",

        createdAt = new Date().toISOString(),

        updatedAt = new Date().toISOString()

    } = {}) {

        this.id = id;

        this.quizId = quizId;

        this.title = title;

        this.explanation = explanation;

        this.options = options;

        this.correctAnswer = correctAnswer;

        this.difficulty = difficulty;

        this.category = category;

        this.tags = tags;

        this.marks = marks;

        this.negativeMarks = negativeMarks;

        this.hint = hint;

        this.source = source;

        this.createdBy = createdBy;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

    }

}