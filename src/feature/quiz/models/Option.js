/**
 * ============================================================
 * ARJUN EOS
 * Quiz Studio
 * Option Domain Model
 * Version 1.0
 * ============================================================
 */

export default class Option {

    constructor({

        id = crypto.randomUUID(),

        text = "",

        isCorrect = false,

        explanation = "",

        displayOrder = 1,

        createdAt = new Date().toISOString(),

        updatedAt = new Date().toISOString()

    } = {}) {

        this.id = id;

        this.text = text;

        this.isCorrect = isCorrect;

        this.explanation = explanation;

        this.displayOrder = displayOrder;

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

    }

}