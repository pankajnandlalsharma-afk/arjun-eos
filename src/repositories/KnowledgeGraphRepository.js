/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Knowledge Graph Repository
 *
 * Contract : KNOWLEDGE-GRAPH-003
 * Layer    : Repository
 * Purpose  : Stores Knowledge Nodes and Edges.
 * ============================================================
 */

const NODE_STORAGE_KEY =
    "arjun.eos.knowledge.graph.nodes";

const EDGE_STORAGE_KEY =
    "arjun.eos.knowledge.graph.edges";

export default class KnowledgeGraphRepository {

    //--------------------------------------------------
    // Nodes
    //--------------------------------------------------

    getNodes() {

        const data =
            localStorage.getItem(
                NODE_STORAGE_KEY
            );

        return data
            ? JSON.parse(data)
            : [];

    }

    saveNodes(nodes) {

        localStorage.setItem(

            NODE_STORAGE_KEY,

            JSON.stringify(nodes)

        );

    }

    saveNode(node) {

        const nodes = this.getNodes();

        const index = nodes.findIndex(

            item =>

                item.nodeId === node.nodeId

        );

        if (index >= 0) {

            nodes[index] = node;

        }

        else {

            nodes.push(node);

        }

        this.saveNodes(nodes);

        return node;

    }

    findNode(nodeId) {

        return this
            .getNodes()
            .find(

                node =>

                    node.nodeId === nodeId

            );

    }

    //--------------------------------------------------
    // Edges
    //--------------------------------------------------

    getEdges() {

        const data =
            localStorage.getItem(
                EDGE_STORAGE_KEY
            );

        return data
            ? JSON.parse(data)
            : [];

    }

    saveEdges(edges) {

        localStorage.setItem(

            EDGE_STORAGE_KEY,

            JSON.stringify(edges)

        );

    }

    saveEdge(edge) {

        const edges = this.getEdges();

        const index = edges.findIndex(

            item =>

                item.edgeId === edge.edgeId

        );

        if (index >= 0) {

            edges[index] = edge;

        }

        else {

            edges.push(edge);

        }

        this.saveEdges(edges);

        return edge;

    }

    findEdge(edgeId) {

        return this
            .getEdges()
            .find(

                edge =>

                    edge.edgeId === edgeId

            );

    }

    //--------------------------------------------------
    // Graph Statistics
    //--------------------------------------------------

    getStatistics() {

        return {

            totalNodes:

                this.getNodes().length,

            totalEdges:

                this.getEdges().length

        };

    }

}