/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Semantic Search Engine
 *
 * Contract : KNOWLEDGE-SEARCH-001
 * Layer    : Engine
 * Purpose  : Performs semantic search across
 *             Enterprise Knowledge Objects.
 * ============================================================
 */

export default class SemanticSearchEngine {

    search(knowledgeObjects, query) {

        if (!query) {

            return knowledgeObjects;

        }

        const keyword =
            query.toLowerCase().trim();

        return knowledgeObjects

            .map(item => ({

                knowledge: item,

                score: this.calculateScore(

                    item,

                    keyword

                )

            }))

            .filter(result =>

                result.score > 0

            )

            .sort(

                (a, b) =>

                    b.score - a.score

            );

    }

    //--------------------------------------------------
    // Relevance Score
    //--------------------------------------------------

    calculateScore(

        knowledge,

        keyword

    ) {

        let score = 0;

        //------------------------------------------
        // Title
        //------------------------------------------

        if (

            (knowledge.title || "")

                .toLowerCase()

                .includes(keyword)

        ) {

            score += 50;

        }

        //------------------------------------------
        // Summary
        //------------------------------------------

        if (

            (knowledge.summary || "")

                .toLowerCase()

                .includes(keyword)

        ) {

            score += 25;

        }

        //------------------------------------------
        // Category
        //------------------------------------------

        if (

            (knowledge.category || "")

                .toLowerCase()

                .includes(keyword)

        ) {

            score += 20;

        }

        //------------------------------------------
        // Topics
        //------------------------------------------

        if (

            (knowledge.topics || [])

                .some(

                    topic =>

                        topic

                            .toLowerCase()

                            .includes(keyword)

                )

        ) {

            score += 15;

        }

        //------------------------------------------
        // Keywords
        //------------------------------------------

        if (

            (knowledge.keywords || [])

                .some(

                    item =>

                        item

                            .toLowerCase()

                            .includes(keyword)

                )

        ) {

            score += 10;

        }

        //------------------------------------------
        // Entities
        //------------------------------------------

        if (

            (knowledge.entities || [])

                .some(

                    entity =>

                        entity

                            .toLowerCase()

                            .includes(keyword)

                )

        ) {

            score += 10;

        }

        return score;

    }

}