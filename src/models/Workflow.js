/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Workflow
 *
 * Contract : WORKFLOW-001
 * Layer    : Model
 * Purpose  : Standard Enterprise Workflow Model.
 * ============================================================
 */

export default class Workflow {

    constructor(data = {}) {

        //--------------------------------------------------
        // Identity
        //--------------------------------------------------

        this.workflowId =
            data.workflowId ??
            crypto.randomUUID();

        this.workflowName =
            data.workflowName ?? "";

        this.workflowType =
            data.workflowType ?? "GENERAL";

        //--------------------------------------------------
        // Ownership
        //--------------------------------------------------

        this.department =
            data.department ?? "";

        this.owner =
            data.owner ?? "SYSTEM";

        //--------------------------------------------------
        // Execution
        //--------------------------------------------------

        this.status =
            data.status ?? "CREATED";

        this.currentStep =
            data.currentStep ?? "";

        this.progress =
            data.progress ?? 0;

        //--------------------------------------------------
        // Context
        //--------------------------------------------------

        this.input =
            data.input ?? {};

        this.output =
            data.output ?? {};

        this.metadata =
            data.metadata ?? {};

        //--------------------------------------------------
        // Audit
        //--------------------------------------------------

        this.createdAt =
            data.createdAt ??
            new Date().toISOString();

        this.updatedAt =
            data.updatedAt ??
            new Date().toISOString();

        this.completedAt =
            data.completedAt ?? null;

    }

    //--------------------------------------------------
    // Status
    //--------------------------------------------------

    updateStatus(status) {

        this.status = status;

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
    // Current Step
    //--------------------------------------------------

    updateCurrentStep(step) {

        this.currentStep = step;

        this.touch();

    }

    //--------------------------------------------------
    // Output
    //--------------------------------------------------

    setOutput(output) {

        this.output = output;

        this.touch();

    }

    //--------------------------------------------------
    // Complete
    //--------------------------------------------------

    complete() {

        this.status = "COMPLETED";

        this.progress = 100;

        this.completedAt =
            new Date().toISOString();

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