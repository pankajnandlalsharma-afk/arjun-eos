/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Quiz Integration Controller
 *
 * Contract : KQI-003
 * Layer    : Controller
 * Purpose  : Public API for Knowledge ↔ Quiz Integration.
 * ============================================================
 */

import KnowledgeQuizIntegrationService
    from "../services/KnowledgeQuizIntegrationService";

export default class KnowledgeQuizIntegrationController {

    constructor() {

        this.service =
            new KnowledgeQuizIntegrationService();

    }

    //--------------------------------------------------
    // Integrate All Knowledge
    //--------------------------------------------------

    integrateKnowledge() {

        return this.service.integrateKnowledge();

    }

    //--------------------------------------------------
    // Integrate Single Knowledge Object
    //--------------------------------------------------

    integrateKnowledgeById(knowledgeId) {

        return this.service.integrateKnowledgeById(

            knowledgeId

        );

    }

    //--------------------------------------------------
    // Integration Status
    //--------------------------------------------------

    getIntegrationStatus() {

        return this.service.getIntegrationStatus();

    }

}