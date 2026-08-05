/**
 * ============================================================
 * ARJUN EOS
 * Enterprise AI Agent Repository
 *
 * Contract : AGENT-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise AI Agents.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.ai.agents";

export default class AIAgentRepository {

    //--------------------------------------------------
    // Read All
    //--------------------------------------------------

    getAll() {

        const data =
            localStorage.getItem(
                STORAGE_KEY
            );

        return data
            ? JSON.parse(data)
            : [];

    }

    //--------------------------------------------------
    // Save All
    //--------------------------------------------------

    saveAll(agents) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(agents)

        );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    save(agent) {

        const agents =
            this.getAll();

        const index =
            agents.findIndex(

                item =>

                    item.agentId ===

                    agent.agentId

            );

        if (index >= 0) {

            agents[index] = agent;

        }

        else {

            agents.push(agent);

        }

        this.saveAll(agents);

        return agent;

    }

    //--------------------------------------------------
    // Find By ID
    //--------------------------------------------------

    findById(agentId) {

        return this
            .getAll()
            .find(

                agent =>

                    agent.agentId ===

                    agentId

            );

    }

    //--------------------------------------------------
    // Find By Type
    //--------------------------------------------------

    findByType(agentType) {

        return this
            .getAll()
            .filter(

                agent =>

                    agent.agentType ===

                    agentType

            );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(agentId) {

        const agents =
            this.getAll().filter(

                agent =>

                    agent.agentId !==

                    agentId

            );

        this.saveAll(agents);

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const agents =
            this.getAll();

        return {

            totalAgents:
                agents.length,

            running:
                agents.filter(

                    agent =>

                        agent.status ===
                        "RUNNING"

                ).length,

            completed:
                agents.filter(

                    agent =>

                        agent.status ===
                        "COMPLETED"

                ).length,

            registered:
                agents.filter(

                    agent =>

                        agent.status ===
                        "REGISTERED"

                ).length

        };

    }

}