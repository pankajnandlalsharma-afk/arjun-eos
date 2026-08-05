/**
 * ============================================================
 * ARJUN EOS
 * Quiz Agent Controller
 *
 * Contract : QUIZ-AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Quiz Agent.
 * ============================================================
 */

import QuizAgentService
    from "../services/QuizAgentService";

export default class QuizAgentController {

    constructor() {

        this.service =
            new QuizAgentService();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        return this.service.registerAgent(

            agent

        );

    }

    //--------------------------------------------------
    // Execute Quiz Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        topic,

        options = [],

        answers = [],

        difficulty = "MEDIUM",

        quiz = {}

    ) {

        return this.service.execute(

            agentId,

            topic,

            options,

            answers,

            difficulty,

            quiz

        );

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgent(agentId) {

        return this.service.getAgent(

            agentId

        );

    }

    getAllAgents() {

        return this.service.getAllAgents();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}