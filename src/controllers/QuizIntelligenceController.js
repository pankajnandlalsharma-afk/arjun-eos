/**
 * ============================================================
 * ARJUN EOS
 * Quiz Intelligence Controller
 *
 * Contract : QUIZ-INTELLIGENCE-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Quiz Intelligence.
 * ============================================================
 */

import QuizIntelligenceService
    from "../services/QuizIntelligenceService";

export default class QuizIntelligenceController {

    constructor() {

        this.service =
            new QuizIntelligenceService();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerSession(session) {

        return this.service.registerSession(

            session

        );

    }

    //--------------------------------------------------
    // Execute
    //--------------------------------------------------

    execute(

        sessionId,

        title,

        topic,

        description = "",

        questions = [],

        options = [],

        answers = [],

        difficulty = "MEDIUM"

    ) {

        return this.service.execute(

            sessionId,

            title,

            topic,

            description,

            questions,

            options,

            answers,

            difficulty

        );

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getSession(sessionId) {

        return this.service.getSession(

            sessionId

        );

    }

    getAllSessions() {

        return this.service.getAllSessions();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}