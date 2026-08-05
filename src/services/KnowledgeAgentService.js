/**
 * ============================================================
 * ARJUN EOS
 * Knowledge Agent Service
 *
 * Contract : KNOWLEDGE-AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Knowledge Agent.
 * ============================================================
 */

import KnowledgeAgentEngine
    from "../engine/KnowledgeAgentEngine";

import KnowledgeAgentRepository
    from "../repositories/KnowledgeAgentRepository";

export default class KnowledgeAgentService {

    constructor() {

        this.engine =
            new KnowledgeAgentEngine();

        this.repository =
            new KnowledgeAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Execute Pipeline
    //--------------------------------------------------

    execute(agentId, resource, category) {

        let agent =

            this.repository.findById(agentId);

        if (!agent) {

            throw new Error(

                "Knowledge Agent not found."

            );

        }

        this.engine.executeImport(

            agent,

            resource

        );

        const valid =

            this.engine.executeValidation(

                agent,

                resource

            );

        if (!valid) {

            this.engine.fail(

                agent,

                "Knowledge validation failed."

            );

            this.repository.save(agent);

            return agent;

        }

        this.engine.executeExtraction(

            agent,

            resource

        );

        this.engine.executeClassification(

            agent,

            category

        );

        this.engine.executeKnowledgeGraph(

            agent

        );

        this.engine.finish(

            agent

        );

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgent(agentId) {

        return this.repository.findById(

            agentId

        );

    }

    getAllAgents() {

        return this.repository.getAll();

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.repository.getStatistics();

    }

}