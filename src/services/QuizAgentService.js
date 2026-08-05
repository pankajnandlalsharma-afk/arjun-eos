/**
 * ============================================================
 * ARJUN EOS
 * Quiz Agent Service
 *
 * Contract : QUIZ-AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Quiz Agent.
 * ============================================================
 */

import QuizAgentEngine
    from "../engine/QuizAgentEngine";

import QuizAgentRepository
    from "../repositories/QuizAgentRepository";

export default class QuizAgentService {

    constructor() {

        this.engine =
            new QuizAgentEngine();

        this.repository =
            new QuizAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

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

        let agent =

            this.repository.findById(

                agentId

            );

        if (!agent) {

            throw new Error(

                "Quiz Agent not found."

            );

        }

        this.engine.executeQuizGeneration(

            agent,

            topic

        );

        this.engine.executeOptionGeneration(

            agent,

            options

        );

        this.engine.executeAnswerValidation(

            agent,

            answers

        );

        this.engine.executeDifficultyAnalysis(

            agent,

            difficulty

        );

        this.engine.executePackaging(

            agent,

            quiz

        );

        this.engine.finish(

            agent

        );

        this.repository.save(

            agent

        );

        return agent;

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgent(agentId) {

        return this.repository.findById(

            agentId

        );

    }

    getAllAgents() {

        return this.repository.getAll();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.repository.getStatistics();

    }

}