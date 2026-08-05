/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Agent Service
 *
 * Contract : AGENT-103
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Agent operations.
 * ============================================================
 */

import EnterpriseAgentEngine
    from "../engine/EnterpriseAgentEngine";

import EnterpriseAgentRepository
    from "../repositories/EnterpriseAgentRepository";

export default class EnterpriseAgentService {

    constructor() {

        this.engine =
            new EnterpriseAgentEngine();

        this.repository =
            new EnterpriseAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        agent = this.engine.register(agent);

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

                "Enterprise Agent not found."

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

                "Enterprise Agent not found."

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

                "Enterprise Agent not found."

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

                "Enterprise Agent not found."

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

                "Enterprise Agent not found."

            );

        }

        agent =

            this.engine.complete(agent);

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Fail
    //--------------------------------------------------

    failAgent(agentId, reason) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "Enterprise Agent not found."

            );

        }

        agent =

            this.engine.fail(

                agent,

                reason

            );

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