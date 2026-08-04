/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Knowledge Object
 *
 * Contract : KNOWLEDGE-001
 * Layer    : Model
 * Purpose  : Standard Enterprise Knowledge Object.
 * ============================================================
 */

export default class KnowledgeObject {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.knowledgeId =
            data.knowledgeId ??
            crypto.randomUUID();

        this.resourceId =
            data.resourceId ?? "";

        //--------------------------------------------------
        // Basic Information
        //--------------------------------------------------

        this.title =
            data.title ?? "";

        this.summary =
            data.summary ?? "";

        this.subject =
            data.subject ?? "";

        this.category =
            data.category ?? "GENERAL";

        //--------------------------------------------------
        // Knowledge Content
        //--------------------------------------------------

        this.text =
            data.text ?? "";

        this.keywords =
            data.keywords ?? [];

        this.entities =
            data.entities ?? [];

        this.topics =
            data.topics ?? [];

        //--------------------------------------------------
        // Intelligence
        //--------------------------------------------------

        this.confidence =
            data.confidence ?? 0;

        this.language =
            data.language ?? "English";

        this.sentiment =
            data.sentiment ?? "Neutral";

        //--------------------------------------------------
        // Relationships
        //--------------------------------------------------

        this.parentKnowledgeId =
            data.parentKnowledgeId ?? null;

        this.relatedKnowledge =
            data.relatedKnowledge ?? [];

        //--------------------------------------------------
        // Source
        //--------------------------------------------------

        this.sourceType =
            data.sourceType ?? "";

        this.sourceName =
            data.sourceName ?? "";

        this.sourceReference =
            data.sourceReference ?? "";

        //--------------------------------------------------
        // Enterprise Metadata
        //--------------------------------------------------

        this.status =
            data.status ?? "ACTIVE";

        this.version =
            data.version ?? 1;

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ??
            new Date().toISOString();

    }

    //--------------------------------------------------
    // Update Summary
    //--------------------------------------------------

    updateSummary(summary) {

        this.summary = summary;

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
    // Update Keywords
    //--------------------------------------------------

    updateKeywords(keywords) {

        this.keywords = keywords;

        this.touch();

    }

    //--------------------------------------------------
    // Add Entity
    //--------------------------------------------------

    addEntity(entity) {

        this.entities.push(entity);

        this.touch();

    }

    //--------------------------------------------------
    // Add Topic
    //--------------------------------------------------

    addTopic(topic) {

        this.topics.push(topic);

        this.touch();

    }

    //--------------------------------------------------
    // Add Relationship
    //--------------------------------------------------

    addRelationship(knowledgeId) {

        if (

            !this.relatedKnowledge.includes(

                knowledgeId

            )

        ) {

            this.relatedKnowledge.push(

                knowledgeId

            );

        }

        this.touch();

    }

    //--------------------------------------------------
    // Update Confidence
    //--------------------------------------------------

    updateConfidence(score) {

        this.confidence = score;

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