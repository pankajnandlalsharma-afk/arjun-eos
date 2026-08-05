/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Agent
 *
 * Contract : KNOWLEDGE-AGENT-001
 * Layer    : Model
 * Purpose  : Enterprise Knowledge Intelligence Agent.
 * ============================================================
 */

import EnterpriseAgent
    from "./EnterpriseAgent";

export default class KnowledgeAgent
    extends EnterpriseAgent {

    constructor(data = {}) {

        super({

            ...data,

            agentType: "KNOWLEDGE",

            department: "Knowledge Acquisition"

        });

        //--------------------------------------------------
        // Knowledge Capabilities
        //--------------------------------------------------

        this.addCapability(

            "KNOWLEDGE_IMPORT"

        );

        this.addCapability(

            "KNOWLEDGE_VALIDATION"

        );

        this.addCapability(

            "KNOWLEDGE_EXTRACTION"

        );

        this.addCapability(

            "KNOWLEDGE_CLASSIFICATION"

        );

        this.addCapability(

            "KNOWLEDGE_GRAPH"

        );

    }

    //--------------------------------------------------
    // Import
    //--------------------------------------------------

    importKnowledge(resource) {

        this.updateTask(

            "IMPORTING_KNOWLEDGE"

        );

        this.remember(

            "lastImportedResource",

            resource

        );

    }

    //--------------------------------------------------
    // Validate
    //--------------------------------------------------

    validateKnowledge(resource) {

        this.updateTask(

            "VALIDATING_KNOWLEDGE"

        );

        return Boolean(resource);

    }

    //--------------------------------------------------
    // Extract
    //--------------------------------------------------

    extractKnowledge(resource) {

        this.updateTask(

            "EXTRACTING_KNOWLEDGE"

        );

        return resource;

    }

    //--------------------------------------------------
    // Classify
    //--------------------------------------------------

    classifyKnowledge(category) {

        this.updateTask(

            "CLASSIFYING_KNOWLEDGE"

        );

        this.remember(

            "lastCategory",

            category

        );

    }

    //--------------------------------------------------
    // Build Graph
    //--------------------------------------------------

    buildKnowledgeGraph() {

        this.updateTask(

            "BUILDING_KNOWLEDGE_GRAPH"

        );

    }

}