/**
 * ============================================================
 * ARJUN EOS
 * Publishing Agent Engine
 *
 * Contract : PUBLISHING-AGENT-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Publishing operations.
 * ============================================================
 */

import EnterpriseAgentEngine
    from "./EnterpriseAgentEngine";

export default class PublishingAgentEngine
    extends EnterpriseAgentEngine {

    //--------------------------------------------------
    // Prepare Content
    //--------------------------------------------------

    executePreparation(agent, content) {

        this.start(agent);

        agent.prepareContent(content);

        agent.updateProgress(20);

        return content;

    }

    //--------------------------------------------------
    // Platform Selection
    //--------------------------------------------------

    executePlatformSelection(

        agent,

        platforms = []

    ) {

        agent.selectPlatforms(

            platforms

        );

        agent.updateProgress(40);

        return platforms;

    }

    //--------------------------------------------------
    // Schedule Publishing
    //--------------------------------------------------

    executeScheduling(

        agent,

        schedule

    ) {

        agent.schedulePublishing(

            schedule

        );

        agent.updateProgress(60);

        return schedule;

    }

    //--------------------------------------------------
    // Publish Content
    //--------------------------------------------------

    executePublishing(

        agent,

        publishResult = {}

    ) {

        agent.publish(

            publishResult

        );

        agent.updateProgress(80);

        return publishResult;

    }

    //--------------------------------------------------
    // Monitor Publishing
    //--------------------------------------------------

    executeMonitoring(

        agent,

        status = "PUBLISHED"

    ) {

        agent.monitorPublishing(

            status

        );

        agent.updateProgress(95);

        return status;

    }

    //--------------------------------------------------
    // Finish
    //--------------------------------------------------

    finish(agent) {

        this.complete(agent);

        return agent;

    }

}