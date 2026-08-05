/**
 * ============================================================
 * ARJUN EOS
 * Analytics Agent Controller
 *
 * Contract : ANALYTICS-AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Analytics Agent.
 * ============================================================
 */

import AnalyticsAgentService
    from "../services/AnalyticsAgentService";

export default class AnalyticsAgentController {

    constructor() {

        this.service =
            new AnalyticsAgentService();

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
    // Execute Analytics Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        metrics = {},

        performance = {},

        workflow = {},

        trends = {},

        recommendations = []

    ) {

        return this.service.execute(

            agentId,

            metrics,

            performance,

            workflow,

            trends,

            recommendations

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