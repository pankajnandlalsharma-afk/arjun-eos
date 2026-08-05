/**
 * ============================================================
 * ARJUN EOS
 * Workflow Service
 *
 * Contract : WORKFLOW-004
 * Layer    : Service
 * Purpose  : Executes Enterprise Workflow operations.
 * ============================================================
 */

import WorkflowEngine
    from "../engine/WorkflowEngine";

export default class WorkflowService {

    initialize() {

        WorkflowEngine.initialize();

    }

    start() {

        WorkflowEngine.start();

    }

    next() {

        WorkflowEngine.next();

    }

    previous() {

        WorkflowEngine.previous();

    }

    complete() {

        WorkflowEngine.complete();

    }

    reset() {

        WorkflowEngine.reset();

    }

    getCurrentStep() {

        return WorkflowEngine.getCurrentStep();

    }

    getProgress() {

        return WorkflowEngine.getProgress();

    }

    getStatistics() {

        return WorkflowEngine.getStatistics();

    }

}