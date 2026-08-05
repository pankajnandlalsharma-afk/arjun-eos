/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Question Model
 *
 * Contract : QUESTION-001
 * Layer    : Model
 * Purpose  : Enterprise Question Object
 * ============================================================
 */

class Question {

    constructor({

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        id = crypto.randomUUID(),

        quizId = "",

        //--------------------------------------------------
        // Question
        //--------------------------------------------------

        type = "multiple-choice",

        question = "",

        options = [],

        correctAnswer = null,

        explanation = "",

        image = "",

        //--------------------------------------------------
        // Evaluation
        //--------------------------------------------------

        marks = 1,

        negativeMarks = 0,

        difficulty = "MEDIUM",

        //--------------------------------------------------
        // Enterprise Intelligence
        //--------------------------------------------------

        learningObjective = "",

        bloomLevel = "UNDERSTAND",

        source = "",

        confidenceScore = 0,

        //--------------------------------------------------
        // Metadata
        //--------------------------------------------------

        tags = [],

        status = "DRAFT",

        reviewedBy = "",

        approvedBy = "",

        version = 1,

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        createdAt = new Date().toISOString(),

        updatedAt = new Date().toISOString()

    } = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.id = id;

        this.quizId = quizId;

        //--------------------------------------------------
        // Question
        //--------------------------------------------------

        this.type = type;

        this.question = question;

        this.options = options;

        this.correctAnswer = correctAnswer;

        this.explanation = explanation;

        this.image = image;

        //--------------------------------------------------
        // Evaluation
        //--------------------------------------------------

        this.marks = marks;

        this.negativeMarks = negativeMarks;

        this.difficulty = difficulty;

        //--------------------------------------------------
        // Enterprise Intelligence
        //--------------------------------------------------

        this.learningObjective = learningObjective;

        this.bloomLevel = bloomLevel;

        this.source = source;

        this.confidenceScore = confidenceScore;

        //--------------------------------------------------
        // Metadata
        //--------------------------------------------------

        this.tags = tags;

        this.status = status;

        this.reviewedBy = reviewedBy;

        this.approvedBy = approvedBy;

        this.version = version;

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt = createdAt;

        this.updatedAt = updatedAt;

    }

    //--------------------------------------------------
    // Question
    //--------------------------------------------------

    setQuestion(question) {

        this.question = question;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Options
    //--------------------------------------------------

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

    //--------------------------------------------------
    // Correct Answer
    //--------------------------------------------------

    updateAnswer(answer) {

        this.correctAnswer = answer;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Learning Objective
    //--------------------------------------------------

    setLearningObjective(objective) {

        this.learningObjective = objective;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Bloom Level
    //--------------------------------------------------

    setBloomLevel(level) {

        this.bloomLevel = level;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Difficulty
    //--------------------------------------------------

    setDifficulty(level) {

        this.difficulty = level;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Source
    //--------------------------------------------------

    setSource(source) {

        this.source = source;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Confidence
    //--------------------------------------------------

    setConfidenceScore(score) {

        this.confidenceScore = score;

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Tags
    //--------------------------------------------------

    addTag(tag) {

        if (!this.tags.includes(tag)) {

            this.tags.push(tag);

        }

        this.updatedAt = new Date().toISOString();

    }

    removeTag(tag) {

        this.tags = this.tags.filter(

            item => item !== tag

        );

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Status
    //--------------------------------------------------

    approve(approvedBy) {

        this.status = "APPROVED";

        this.approvedBy = approvedBy;

        this.updatedAt = new Date().toISOString();

    }

    publish() {

        this.status = "READY";

        this.updatedAt = new Date().toISOString();

    }

    archive() {

        this.status = "ARCHIVED";

        this.updatedAt = new Date().toISOString();

    }

    //--------------------------------------------------
    // Validation
    //--------------------------------------------------

    isValid() {

        return (

            this.question.trim().length > 0 &&

            this.options.length >= 2 &&

            this.correctAnswer !== null

        );

    }

    //--------------------------------------------------
    // Serialization
    //--------------------------------------------------

    toJSON() {

        return {

            ...this

        };

    }

}

export default Question;