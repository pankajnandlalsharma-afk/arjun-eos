/**
 * ============================================================
 * ARJUN EOS
 * Legal Agent Controller
 *
 * Contract : LEGAL-AGENT-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Legal Agent.
 * ============================================================
 */

import LegalAgentService
    from "../services/LegalAgentService";

export default class LegalAgentController {

    constructor() {

        this.service =
            new LegalAgentService();

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
    // Execute Legal Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        query,

        caseData,

        statute,

        judgment,

        precedents = [],

        draft = ""

    ) {

        return this.service.execute(

            agentId,

            query,

            caseData,

            statute,

            judgment,

            precedents,

            draft

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