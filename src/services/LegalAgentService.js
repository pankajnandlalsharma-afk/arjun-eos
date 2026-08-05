/**
 * ============================================================
 * ARJUN EOS
 * Legal Agent Service
 *
 * Contract : LEGAL-AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Legal Agent.
 * ============================================================
 */

import LegalAgentEngine
    from "../engine/LegalAgentEngine";

import LegalAgentRepository
    from "../repositories/LegalAgentRepository";

export default class LegalAgentService {

    constructor() {

        this.engine =
            new LegalAgentEngine();

        this.repository =
            new LegalAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Execute Legal Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        query,

        caseData,

        statute,

        judgment,

        precedents = [],

        draft = ""

    ) {

        let agent =

            this.repository.findById(

                agentId

            );

        if (!agent) {

            throw new Error(

                "Legal Agent not found."

            );

        }

        this.engine.executeLegalResearch(

            agent,

            query

        );

        this.engine.executeCaseAnalysis(

            agent,

            caseData

        );

        this.engine.executeStatuteAnalysis(

            agent,

            statute

        );

        this.engine.executeJudgmentAnalysis(

            agent,

            judgment

        );

        this.engine.executePrecedentDiscovery(

            agent,

            precedents

        );

        this.engine.executeDraftGeneration(

            agent,

            draft

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