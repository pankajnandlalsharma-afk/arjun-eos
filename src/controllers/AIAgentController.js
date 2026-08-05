/**
 * ============================================================
 * ARJUN EOS
 * AI Agent Controller
 *
 * Contract : AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise AI Agents.
 * ============================================================
 */

import AIAgentService
    from "../services/AIAgentService";

export default class AIAgentController {

    constructor() {

        this.service =
            new AIAgentService();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        return this.service.registerAgent(agent);

    }

    //--------------------------------------------------
    // Lifecycle
    //--------------------------------------------------

    initializeAgent(agentId) {

        return this.service.initializeAgent(agentId);

    }

    startAgent(agentId) {

        return this.service.startAgent(agentId);

    }

    pauseAgent(agentId) {

        return this.service.pauseAgent(agentId);

    }

    resumeAgent(agentId) {

        return this.service.resumeAgent(agentId);

    }

    completeAgent(agentId) {

        return this.service.completeAgent(agentId);

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgent(agentId) {

        return this.service.getAgent(agentId);

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