/**
 * ============================================================
 * ARJUN EOS
 * Quiz Intelligence
 *
 * Contract : QUIZ-INTELLIGENCE-001
 * Layer    : Model
 * Purpose  : Enterprise Quiz Intelligence Runtime.
 * ============================================================
 */

export default class QuizIntelligence {

    constructor(data = {}) {

        this.sessionId =
            data.sessionId ||
            crypto.randomUUID();

        this.title =
            data.title || "";

        this.topic =
            data.topic || "";

        this.description =
            data.description || "";

        this.questions =
            data.questions || [];

        this.options =
            data.options || [];

        this.answers =
            data.answers || [];

        this.difficulty =
            data.difficulty || "MEDIUM";

        this.status =
            data.status || "CREATED";

        this.progress =
            data.progress || 0;

        this.createdAt =
            data.createdAt || new Date();

        this.updatedAt =
            data.updatedAt || new Date();

    }

    //--------------------------------------------------
    // Session
    //--------------------------------------------------

    start() {

        this.status = "RUNNING";

        this.updatedAt = new Date();

    }

    complete() {

        this.status = "COMPLETED";

        this.progress = 100;

        this.updatedAt = new Date();

    }

    fail() {

        this.status = "FAILED";

        this.updatedAt = new Date();

    }

    //--------------------------------------------------
    // Metadata
    //--------------------------------------------------

    setTitle(title) {

        this.title = title;

        this.updatedAt = new Date();

    }

    setTopic(topic) {

        this.topic = topic;

        this.updatedAt = new Date();

    }

    setDescription(description) {

        this.description = description;

        this.updatedAt = new Date();

    }

    //--------------------------------------------------
    // Quiz Content
    //--------------------------------------------------

    addQuestion(question) {

        this.questions.push(question);

        this.updatedAt = new Date();

    }

    addOption(option) {

        this.options.push(option);

        this.updatedAt = new Date();

    }

    addAnswer(answer) {

        this.answers.push(answer);

        this.updatedAt = new Date();

    }

    //--------------------------------------------------
    // Difficulty
    //--------------------------------------------------

    setDifficulty(level) {

        this.difficulty = level;

        this.updatedAt = new Date();

    }

    //--------------------------------------------------
    // Progress
    //--------------------------------------------------

    updateProgress(progress) {

        this.progress = progress;

        this.updatedAt = new Date();

    }

}