/**
 * ============================================================
 * ARJUN EOS
 * Research Agent Service
 *
 * Contract : RESEARCH-AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Research Agent.
 * ============================================================
 */

import ResearchAgentEngine
    from "../engine/ResearchAgentEngine";

import ResearchAgentRepository
    from "../repositories/ResearchAgentRepository";

export default class ResearchAgentService {

    constructor() {

        this.engine =
            new ResearchAgentEngine();

        this.repository =
            new ResearchAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Execute Research Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        topic,

        sources = [],

        evidence = [],

        keywords = [],

        summary = ""

    ) {

        let agent =

            this.repository.findById(

                agentId

            );

        if (!agent) {

            throw new Error(

                "Research Agent not found."

            );

        }

        this.engine.executeResearch(

            agent,

            topic

        );

        this.engine.executeSourceDiscovery(

            agent,

            sources

        );

        this.engine.executeEvidenceCollection(

            agent,

            evidence

        );

        this.engine.executeKeywordDiscovery(

            agent,

            keywords

        );

        this.engine.executeSummary(

            agent,

            summary

        );

        this.engine.finish(

            agent

        );

        this.repository.save(

            agent

        );

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