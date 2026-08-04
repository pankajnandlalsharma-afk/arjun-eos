/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Relationship Service
 *
 * Contract : KNOWLEDGE-GRAPH-007
 * Layer    : Service
 * Purpose  : Creates relationships between
 *            Enterprise Knowledge Objects.
 * ============================================================
 */

import KnowledgeRelationshipEngine
    from "../engine/KnowledgeRelationshipEngine";

import KnowledgeGraphRepository
    from "../repositories/KnowledgeGraphRepository";

import KnowledgeEdge
    from "../models/KnowledgeEdge";

export default class KnowledgeRelationshipService {

    constructor() {

        this.engine =
            new KnowledgeRelationshipEngine();

        this.repository =
            new KnowledgeGraphRepository();

    }

    //--------------------------------------------------
    // Build Relationship
    //--------------------------------------------------

    createRelationship(sourceNode, targetNode) {

        const result =

            this.engine.detectRelationship(

                sourceNode,

                targetNode

            );

        if (

            result.relationship ===

            "UNRELATED"

        ) {

            return null;

        }

        const edge =

            new KnowledgeEdge({

                sourceNodeId:

                    sourceNode.nodeId,

                targetNodeId:

                    targetNode.nodeId,

                relationship:

                    result.relationship,

                confidence:

                    result.score / 100,

                weight:

                    result.score

            });

        this.repository.saveEdge(edge);

        sourceNode.addEdge(

            edge.edgeId

        );

        targetNode.addEdge(

            edge.edgeId

        );

        this.repository.saveNode(

            sourceNode

        );

        this.repository.saveNode(

            targetNode

        );

        return edge;

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.repository.getStatistics();

    }

}