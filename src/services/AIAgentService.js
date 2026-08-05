/**
 * ============================================================
 * ARJUN EOS
 * AI Agent Service
 *
 * Contract : AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise AI Agent operations.
 * ============================================================
 */

import AIAgentRuntimeEngine
    from "../engine/AIAgentRuntimeEngine";

import AIAgentRepository
    from "../repositories/AIAgentRepository";

export default class AIAgentService {

    constructor() {

        this.engine =
            new AIAgentRuntimeEngine();

        this.repository =
            new AIAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Initialize
    //--------------------------------------------------

    initializeAgent(agentId) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "AI Agent not found."

            );

        }

        agent =

            this.engine.initialize(agent);

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Start
    //--------------------------------------------------

    startAgent(agentId) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "AI Agent not found."

            );

        }

        agent =

            this.engine.start(agent);

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Pause
    //--------------------------------------------------

    pauseAgent(agentId) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "AI Agent not found."

            );

        }

        agent =

            this.engine.pause(agent);

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Resume
    //--------------------------------------------------

    resumeAgent(agentId) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "AI Agent not found."

            );

        }

        agent =

            this.engine.resume(agent);

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Complete
    //--------------------------------------------------

    completeAgent(agentId) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "AI Agent not found."

            );

        }

        agent =

            this.engine.complete(agent);

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgent(agentId) {

        return this.repository.findById(agentId);

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