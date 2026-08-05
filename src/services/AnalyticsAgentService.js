/**
 * ============================================================
 * ARJUN EOS
 * Analytics Agent Service
 *
 * Contract : ANALYTICS-AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Analytics Agent.
 * ============================================================
 */

import AnalyticsAgentEngine
    from "../engine/AnalyticsAgentEngine";

import AnalyticsAgentRepository
    from "../repositories/AnalyticsAgentRepository";

export default class AnalyticsAgentService {

    constructor() {

        this.engine =
            new AnalyticsAgentEngine();

        this.repository =
            new AnalyticsAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Execute Analytics Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        metrics = {},

        performance = {},

        workflow = {},

        trends = {},

        recommendations = []

    ) {

        let agent =

            this.repository.findById(

                agentId

            );

        if (!agent) {

            throw new Error(

                "Analytics Agent not found."

            );

        }

        this.engine.executeKPIMonitoring(

            agent,

            metrics

        );

        this.engine.executePerformanceAnalysis(

            agent,

            performance

        );

        this.engine.executeWorkflowAnalysis(

            agent,

            workflow

        );

        this.engine.executeTrendAnalysis(

            agent,

            trends

        );

        this.engine.executeRecommendations(

            agent,

            recommendations

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