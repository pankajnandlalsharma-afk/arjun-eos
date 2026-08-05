/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Quiz Integration Engine
 *
 * Contract : KQI-001
 * Layer    : Engine
 * Purpose  : Integrates Enterprise Knowledge with the
 *            Quiz Intelligence Platform.
 * ============================================================
 */

export default class KnowledgeQuizIntegrationEngine {

    //--------------------------------------------------
    // Transform Knowledge
    //--------------------------------------------------

    transform(knowledgeObject) {

        return {

            knowledgeId:

                knowledgeObject.knowledgeId,

            title:

                knowledgeObject.title,

            category:

                knowledgeObject.category,

            content:

                knowledgeObject.content,

            keywords:

                knowledgeObject.keywords || [],

            difficulty:

                knowledgeObject.difficulty ||

                "MEDIUM",

            confidence:

                knowledgeObject.confidence ||

                100,

            source:

                knowledgeObject.source ||

                "KNOWLEDGE_REPOSITORY",

            readyForQuiz:

                true

        };

    }

    //--------------------------------------------------
    // Validate
    //--------------------------------------------------

    validate(knowledgeObject) {

        return (

            knowledgeObject &&

            knowledgeObject.title &&

            knowledgeObject.content

        );

    }

    //--------------------------------------------------
    // Integration Status
    //--------------------------------------------------

    getIntegrationStatus() {

        return {

            status:

                "READY",

            source:

                "Knowledge Repository",

            destination:

                "Quiz Intelligence Platform"

        };

    }

}