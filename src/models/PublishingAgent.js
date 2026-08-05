/**
 * ============================================================
 * ARJUN EOS
 * Publishing Agent
 *
 * Contract : PUBLISHING-AGENT-001
 * Layer    : Model
 * Purpose  : Enterprise Publishing Intelligence Agent.
 * ============================================================
 */

import EnterpriseAgent
    from "./EnterpriseAgent";

export default class PublishingAgent
    extends EnterpriseAgent {

    constructor(data = {}) {

        super({

            ...data,

            agentType: "PUBLISHING",

            department: "Publishing"

        });

        //--------------------------------------------------
        // Publishing Capabilities
        //--------------------------------------------------

        this.addCapability(

            "CONTENT_PACKAGING"

        );

        this.addCapability(

            "PLATFORM_SELECTION"

        );

        this.addCapability(

            "MULTI_PLATFORM_PUBLISHING"

        );

        this.addCapability(

            "PUBLISHING_SCHEDULING"

        );

        this.addCapability(

            "PUBLISHING_MONITORING"

        );

        this.addCapability(

            "RETRY_FAILED_PUBLISHING"

        );

        this.addCapability(

            "PUBLISHING_ANALYTICS"

        );

    }

    //--------------------------------------------------
    // Prepare Content
    //--------------------------------------------------

    prepareContent(content) {

        this.updateTask(

            "PREPARING_CONTENT"

        );

        this.remember(

            "content",

            content

        );

        return content;

    }

    //--------------------------------------------------
    // Select Platforms
    //--------------------------------------------------

    selectPlatforms(platforms = []) {

        this.updateTask(

            "SELECTING_PLATFORMS"

        );

        this.remember(

            "platforms",

            platforms

        );

        return platforms;

    }

    //--------------------------------------------------
    // Schedule Publishing
    //--------------------------------------------------

    schedulePublishing(schedule) {

        this.updateTask(

            "SCHEDULING_PUBLISH"

        );

        this.remember(

            "schedule",

            schedule

        );

        return schedule;

    }

    //--------------------------------------------------
    // Publish
    //--------------------------------------------------

    publish(result = {}) {

        this.updateTask(

            "PUBLISHING"

        );

        this.remember(

            "publishResult",

            result

        );

        return result;

    }

    //--------------------------------------------------
    // Monitor Publishing
    //--------------------------------------------------

    monitorPublishing(status = "PENDING") {

        this.updateTask(

            "MONITORING_PUBLISH"

        );

        this.remember(

            "status",

            status

        );

        return status;

    }

}