/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Quiz Domain Model
 * Version 1.0
 * ============================================================
 */

export default class Quiz {

    constructor({

        id = crypto.randomUUID(),

        title = "",

        description = "",

        category = "General",

        difficulty = "Medium",

        language = "English",

        status = "Draft",

        questions = [],

        tags = [],

        totalQuestions = 0,

        estimatedDuration = 0,

        passingScore = 0,

        version = "1.0",

        createdBy = "Founder",

        createdAt = new Date().toISOString(),

        updatedAt = new Date().toISOString()

    } = {}) {

        this.id = id;

        this.title = title;

        this.description = description;

        this.category = category;

        this.difficulty = difficulty;

        this.language = language;

        this.status = status;

        this.questions = questions;

        this.tags = tags;

        this.totalQuestions = totalQuestions;

        this.estimatedDuration = estimatedDuration;

        this.passingScore = passingScore;

        this.version = version;

        this.createdBy = createdBy;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

    }

}