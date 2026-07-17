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
        explanation = ""
    } = {}) {

        this.id = id;
        this.text = text;
        this.isCorrect = isCorrect;
        this.explanation = explanation;

    }

    setText(text) {

        this.text = text;

    }

    setCorrect(isCorrect) {

        this.isCorrect = isCorrect;

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