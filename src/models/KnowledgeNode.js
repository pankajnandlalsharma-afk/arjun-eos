/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Knowledge Node
 *
 * Contract : KNOWLEDGE-GRAPH-001
 * Layer    : Model
 * Purpose  : Represents a node inside the Enterprise
 *            Knowledge Graph.
 * ============================================================
 */

export default class KnowledgeNode {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.nodeId =
            data.nodeId ??
            crypto.randomUUID();

        this.knowledgeId =
            data.knowledgeId ?? "";

        //--------------------------------------------------
        // Display
        //--------------------------------------------------

        this.title =
            data.title ?? "";

        this.category =
            data.category ?? "GENERAL";

        this.type =
            data.type ?? "KNOWLEDGE";

        //--------------------------------------------------
        // Graph
        //--------------------------------------------------

        this.edges =
            data.edges ?? [];

        //--------------------------------------------------
        // Metadata
        //--------------------------------------------------

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ??
            new Date().toISOString();

    }

    //--------------------------------------------------
    // Add Edge
    //--------------------------------------------------

    addEdge(edgeId) {

        if (!this.edges.includes(edgeId)) {

            this.edges.push(edgeId);

            this.touch();

        }

    }

    //--------------------------------------------------
    // Remove Edge
    //--------------------------------------------------

    removeEdge(edgeId) {

        this.edges = this.edges.filter(

            id => id !== edgeId

        );

        this.touch();

    }

    //--------------------------------------------------
    // Update Category
    //--------------------------------------------------

    updateCategory(category) {

        this.category = category;

        this.touch();

    }

    //--------------------------------------------------
    // Touch
    //--------------------------------------------------

    touch() {

        this.updatedAt =

            new Date().toISOString();

    }

}