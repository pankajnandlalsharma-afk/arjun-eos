/**
 * ============================================================
 * ARJUN EOS
 * Agent Collaboration Repository
 *
 * Contract : COLLAB-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Agent Collaboration.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.agent.collaboration";

export default class AgentCollaborationRepository {

    //--------------------------------------------------
    // Load Collaboration
    //--------------------------------------------------

    load() {

        const data =

            localStorage.getItem(

                STORAGE_KEY

            );

        return data

            ? JSON.parse(data)

            : {

                agents: [],

                messages: [],

                tasks: []

            };

    }

    //--------------------------------------------------
    // Save Collaboration
    //--------------------------------------------------

    save(collaboration) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(

                collaboration

            )

        );

        return collaboration;

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

        const data =

            this.load();

        return {

            totalAgents:

                data.agents.length,

            totalMessages:

                data.messages.length,

            totalTasks:

                data.tasks.length,

            pendingTasks:

                data.tasks.filter(

                    task =>

                        task.status ===

                        "PENDING"

                ).length,

            completedTasks:

                data.tasks.filter(

                    task =>

                        task.status ===

                        "COMPLETED"

                ).length

        };

    }

}