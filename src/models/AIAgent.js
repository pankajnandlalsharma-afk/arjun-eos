/**
 * ============================================================
 * ARJUN EOS
 * Enterprise AI Agent
 *
 * Contract : AGENT-001
 * Layer    : Model
 * Purpose  : Standard Enterprise AI Agent Model.
 * ============================================================
 */

export default class AIAgent {

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
            data.agentType ?? "GENERAL";

        //--------------------------------------------------
        // Assignment
        //--------------------------------------------------

        this.department =
            data.department ?? "";

        this.workflowId =
            data.workflowId ?? null;

        //--------------------------------------------------
        // Execution
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
        // Statistics
        //--------------------------------------------------

        this.tasksCompleted =
            data.tasksCompleted ?? 0;

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
    // Complete Task
    //--------------------------------------------------

    completeTask() {

        this.tasksCompleted++;

        this.progress = 100;

        this.status = "COMPLETED";

        this.touch();

    }

    //--------------------------------------------------
    // Touch
    //--------------------------------------------------

    touch() {

        this.updatedAt =
            new Date().toISOString();

    }

}