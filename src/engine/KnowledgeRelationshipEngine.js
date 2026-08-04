/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Relationship Engine
 *
 * Contract : KNOWLEDGE-GRAPH-006
 * Layer    : Engine
 * Purpose  : Detects relationships between
 *             Enterprise Knowledge Objects.
 * ============================================================
 */

export default class KnowledgeRelationshipEngine {

    //--------------------------------------------------
    // Detect Relationship
    //--------------------------------------------------

    detectRelationship(source, target) {

        let score = 0;

        //--------------------------------------------------
        // Category Match
        //--------------------------------------------------

        if (

            source.category === target.category

        ) {

            score += 40;

        }

        //--------------------------------------------------
        // Topic Match
        //--------------------------------------------------

        const topicMatches =

            (source.topics || []).filter(

                topic =>

                    (target.topics || [])

                        .includes(topic)

            );

        score += topicMatches.length * 15;

        //--------------------------------------------------
        // Keyword Match
        //--------------------------------------------------

        const keywordMatches =

            (source.keywords || []).filter(

                keyword =>

                    (target.keywords || [])

                        .includes(keyword)

            );

        score += keywordMatches.length * 2;

        //--------------------------------------------------
        // Entity Match
        //--------------------------------------------------

        const entityMatches =

            (source.entities || []).filter(

                entity =>

                    (target.entities || [])

                        .includes(entity)

            );

        score += entityMatches.length * 5;

        //--------------------------------------------------
        // Determine Relationship
        //--------------------------------------------------

        let relationship =

            "UNRELATED";

        if (score >= 60) {

            relationship =

                "STRONGLY_RELATED";

        }

        else if (score >= 30) {

            relationship =

                "RELATED";

        }

        else if (score >= 10) {

            relationship =

                "WEAKLY_RELATED";

        }

        return {

            relationship,

            score,

            topicMatches,

            keywordMatches,

            entityMatches

        };

    }

}