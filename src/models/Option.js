/**
 * ====================================================
 * ARJUN EOS
 * Option Model
 * ====================================================
 */

class Option {

    constructor({
        id = crypto.randomUUID(),
        text = "",
        isCorrect = false,
        explanation = "",
        image = "",
        createdAt = new Date().toISOString(),
        updatedAt = new Date().toISOString()
    } = {}) {

        this.id = id;
        this.text = text;
        this.isCorrect = isCorrect;
        this.explanation = explanation;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }

    setText(text) {

        this.text = text;
        this.updatedAt = new Date().toISOString();

    }

    setCorrect(isCorrect = true) {

        this.isCorrect = isCorrect;
        this.updatedAt = new Date().toISOString();

    }

    setExplanation(explanation) {

        this.explanation = explanation;
        this.updatedAt = new Date().toISOString();

    }

    setImage(image) {

        this.image = image;
        this.updatedAt = new Date().toISOString();

    }

    isValid() {

        return this.text.trim().length > 0;

    }

    toJSON() {

        return {
            ...this
        };

    }

}

export default Option;