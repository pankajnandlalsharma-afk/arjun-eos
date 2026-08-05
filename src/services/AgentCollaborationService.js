/**
 * ============================================================
 * ARJUN EOS
 * Agent Collaboration Service
 *
 * Contract : COLLAB-004
 * Layer    : Service
 * Purpose  : Coordinates Enterprise Agent Collaboration.
 * ============================================================
 */

import AgentCollaborationEngine
    from "../engine/AgentCollaborationEngine";

import AgentCollaborationRepository
    from "../repositories/AgentCollaborationRepository";

import AgentCollaboration
    from "../models/AgentCollaboration";

export default class AgentCollaborationService {

    constructor() {

        this.engine =
            new AgentCollaborationEngine();

        this.repository =
            new AgentCollaborationRepository();

        this.collaboration =
            new AgentCollaboration();

    }

    //--------------------------------------------------
    // Register Agent
    //--------------------------------------------------

    registerAgent(agent) {

        this.engine.registerAgent(

            this.collaboration,

            agent

        );

        this.repository.save({

            agents:

                this.collaboration.getAgents(),

            messages:

                this.collaboration.messages,

            tasks:

                this.collaboration.tasks

        });

        return agent;

    }

    //--------------------------------------------------
    // Send Message
    //--------------------------------------------------

    sendMessage(

        from,

        to,

        message

    ) {

        this.engine.sendMessage(

            this.collaboration,

            from,

            to,

            message

        );

        this.repository.save({

            agents:

                this.collaboration.getAgents(),

            messages:

                this.collaboration.messages,

            tasks:

                this.collaboration.tasks

        });

    }

    //--------------------------------------------------
    // Delegate Task
    //--------------------------------------------------

    delegateTask(

        from,

        to,

        task

    ) {

        this.engine.delegateTask(

            this.collaboration,

            from,

            to,

            task

        );

        this.repository.save({

            agents:

                this.collaboration.getAgents(),

            messages:

                this.collaboration.messages,

            tasks:

                this.collaboration.tasks

        });

    }

    //--------------------------------------------------
    // Complete Task
    //--------------------------------------------------

    completeTask(taskId) {

        this.engine.completeTask(

            this.collaboration,

            taskId

        );

        this.repository.save({

            agents:

                this.collaboration.getAgents(),

            messages:

                this.collaboration.messages,

            tasks:

                this.collaboration.tasks

        });

    }

    //--------------------------------------------------
    // Queries
    //--------------------------------------------------

    getAgents() {

        return this.collaboration.getAgents();

    }

    getMessages(agentId) {

        return this.collaboration.getMessages(

            agentId

        );

    }

    getTasks(agentId) {

        return this.collaboration.getTasks(

            agentId

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        return this.engine.getStatistics(

            this.collaboration

        );

    }

}