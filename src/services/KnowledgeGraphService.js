/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Graph Service
 *
 * Contract : KNOWLEDGE-GRAPH-004
 * Layer    : Service
 * Purpose  : Business logic for the Enterprise Knowledge Graph.
 * ============================================================
 */

import KnowledgeGraphRepository
    from "../repositories/KnowledgeGraphRepository";

export default class KnowledgeGraphService {

    constructor() {

        this.repository =
            new KnowledgeGraphRepository();

    }

    //--------------------------------------------------
    // Nodes
    //--------------------------------------------------

    saveNode(node) {

        return this.repository.saveNode(node);

    }

    getNodes() {

        return this.repository.getNodes();

    }

    findNode(nodeId) {

        return this.repository.findNode(nodeId);

    }

    //--------------------------------------------------
    // Edges
    //--------------------------------------------------

    saveEdge(edge) {

        return this.repository.saveEdge(edge);

    }

    getEdges() {

        return this.repository.getEdges();

    }

    findEdge(edgeId) {

        return this.repository.findEdge(edgeId);

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.repository.getStatistics();

    }

}