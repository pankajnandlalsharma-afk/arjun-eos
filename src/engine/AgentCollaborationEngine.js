/**
 * ============================================================
 * ARJUN EOS
 * Agent Collaboration Engine
 *
 * Contract : COLLAB-003
 * Layer    : Engine
 * Purpose  : Executes Enterprise Agent Collaboration.
 * ============================================================
 */

export default class AgentCollaborationEngine {

    //--------------------------------------------------
    // Register Agent
    //--------------------------------------------------

    registerAgent(

        collaboration,

        agent

    ) {

        collaboration.register(

            agent

        );

        return collaboration;

    }

    //--------------------------------------------------
    // Send Message
    //--------------------------------------------------

    sendMessage(

        collaboration,

        from,

        to,

        message

    ) {

        collaboration.sendMessage(

            from,

            to,

            message

        );

        return collaboration;

    }

    //--------------------------------------------------
    // Delegate Task
    //--------------------------------------------------

    delegateTask(

        collaboration,

        from,

        to,

        task

    ) {

        collaboration.delegateTask(

            from,

            to,

            task

        );

        return collaboration;

    }

    //--------------------------------------------------
    // Complete Task
    //--------------------------------------------------

    completeTask(

        collaboration,

        taskId

    ) {

        const task =

            collaboration.tasks.find(

                item =>

                    item.id ===

                    taskId

            );

        if (task) {

            task.status =

                "COMPLETED";

            task.completed =

                new Date();

        }

        return collaboration;

    }

    //--------------------------------------------------
    // Collaboration Statistics
    //--------------------------------------------------

    getStatistics(

        collaboration

    ) {

        return {

            agents:

                collaboration.getAgents().length,

            messages:

                collaboration.messages.length,

            tasks:

                collaboration.tasks.length,

            pendingTasks:

                collaboration.tasks.filter(

                    task =>

                        task.status ===

                        "PENDING"

                ).length,

            completedTasks:

                collaboration.tasks.filter(

                    task =>

                        task.status ===

                        "COMPLETED"

                ).length

        };

    }

}