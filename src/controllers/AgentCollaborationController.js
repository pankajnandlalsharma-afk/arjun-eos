/**
 * ============================================================
 * ARJUN EOS
 * Agent Collaboration Controller
 *
 * Contract : COLLAB-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Agent Collaboration.
 * ============================================================
 */

import AgentCollaborationService
    from "../services/AgentCollaborationService";

export default class AgentCollaborationController {

    constructor() {

        this.service =
            new AgentCollaborationService();

    }

    //--------------------------------------------------
    // Register Agent
    //--------------------------------------------------

    registerAgent(agent) {

        return this.service.registerAgent(

            agent

        );

    }

    //--------------------------------------------------
    // Send Message
    //--------------------------------------------------

    sendMessage(

        from,

        to,

        message

    ) {

        return this.service.sendMessage(

            from,

            to,

            message

        );

    }

    //--------------------------------------------------
    // Delegate Task
    //--------------------------------------------------

    delegateTask(

        from,

        to,

        task

    ) {

        return this.service.delegateTask(

            from,

            to,

            task

        );

    }

    //--------------------------------------------------
    // Complete Task
    //--------------------------------------------------

    completeTask(taskId) {

        return this.service.completeTask(

            taskId

        );

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgents() {

        return this.service.getAgents();

    }

    getMessages(agentId) {

        return this.service.getMessages(

            agentId

        );

    }

    getTasks(agentId) {

        return this.service.getTasks(

            agentId

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.service.getStatistics();

    }

}