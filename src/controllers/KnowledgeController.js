/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Controller
 *
 * Contract : KNOWLEDGE-CONTROLLER-001
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Knowledge.
 * ============================================================
 */

import KnowledgeService
    from "../services/KnowledgeService";

export default class KnowledgeController {

    constructor() {

        this.service = new KnowledgeService();

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    saveKnowledge(knowledgeObject) {

        return this.service.saveKnowledge(
            knowledgeObject
        );

    }

    //--------------------------------------------------
    // Get
    //--------------------------------------------------

    getKnowledge(knowledgeId) {

        return this.service.getKnowledge(
            knowledgeId
        );

    }

    //--------------------------------------------------
    // Get All
    //--------------------------------------------------

    getAllKnowledge() {

        return this.service.getAllKnowledge();

    }

    //--------------------------------------------------
    // Search
    //--------------------------------------------------

    searchKnowledge(keyword) {

        return this.service.searchKnowledge(
            keyword
        );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    deleteKnowledge(knowledgeId) {

        return this.service.deleteKnowledge(
            knowledgeId
        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}
