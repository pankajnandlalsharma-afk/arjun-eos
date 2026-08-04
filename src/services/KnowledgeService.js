/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Service
 *
 * Contract : KNOWLEDGE-SERVICE-001
 * Layer    : Service
 * Purpose  : Business logic for Enterprise Knowledge.
 * ============================================================
 */

import KnowledgeRepository
    from "../repositories/KnowledgeRepository";

export default class KnowledgeService {

    constructor() {

        this.repository = new KnowledgeRepository();

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    saveKnowledge(knowledgeObject) {

        return this.repository.save(

            knowledgeObject

        );

    }

    //--------------------------------------------------
    // Get
    //--------------------------------------------------

    getKnowledge(knowledgeId) {

        return this.repository.findById(

            knowledgeId

        );

    }

    //--------------------------------------------------
    // Get All
    //--------------------------------------------------

    getAllKnowledge() {

        return this.repository.getAll();

    }

    //--------------------------------------------------
    // Search
    //--------------------------------------------------

    searchKnowledge(keyword) {

        return this.repository.search(

            keyword

        );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    deleteKnowledge(knowledgeId) {

        this.repository.delete(

            knowledgeId

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.repository.getStatistics();

    }

}