/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Agent Controller
 *
 * Contract : KNOWLEDGE-AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Knowledge Agent.
 * ============================================================
 */

import KnowledgeAgentService
    from "../services/KnowledgeAgentService";

export default class KnowledgeAgentController {

    constructor() {

        this.service =
            new KnowledgeAgentService();

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
    // Execute
    //--------------------------------------------------

    execute(

        agentId,

        resource,

        category

    ) {

        return this.service.execute(

            agentId,

            resource,

            category

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