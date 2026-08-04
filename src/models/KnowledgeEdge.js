/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Knowledge Edge
 *
 * Contract : KNOWLEDGE-GRAPH-002
 * Layer    : Model
 * Purpose  : Represents a relationship between two
 *            Knowledge Nodes.
 * ============================================================
 */

export default class KnowledgeEdge {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.edgeId =
            data.edgeId ??
            crypto.randomUUID();

        //--------------------------------------------------
        // Relationship
        //--------------------------------------------------

        this.sourceNodeId =
            data.sourceNodeId ?? "";

        this.targetNodeId =
            data.targetNodeId ?? "";

        this.relationship =
            data.relationship ?? "RELATED_TO";

        //--------------------------------------------------
        // Intelligence
        //--------------------------------------------------

        this.weight =
            data.weight ?? 1.0;

        this.confidence =
            data.confidence ?? 1.0;

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
    // Update Relationship
    //--------------------------------------------------

    updateRelationship(relationship) {

        this.relationship = relationship;

        this.touch();

    }

    //--------------------------------------------------
    // Update Weight
    //--------------------------------------------------

    updateWeight(weight) {

        this.weight = weight;

        this.touch();

    }

    //--------------------------------------------------
    // Update Confidence
    //--------------------------------------------------

    updateConfidence(confidence) {

        this.confidence = confidence;

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