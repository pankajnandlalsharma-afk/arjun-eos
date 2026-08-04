/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Semantic Search Controller
 *
 * Contract : KNOWLEDGE-SEARCH-003
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Semantic Search.
 * ============================================================
 */

import SemanticSearchService
    from "../services/SemanticSearchService";

export default class SemanticSearchController {

    constructor() {

        this.service =
            new SemanticSearchService();

    }

    //--------------------------------------------------
    // Search
    //--------------------------------------------------

    search(query) {

        return this.service.search(

            query

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}