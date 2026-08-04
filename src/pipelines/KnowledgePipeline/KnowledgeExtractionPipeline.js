/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Extraction Pipeline
 *
 * Contract : KNOWLEDGE-PIPELINE-001
 * Layer    : Pipeline
 * Purpose  : Converts enterprise resources into
 *             Enterprise Knowledge Objects.
 * ============================================================
 */

import KnowledgeObject
    from "../../models/KnowledgeObject";

export default class KnowledgeExtractionPipeline {

    execute({

        resource,

        text

    }) {

        if (!resource) {

            throw new Error(

                "Enterprise Resource is required."

            );

        }

        const content =

            text || "";

        const knowledge =

            new KnowledgeObject({

                resourceId:
                    resource.resourceId,

                title:

                    resource.resourceName ||

                    "Untitled Resource",

                summary:

                    this.generateSummary(

                        content

                    ),

                text:

                    content,

                category:

                    resource.category ||

                    "GENERAL",

                keywords:

                    this.extractKeywords(

                        content

                    ),

                entities:

                    this.extractEntities(

                        content

                    ),

                topics:

                    this.extractTopics(

                        content

                    ),

                sourceType:

                    resource.sourceType,

                sourceName:

                    resource.resourceName,

                confidence: 0.90

            });

        return knowledge;

    }

    //--------------------------------------------------
    // Summary
    //--------------------------------------------------

    generateSummary(text) {

        if (!text) {

            return "";

        }

        return text.substring(0, 300);

    }

    //--------------------------------------------------
    // Keywords
    //--------------------------------------------------

    extractKeywords(text) {

        if (!text) {

            return [];

        }

        return [

            ...new Set(

                text

                    .replace(/[^\w\s]/g, "")

                    .toLowerCase()

                    .split(/\s+/)

                    .filter(

                        word =>

                            word.length > 4

                    )

                    .slice(0, 20)

            )

        ];

    }

    //--------------------------------------------------
    // Topics
    //--------------------------------------------------

    extractTopics(text) {

        if (!text) {

            return [];

        }

        const topics = [];

        const lower =

            text.toLowerCase();

        if (

            lower.includes("court") ||

            lower.includes("constitution") ||

            lower.includes("bnss")

        ) {

            topics.push("Legal");

        }

        if (

            lower.includes("krishna") ||

            lower.includes("gita") ||

            lower.includes("veda")

        ) {

            topics.push("Spiritual");

        }

        if (

            lower.includes("hospital") ||

            lower.includes("medical")

        ) {

            topics.push("Medical");

        }

        if (

            topics.length === 0

        ) {

            topics.push("General");

        }

        return topics;

    }

    //--------------------------------------------------
    // Entities
    //--------------------------------------------------

    extractEntities(text) {

        if (!text) {

            return [];

        }

        return text

            .split(/\s+/)

            .filter(

                word =>

                    /^[A-Z][a-zA-Z]+$/

                    .test(word)

            )

            .slice(0, 20);

    }

}