/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Agent Engine
 *
 * Contract : KNOWLEDGE-AGENT-003
 * Layer    : Engine
 * Purpose  : Executes Knowledge Agent operations.
 * ============================================================
 */

import EnterpriseAgentEngine
    from "./EnterpriseAgentEngine";

export default class KnowledgeAgentEngine
    extends EnterpriseAgentEngine {

    //--------------------------------------------------
    // Execute Import
    //--------------------------------------------------

    executeImport(agent, resource) {

        this.start(agent);

        agent.importKnowledge(resource);

        agent.updateProgress(20);

        return agent;

    }

    //--------------------------------------------------
    // Execute Validation
    //--------------------------------------------------

    executeValidation(agent, resource) {

        const valid =

            agent.validateKnowledge(resource);

        agent.updateProgress(40);

        return valid;

    }

    //--------------------------------------------------
    // Execute Extraction
    //--------------------------------------------------

    executeExtraction(agent, resource) {

        const knowledge =

            agent.extractKnowledge(resource);

        agent.updateProgress(60);

        return knowledge;

    }

    //--------------------------------------------------
    // Execute Classification
    //--------------------------------------------------

    executeClassification(agent, category) {

        agent.classifyKnowledge(category);

        agent.updateProgress(80);

        return agent;

    }

    //--------------------------------------------------
    // Execute Knowledge Graph
    //--------------------------------------------------

    executeKnowledgeGraph(agent) {

        agent.buildKnowledgeGraph();

        agent.updateProgress(90);

        return agent;

    }

    //--------------------------------------------------
    // Finish
    //--------------------------------------------------

    finish(agent) {

        this.complete(agent);

        return agent;

    }

}