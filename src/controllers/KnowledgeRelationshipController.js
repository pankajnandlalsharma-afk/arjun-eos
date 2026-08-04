/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Relationship Controller
 *
 * Contract : KNOWLEDGE-GRAPH-008
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Knowledge Relationships.
 * ============================================================
 */

import KnowledgeRelationshipService
    from "../services/KnowledgeRelationshipService";

export default class KnowledgeRelationshipController {

    constructor() {

        this.service = new KnowledgeRelationshipService();

    }

    //--------------------------------------------------
    // Relationships
    //--------------------------------------------------

    createRelationship(sourceNode, targetNode) {

        return this.service.createRelationship(

            sourceNode,

            targetNode

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}