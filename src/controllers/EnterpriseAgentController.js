/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Agent Controller
 *
 * Contract : AGENT-104
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Agents.
 * ============================================================
 */

import EnterpriseAgentService
    from "../services/EnterpriseAgentService";

export default class EnterpriseAgentController {

    constructor() {

        this.service =
            new EnterpriseAgentService();

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
    // Lifecycle
    //--------------------------------------------------

    initializeAgent(agentId) {

        return this.service.initializeAgent(

            agentId

        );

    }

    startAgent(agentId) {

        return this.service.startAgent(

            agentId

        );

    }

    pauseAgent(agentId) {

        return this.service.pauseAgent(

            agentId

        );

    }

    resumeAgent(agentId) {

        return this.service.resumeAgent(

            agentId

        );

    }

    completeAgent(agentId) {

        return this.service.completeAgent(

            agentId

        );

    }

    failAgent(agentId, reason) {

        return this.service.failAgent(

            agentId,

            reason

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