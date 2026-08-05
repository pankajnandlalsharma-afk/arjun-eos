/**
 * ============================================================
 * ARJUN EOS
 * Legal Agent Repository
 *
 * Contract : LEGAL-AGENT-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Legal Agents.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.legal.agents";

export default class LegalAgentRepository {

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

            agents[index] =

                agent;

        }

        else {

            agents.push(

                agent

            );

        }

        this.saveAll(

            agents

        );

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
    // Active Agents
    //--------------------------------------------------

    getActiveAgents() {

        return this

            .getAll()

            .filter(

                agent =>

                    agent.status ===

                    "RUNNING"

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

        this.saveAll(

            agents

        );

    }

    //--------------------------------------------------
    // Clear
    //--------------------------------------------------

    clear() {

        localStorage.removeItem(

            STORAGE_KEY

        );

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

            activeAgents:

                agents.filter(

                    agent =>

                        agent.status ===

                        "RUNNING"

                ).length,

            completedAgents:

                agents.filter(

                    agent =>

                        agent.status ===

                        "COMPLETED"

                ).length,

            failedAgents:

                agents.filter(

                    agent =>

                        agent.status ===

                        "FAILED"

                ).length

        };

    }

}