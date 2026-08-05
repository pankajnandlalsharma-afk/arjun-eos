/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Agent
 *
 * Contract : AGENT-100
 * Layer    : Model
 * Purpose  : Base Enterprise Agent Model inherited by
 *            all intelligent agents.
 * ============================================================
 */

export default class EnterpriseAgent {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.agentId =
            data.agentId ??
            crypto.randomUUID();

        this.agentName =
            data.agentName ?? "";

        this.agentType =
            data.agentType ?? "ENTERPRISE";

        this.version =
            data.version ?? "1.0";

        //--------------------------------------------------
        // Assignment
        //--------------------------------------------------

        this.department =
            data.department ?? "";

        this.owner =
            data.owner ?? "ARJUN EOS";

        //--------------------------------------------------
        // Runtime
        //--------------------------------------------------

        this.status =
            data.status ?? "REGISTERED";

        this.currentTask =
            data.currentTask ?? "";

        this.progress =
            data.progress ?? 0;

        //--------------------------------------------------
        // Intelligence
        //--------------------------------------------------

        this.capabilities =
            data.capabilities ?? [];

        this.memory =
            data.memory ?? {};

        this.configuration =
            data.configuration ?? {};

        //--------------------------------------------------
        // Performance
        //--------------------------------------------------

        this.tasksCompleted =
            data.tasksCompleted ?? 0;

        this.tasksFailed =
            data.tasksFailed ?? 0;

        this.successRate =
            data.successRate ?? 100;

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ??
            new Date().toISOString();

    }

    //--------------------------------------------------
    // Status
    //--------------------------------------------------

    updateStatus(status) {

        this.status = status;

        this.touch();

    }

    //--------------------------------------------------
    // Task
    //--------------------------------------------------

    updateTask(task) {

        this.currentTask = task;

        this.touch();

    }

    //--------------------------------------------------
    // Progress
    //--------------------------------------------------

    updateProgress(progress) {

        this.progress = progress;

        this.touch();

    }

    //--------------------------------------------------
    // Capability
    //--------------------------------------------------

    addCapability(capability) {

        if (

            !this.capabilities.includes(

                capability

            )

        ) {

            this.capabilities.push(

                capability

            );

        }

        this.touch();

    }

    //--------------------------------------------------
    // Memory
    //--------------------------------------------------

    remember(key, value) {

        this.memory[key] = value;

        this.touch();

    }

    recall(key) {

        return this.memory[key];

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    completeTask() {

        this.tasksCompleted++;

        this.progress = 100;

        this.status = "COMPLETED";

        this.touch();

    }

    failTask() {

        this.tasksFailed++;

        this.status = "FAILED";

        this.touch();

    }

    //--------------------------------------------------
    // Audit
    //--------------------------------------------------

    touch() {

        this.updatedAt =

            new Date().toISOString();

    }

}