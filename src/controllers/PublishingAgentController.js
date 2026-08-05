/**
 * ============================================================
 * ARJUN EOS
 * Publishing Agent Controller
 *
 * Contract : PUBLISHING-AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Publishing Agent.
 * ============================================================
 */

import PublishingAgentService
    from "../services/PublishingAgentService";

export default class PublishingAgentController {

    constructor() {

        this.service =
            new PublishingAgentService();

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
    // Execute Publishing Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        content,

        platforms = [],

        schedule = null,

        publishResult = {},

        status = "PUBLISHED"

    ) {

        return this.service.execute(

            agentId,

            content,

            platforms,

            schedule,

            publishResult,

            status

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