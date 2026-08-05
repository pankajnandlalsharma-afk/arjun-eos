/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Agent Engine
 *
 * Contract : AGENT-102
 * Layer    : Engine
 * Purpose  : Executes Enterprise Agent lifecycle.
 * ============================================================
 */

export default class EnterpriseAgentEngine {

    //--------------------------------------------------
    // Register
    //--------------------------------------------------

    register(agent) {

        agent.updateStatus(

            "REGISTERED"

        );

        agent.updateProgress(

            0

        );

        return agent;

    }

    //--------------------------------------------------
    // Initialize
    //--------------------------------------------------

    initialize(agent) {

        agent.updateStatus(

            "INITIALIZED"

        );

        agent.updateTask(

            "INITIALIZING"

        );

        agent.updateProgress(

            5

        );

        return agent;

    }

    //--------------------------------------------------
    // Start
    //--------------------------------------------------

    start(agent) {

        agent.updateStatus(

            "RUNNING"

        );

        agent.updateTask(

            "EXECUTING"

        );

        agent.updateProgress(

            10

        );

        return agent;

    }

    //--------------------------------------------------
    // Update Progress
    //--------------------------------------------------

    updateProgress(

        agent,

        task,

        progress

    ) {

        agent.updateTask(

            task

        );

        agent.updateProgress(

            progress

        );

        return agent;

    }

    //--------------------------------------------------
    // Pause
    //--------------------------------------------------

    pause(agent) {

        agent.updateStatus(

            "PAUSED"

        );

        return agent;

    }

    //--------------------------------------------------
    // Resume
    //--------------------------------------------------

    resume(agent) {

        agent.updateStatus(

            "RUNNING"

        );

        return agent;

    }

    //--------------------------------------------------
    // Complete
    //--------------------------------------------------

    complete(agent) {

        agent.completeTask();

        return agent;

    }

    //--------------------------------------------------
    // Fail
    //--------------------------------------------------

    fail(

        agent,

        reason

    ) {

        agent.failTask();

        agent.remember(

            "failureReason",

            reason

        );

        return agent;

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics(agent) {

        return {

            agentId:

                agent.agentId,

            name:

                agent.agentName,

            status:

                agent.status,

            progress:

                agent.progress,

            completed:

                agent.tasksCompleted,

            failed:

                agent.tasksFailed,

            successRate:

                agent.successRate

        };

    }

}