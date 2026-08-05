/**
 * ============================================================
 * ARJUN EOS
 * Agent Collaboration
 *
 * Contract : COLLAB-001
 * Layer    : Model
 * Purpose  : Enterprise Agent Collaboration Runtime.
 * ============================================================
 */

export default class AgentCollaboration {

    constructor() {

        this.agents = new Map();

        this.messages = [];

        this.tasks = [];

    }

    //--------------------------------------------------
    // Register Agent
    //--------------------------------------------------

    register(agent) {

        this.agents.set(

            agent.agentId,

            agent

        );

    }

    //--------------------------------------------------
    // Find Agent
    //--------------------------------------------------

    getAgent(agentId) {

        return this.agents.get(

            agentId

        );

    }

    //--------------------------------------------------
    // Get All Agents
    //--------------------------------------------------

    getAgents() {

        return Array.from(

            this.agents.values()

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

        this.messages.push({

            id:

                crypto.randomUUID(),

            from,

            to,

            message,

            timestamp:

                new Date()

        });

    }

    //--------------------------------------------------
    // Get Messages
    //--------------------------------------------------

    getMessages(agentId) {

        return this.messages.filter(

            item =>

                item.to === agentId

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

        this.tasks.push({

            id:

                crypto.randomUUID(),

            from,

            to,

            task,

            status:

                "PENDING",

            created:

                new Date()

        });

    }

    //--------------------------------------------------
    // Get Tasks
    //--------------------------------------------------

    getTasks(agentId) {

        return this.tasks.filter(

            task =>

                task.to === agentId

        );

    }

}