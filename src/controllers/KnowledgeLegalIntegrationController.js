/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Legal Integration Controller
 *
 * Contract : KLI-003
 * Layer    : Controller
 * Purpose  : Public API for Knowledge ↔ Legal Integration.
 * ============================================================
 */

import KnowledgeLegalIntegrationService
    from "../services/KnowledgeLegalIntegrationService";

export default class KnowledgeLegalIntegrationController {

    constructor() {

        this.service =
            new KnowledgeLegalIntegrationService();

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