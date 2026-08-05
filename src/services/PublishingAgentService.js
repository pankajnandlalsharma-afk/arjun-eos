/**
 * ============================================================
 * ARJUN EOS
 * Publishing Agent Service
 *
 * Contract : PUBLISHING-AGENT-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Publishing Agent.
 * ============================================================
 */

import PublishingAgentEngine
    from "../engine/PublishingAgentEngine";

import PublishingAgentRepository
    from "../repositories/PublishingAgentRepository";

export default class PublishingAgentService {

    constructor() {

        this.engine =
            new PublishingAgentEngine();

        this.repository =
            new PublishingAgentRepository();

    }

    //--------------------------------------------------
    // Registration
    //--------------------------------------------------

    registerAgent(agent) {

        this.repository.save(agent);

        return agent;

    }

    //--------------------------------------------------
    // Execute Publishing Pipeline
    //--------------------------------------------------

    execute(

        agentId,

        content,

        platforms = [],

        schedule = null,

        publishResult = {},

        status = "PUBLISHED"

    ) {

        let agent =

            this.repository.findById(

                agentId

            );

        if (!agent) {

            throw new Error(

                "Publishing Agent not found."

            );

        }

        this.engine.executePreparation(

            agent,

            content

        );

        this.engine.executePlatformSelection(

            agent,

            platforms

        );

        this.engine.executeScheduling(

            agent,

            schedule

        );

        this.engine.executePublishing(

            agent,

            publishResult

        );

        this.engine.executeMonitoring(

            agent,

            status

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