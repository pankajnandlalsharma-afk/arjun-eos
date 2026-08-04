/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Graph Controller
 *
 * Contract : KNOWLEDGE-GRAPH-005
 * Layer    : Controller
 * Purpose  : Public API for the Enterprise Knowledge Graph.
 * ============================================================
 */

import KnowledgeGraphService
    from "../services/KnowledgeGraphService";

export default class KnowledgeGraphController {

    constructor() {

        this.service = new KnowledgeGraphService();

    }

    //--------------------------------------------------
    // Nodes
    //--------------------------------------------------

    saveNode(node) {

        return this.service.saveNode(node);

    }

    getNodes() {

        return this.service.getNodes();

    }

    findNode(nodeId) {

        return this.service.findNode(nodeId);

    }

    //--------------------------------------------------
    // Edges
    //--------------------------------------------------

    saveEdge(edge) {

        return this.service.saveEdge(edge);

    }

    getEdges() {

        return this.service.getEdges();

    }

    findEdge(edgeId) {

        return this.service.findEdge(edgeId);

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}