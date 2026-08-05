/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Workflow Repository
 *
 * Contract : WORKFLOW-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Workflows.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.workflow.repository";

export default class WorkflowRepository {

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

    saveAll(workflows) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(workflows)

        );

    }

    //--------------------------------------------------
    // Save
    //--------------------------------------------------

    save(workflow) {

        const workflows =
            this.getAll();

        const index =
            workflows.findIndex(

                item =>

                    item.workflowId ===

                    workflow.workflowId

            );

        if (index >= 0) {

            workflows[index] =
                workflow;

        }
        else {

            workflows.push(
                workflow
            );

        }

        this.saveAll(
            workflows
        );

        return workflow;

    }

    //--------------------------------------------------
    // Find By ID
    //--------------------------------------------------

    findById(workflowId) {

        return this
            .getAll()
            .find(

                workflow =>

                    workflow.workflowId ===

                    workflowId

            );

    }

    //--------------------------------------------------
    // Delete
    //--------------------------------------------------

    delete(workflowId) {

        const workflows =
            this.getAll().filter(

                workflow =>

                    workflow.workflowId !==

                    workflowId

            );

        this.saveAll(
            workflows
        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const workflows =
            this.getAll();

        return {

            totalWorkflows:
                workflows.length,

            completed:
                workflows.filter(

                    workflow =>

                        workflow.status ===
                        "COMPLETED"

                ).length,

            running:
                workflows.filter(

                    workflow =>

                        workflow.status ===
                        "RUNNING"

                ).length,

            pending:
                workflows.filter(

                    workflow =>

                        workflow.status ===
                        "CREATED"

                ).length

        };

    }

}