/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Semantic Search Service
 *
 * Contract : KNOWLEDGE-SEARCH-002
 * Layer    : Service
 * Purpose  : Executes semantic search operations.
 * ============================================================
 */

import SemanticSearchEngine
    from "../engine/SemanticSearchEngine";

import KnowledgeRepository
    from "../repositories/KnowledgeRepository";

export default class SemanticSearchService {

    constructor() {

        this.engine =
            new SemanticSearchEngine();

        this.repository =
            new KnowledgeRepository();

    }

    //--------------------------------------------------
    // Search
    //--------------------------------------------------

    search(query) {

        const knowledgeObjects =

            this.repository.getAll();

        return this.engine.search(

            knowledgeObjects,

            query

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.repository.getStatistics();

    }

}