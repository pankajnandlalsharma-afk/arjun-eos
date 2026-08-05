/**
 * ============================================================
 * ARJUN EOS
 * Research Agent Controller
 *
 * Contract : RESEARCH-AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Research Agent.
 * ============================================================
 */

import ResearchAgentService
    from "../services/ResearchAgentService";

export default class ResearchAgentController {

    constructor() {

        this.service =
            new ResearchAgentService();

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
    // Execute Research Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        topic,

        sources = [],

        evidence = [],

        keywords = [],

        summary = ""

    ) {

        return this.service.execute(

            agentId,

            topic,

            sources,

            evidence,

            keywords,

            summary

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