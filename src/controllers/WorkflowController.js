/**
 * ============================================================
 * ARJUN EOS
 * Workflow Controller
 *
 * Contract : WORKFLOW-005
 * Layer    : Controller
 * Purpose  : Public API for Enterprise Workflow.
 * ============================================================
 */

import WorkflowService
    from "../services/WorkflowService";

export default class WorkflowController {

    constructor() {

        this.service = new WorkflowService();

    }

    initialize() {

        return this.service.initialize();

    }

    start() {

        return this.service.start();

    }

    next() {

        return this.service.next();

    }

    previous() {

        return this.service.previous();

    }

    complete() {

        return this.service.complete();

    }

    reset() {

        return this.service.reset();

    }

    getCurrentStep() {

        return this.service.getCurrentStep();

    }

    getProgress() {

        return this.service.getProgress();

    }

    getStatistics() {

        return this.service.getStatistics();

    }

}